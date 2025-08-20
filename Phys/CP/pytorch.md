---
layout: default
date: 2025-06-02
---

date: {{ page.date | date: "%Y.%m.%d" }}

# Pytorch Basics and Deep Learning exercises

Just a simple project. Model based on the paper *SwishNet: A Fast Convolutional Neural Network for Speech, Music and Noise Classification and Segmentation*.

```
import torch
from torch import nn
     

sample_input = torch.randn(4, 20, 8000)
     

class CausalConv1d(nn.Module):
  def __init__(self, in_channels, out_channels, length, stride):
    super().__init__()
    self.conv = nn.Conv1d(in_channels=in_channels,
                          out_channels=out_channels,
                          kernel_size=length,
                          stride=1,
                          dilation=stride,
                          padding=0)
    self._pad_length = length + (length - 1)*(length - 1) -1

  def forward(self, x):
    padding_x = nn.functional.pad(x, (self._pad_length, 0))
    y = self.conv(padding_x)
    k = self.conv.kernel_size[0]
    d = self.conv.dilation[0]
    crop = self._pad_length - d*(k-1)
    return y[:, :, crop:]
     

class CausalConvGated(nn.Module):
  def __init__(self, in_channels, out_channels, length, stride):
    super().__init__()
    self.conv_sig = CausalConv1d(in_channels=in_channels,
                          out_channels=out_channels,
                          length=length,
                          stride=stride)
    self.conv_tanh = CausalConv1d(in_channels=in_channels,
                          out_channels=out_channels,
                          length=length,
                          stride=stride)

    self.tanh = nn.Tanh()
    self.sig = nn.Sigmoid()

  def forward(self, x):
    x_sig = self.sig(self.conv_sig(x))
    x_tanh = self.tanh(self.conv_tanh(x))
    return x_sig * x_tanh


class CausalConvGatedBlock(nn.Module):
  def __init__(self, in_channels, out_channels):
    super().__init__()
    self.conv_up = CausalConvGated(in_channels=in_channels,
                          out_channels=out_channels,
                          length=3,
                          stride=1)
    self.conv_down = CausalConvGated(in_channels=in_channels,
                          out_channels=out_channels,
                          length=3,
                          stride=1)

  def forward(self, x):
      x_up = self.conv_up(x)
      x_down = self.conv_down(x)
      return torch.cat([x_up, x_down], dim=1)
     

class SwishNet(nn.Module):
  def __init__(self):
    super().__init__()

    self.CCGB1 = CausalConvGatedBlock(20, 16)
    self.CCGB2 = CausalConvGatedBlock(32, 8)
    self.CCGB3 = CausalConvGatedBlock(16, 8)

    self.CCG1 = CausalConvGated(16, 16, 3, 3)
    self.CCG2 = CausalConvGated(16, 16, 3, 2)
    self.CCG3 = CausalConvGated(16, 16, 3, 2)
    self.CCG4 = CausalConvGated(16, 16, 3, 2)
    self.CCG5 = CausalConvGated(16, 32, 3, 2)

    self.finCC = nn.Conv1d(in_channels=80, out_channels=3, kernel_size=1, stride=1)

  def forward(self, x):
    x = self.CCGB1(x)
    x = self.CCGB2(x)
    x = self.CCGB3(x) + x
    x = self.CCG1(x) + x

    skip1 = self.CCG2(x)
    x = skip1 * x
    skip2 = self.CCG3(x)
    x = skip2 * x
    skip3 = self.CCG4(x)
    x = skip3 * x
    x = self.CCG5(x)
    x = torch.cat([skip1, skip2, skip3, x], dim=1)

    x = self.finCC(x)
    x = x.mean(dim=2)
    return x
```

```
import os, random
import torch, torchaudio
from torch.utils.data import Dataset, DataLoader
from torch import nn

root_dir = '/content/drive/MyDrive/gtzan/Data/'

class SoundDataset(Dataset):
    def __init__(self, root_dir, classes, transform=None,
                 sample_rate=16000, segment_seconds=2, use_pt=False):
        self.sample_rate = sample_rate
        self.seg_len = segment_seconds * sample_rate
        self.transform = transform
        self.use_pt = use_pt
        self.classes = classes
        self.file_list = []
        for idx, cls in enumerate(classes):
            cls_dir = os.path.join(root_dir, cls)
            for fname in os.listdir(cls_dir):
                if use_pt and fname.lower().endswith('.pt'):
                    self.file_list.append((os.path.join(cls_dir, fname), idx))
                elif not use_pt and fname.lower().endswith('.wav'):
                    self.file_list.append((os.path.join(cls_dir, fname), idx))

    def __len__(self):
        return len(self.file_list)

    def __getitem__(self, i):
        path, label = self.file_list[i]
        if self.use_pt:
          feat = torch.load(path)      # [1,20,T]
          return feat.squeeze(0), label

        wav, sr = torchaudio.load(path)
        if sr != self.sample_rate:
            wav = torchaudio.transforms.Resample(sr, self.sample_rate)(wav)

        wav = wav.mean(dim=0, keepdim=True)  # mono
        length = wav.size(1)
        if length >= self.seg_len:
            start = random.randint(0, length - self.seg_len)
            wav = wav[:, start:start + self.seg_len]
        else:
            pad = self.seg_len - length
            wav = nn.functional.pad(wav, (0, pad))
        if self.transform:
            feat = self.transform(wav)  # -> (n_mfcc, T)
            feat = feat.squeeze(0)
        else:
            feat = wav               # -> (1, seg_len)
        return feat, label


classes = ['speech','music','car']

# MFCC 20채널 추출
mfcc_transform = torchaudio.transforms.MFCC(
    sample_rate=16000, n_mfcc=20, log_mels=True)

for cls in classes:
    cls_dir = os.path.join(root_dir, cls)
    for fname in os.listdir(cls_dir):
        if not fname.lower().endswith('.wav'):
            continue

        wav_path = os.path.join(cls_dir, fname)
        pt_path  = wav_path[:-4] + '.pt'
        if os.path.exists(pt_path):
            continue

        try:
            wav, sr = torchaudio.load(wav_path)
        except RuntimeError as e:
            print(f"[Warning] Failed to load {wav_path!r}: {e}. Skipping.")
            continue

        if sr != 16000:
            wav = torchaudio.transforms.Resample(sr,16000)(wav)
        wav = wav.mean(dim=0, keepdim=True)      # mono
        feat = mfcc_transform(wav)               # [1,20,T]
        torch.save(feat, pt_path)
        print(f"Saved {pt_path}")

class PTDataset(Dataset):
    def __init__(self, test_dir, transform, sample_rate=16000, seg_sec=2):
        self.paths = [
            os.path.join(test_dir, f)
            for f in sorted(os.listdir(test_dir))
            if f.lower().endswith('.wav')
        ]
        self.transform   = transform
        self.sample_rate = sample_rate
        self.seg_len     = sample_rate * seg_sec

    def __len__(self):
        return len(self.paths)

    def __getitem__(self, idx):
        path = self.paths[idx]
        wav, sr = torchaudio.load(path)
        if sr != self.sample_rate:
            wav = torchaudio.transforms.Resample(sr,self.sample_rate)(wav)
        wav = wav.mean(dim=0,keepdim=True)
        L = wav.size(1)
        if L >= self.seg_len:
            wav = wav[:, :self.seg_len]
        else:
            wav = nn.functional.pad(wav, (0, self.seg_len - L))
        feat = self.transform(wav).squeeze(0)  # → [20,T]
        filename = os.path.basename(path)
        return feat, filename

train_ds = SoundDataset('/content/drive/MyDrive/gtzan/Data', classes, transform=mfcc_transform)
test_ds  = SoundDataset('/content/drive/MyDrive/gtzan/test', classes, transform=mfcc_transform)
actualtest_ds  = PTDataset('/content/drive/MyDrive/gtzan/realtest', transform=mfcc_transform)

train_loader = DataLoader(train_ds, batch_size=32, shuffle=True,  num_workers=2)
test_loader  = DataLoader(test_ds,  batch_size=32, shuffle=False, num_workers=2)
actualtest_loader = DataLoader(actualtest_ds, batch_size=32, shuffle=False, num_workers=2)
     
```

```
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model  = SwishNet().to(device)
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3, weight_decay=1e-5)
num_epochs = 50

start_epoch = 1

if os.path.exists('ckpt.pt'):
    ckpt = torch.load('ckpt.pt')
    if 'model_state' in ckpt:
        model.load_state_dict(ckpt['model_state'])
        optimizer.load_state_dict(ckpt['optim_state'])
        start_epoch = ckpt['epoch'] + 1
    else:
        model.load_state_dict(ckpt)
        start_epoch = 1

for epoch in range(1, num_epochs+1):
    # — train —
    model.train()
    running_loss = 0.0
    correct = total = 0
    for X, Y in train_loader:
        X, Y = X.to(device), Y.to(device)
        optimizer.zero_grad()
        logits = model(X)                 # -> (batch,4)
        loss   = criterion(logits, Y)
        loss.backward()
        optimizer.step()

        running_loss += loss.item() * Y.size(0)
        preds = logits.argmax(dim=1)
        correct += (preds == Y).sum().item()
        total   += Y.size(0)
    train_loss = running_loss / total
    train_acc  = correct / total

    torch.save({
              'epoch': epoch,
              'model_state': model.state_dict(),
              'optim_state': optimizer.state_dict()
                }, 'ckpt.pt')

    # — validation —
    model.eval()
    val_loss = val_correct = val_total = 0
    with torch.no_grad():
        for X, Y in test_loader:
            X, Y = X.to(device), Y.to(device)
            logits = model(X)
            loss   = criterion(logits, Y)
            val_loss += loss.item() * Y.size(0)
            preds    = logits.argmax(dim=1)
            val_correct += (preds == Y).sum().item()
            val_total   += Y.size(0)
    val_loss /= val_total
    val_acc   = val_correct / val_total

    print(f"[Epoch {epoch:02d}] "
          f"Train: loss={train_loss:.3f}, acc={train_acc:.3f} | "
          f"Valid: loss={val_loss:.3f}, acc={val_acc:.3f}")
```

<div class="pagination">
  <a href="{{ '/Phys/CP/CP_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>