---
layout: default
date: 2024-11-21
---

date: {{ page.date | date: "%Y.%m.%d" }}

# InvDesFlow

ceased



## 1. DiffCSP 환경 세팅

**환경:**

```markdown
python==3.8.13
torch==1.9.0
torch-geometric==1.7.2
pytorch_lightning==1.3.8
pymatgen==2023.8.10
```

```bash
conda create -n inv_env python=3.8.13
conda activate inv_env
pip install torch==1.9.0 torch-geometric==1.7.2 
pytorch_lightning==1.3.8 pymatgen==2023.8.10
```

**.env 파일 생성:**

```bash
PROJECT_ROOT=/absolute/path/to/repo
HYDRA_JOBS=/absolute/path/to/hydra_outputs
WANDB_DIR=/absolute/path/to/wandb_outputs
```

**wandb 로그인 및 설치**

[사이트 주소](https://wandb.ai/home)

```bash
wandb login
```

학습할 물질: 

- CrO
- CrSb

## 2. DiffCSP 모델 학습

**CSP (Crystal Structure Prediction) 작업하기:**

```bash
python diffcsp/run.py data=<dataset> expname=<expname>
```

- `dataset`: 데이터셋 종류로, DiffCSP에서는 아래 네 가지를 보유하고 있음
    - **`perov_5`**: ABO₃ 형태로 구성된 데이터셋
    - **`mp_20`:** Materials Project에서 추출한 화합물 데이터셋
    - **`mpts_52`:** 특정 시간축을 기준으로 나뉜 Materials Project 데이터셋
    - **`carbon_24`:** 탄소 기반 구조(다이아몬드, 그래핀 등) 데이터셋
- `<expname>`: 결과 식별을 위한 프로젝트 이름

위 기본 코드를 상황과 환경에 따라 아래 방법 중 하나를 선택해 실행해야 합니다.

### 2.1 DiffCSP에서 제공하는 데이터셋을 사용한 모델 학습

1. **Crystal Structure Prediction:** 기존의 데이터 베이스에 CrO가 존재해서 이 구조를 분석하려는 경우 아래 코드를 실행

```bash
HYDRA_FULL_ERROR=1 python diffcsp/run.py data=mp_20 expname=CrO_experiment
```

1. **초기 구조 생성 작업 (Ab Initio Generation):** 새로운 CrO 구조를 생성/설계하려는 경우 아래 코드를 실행

```csharp
HYDRA_FULL_ERROR=1 python diffcsp/run.py data=mp_20 model=diffusion_w_type expname=CrO_experiment
```

- `HYDRA_FULL_ERROR`: 자세한 에러 정보를 확인하기 위한 코드
- `mp_20.yaml` 파일 내용을 컴퓨터 환경에 맞춰 수정:

```yaml
...
train_max_epochs: 500   # epoch 값을 조정
early_stopping_patience: 20
teacher_forcing_max_epoch: 500

...

  num_workers:
    train: 32
    val: 32
    test: 32

  batch_size:
    train: 256
    val: 128
    test: 128
```

실행 결과:

```bash
...
--------------------------------------------------------------------------------
DATALOADER:0 TEST RESULTS
{'test_coord_loss': 0.5537380576133728,
 'test_lattice_loss': 0.41916021704673767,
 'test_loss': 1.0411282777786255,
 'test_type_loss': 0.003411496290937066}
--------------------------------------------------------------------------------
wandb: Waiting for W&B process to finish... (success).
wandb: 
wandb: Run history:
wandb:    coord_loss_epoch █▇▆▅▅▅▄▄▄▄▃▃▃▃▃▃▂▂▂▂▂▂▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁▁▁
wandb:     coord_loss_step █▇▆▆▆▅▅▅▄▄▄▄▃▃▃▃▃▃▃▃▂▂▃▃▃▂▃▂▂▂▂▂▁▁▁▁▁▂▂▃
wandb:               epoch ▁▁▁▁▂▂▂▂▂▃▃▃▃▃▃▄▄▄▄▄▅▅▅▅▅▅▆▆▆▆▆▇▇▇▇▇▇███
wandb:  lattice_loss_epoch █▅▄▄▄▄▃▃▃▃▃▂▂▃▂▂▂▂▂▂▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁
wandb:   lattice_loss_step █▅▄▄▅▄▅▄▄▃▃▃▃▂▂▂▃▃▂▂▂▃▂▂▂▃▁▂▂▂▂▁▂▁▂▂▁▁▁▂
wandb:             lr-Adam ██████████████████████████▄▄▄▄▄▄▄▄▄▄▄▁▁▁
wandb:     test_coord_loss ▁
wandb:   test_lattice_loss ▁
wandb:           test_loss ▁
wandb:      test_type_loss ▁
wandb:    train_loss_epoch █▄▃▃▃▃▂▂▂▂▂▂▂▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
wandb:     train_loss_step █▅▄▃▄▃▃▃▃▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▁▂▁▁▁▁▁▁▁▁▁▁▁▂
wandb: trainer/global_step ▁▁▁▂▂▂▂▂▂▃▃▃▃▃▄▄▄▄▄▄▅▅▅▅▅▅▆▆▆▆▆▇▇▇▇▇▇███
wandb:     type_loss_epoch █▃▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
wandb:      type_loss_step █▄▃▂▂▂▂▂▂▂▁▂▁▁▁▁▁▁▁▁▁▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
wandb:      val_coord_loss █▇▆▅▅▅▄▄▄▄▃▃▃▃▃▂▂▂▂▂▂▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁▁▁▁
wandb:    val_lattice_loss █▅▅▄▄▄▃▃▃▃▃▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁
wandb:            val_loss █▄▃▃▃▃▂▂▂▂▂▂▂▂▂▂▂▂▂▁▂▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
wandb:       val_type_loss █▃▂▂▂▂▂▁▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
wandb: 
wandb: Run summary:
wandb:    coord_loss_epoch 0.54202
wandb:     coord_loss_step 0.52787
wandb:               epoch 499
wandb:  lattice_loss_epoch 0.41002
wandb:   lattice_loss_step 0.45007
wandb:             lr-Adam 0.00036
wandb:     test_coord_loss 0.55374
wandb:   test_lattice_loss 0.41916
wandb:           test_loss 1.04113
wandb:      test_type_loss 0.00341
wandb:    train_loss_epoch 1.01416
wandb:     train_loss_step 1.05324
wandb: trainer/global_step 53000
wandb:     type_loss_epoch 0.00311
wandb:      type_loss_step 0.00377
wandb:      val_coord_loss 0.55029
wandb:    val_lattice_loss 0.41547
wandb:            val_loss 1.0332
wandb:       val_type_loss 0.00337
```

### 2.2 임의 조성 샘플링 (Sampling from Arbitrary Composition)을 통한 학습

**챕터 2.1** 에서와 같이 `data=mp_20` 를 입력하는 방식은 material project에 이미 올라와 있는 데이터셋을 이용하는 것입니다. 하지만 이렇게 기존에 준비된 데이터셋이 아니라 임의의 초기 구조 데이터를 생성하려는 경우에는 아래 코드를 사용해 샘플을 먼저 만들고 난 뒤에 [`run.py`](http://run.py) 코드를 실행해야 합니다.

```bash
HYDRA_FULL_ERROR=1 python DiffCSP/scripts/sample.py 
--model_path ./DiffCSP/diffcsp/prop_models/mp20 
--save_path ./DiffCSP/generated_structures --formula CrO --num_evals 50

PYTHONPATH=DiffCSP HYDRA_FULL_ERROR=1 python DiffCSP/scripts/sample.py --model_path "./DiffCSP/diffcsp/prop_models/mp20" --save_path "generated_structures" --formula "CrO_mod" --num_evals 50
```

- `<model_path>`: 모델 체크포인트 경로
- `<save_path>`: 생성된 구조를 저장할 경로
- `-formula CrO`: CrO 화합물을 지정
- `-num_evals`: 생성할 구조 수

시도: model

```bash
(invdesflow_env) root@7db99df9e5ff:/InvDesFlow# PYTHONPATH=DiffCSP HYDRA_FULL_ERROR=1 python DiffCSP/scripts/sample.py --model_path "./DiffCSP/diffcsp/prop_models/mp20" --save_path "generated_structures" --formula "CrO_mod" --num_evals 50
/InvDesFlow/DiffCSP/diffcsp/pl_data/dataset.py:155: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  @hydra.main(config_path=str(PROJECT_ROOT / "conf"), config_name="default")
/InvDesFlow/DiffCSP/diffcsp/pl_data/datamodule.py:152: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  @hydra.main(config_path=str(PROJECT_ROOT / "conf"), config_name="default")
/InvDesFlow/DiffCSP/scripts/eval_utils.py:98: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  with initialize_config_dir(str(abs_model_path)):
/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/experimental/compose.py:25: UserWarning: hydra.experimental.compose() is no longer experimental. Use hydra.compose()
  deprecation_warning(message=message)
/InvDesFlow/DiffCSP/diffcsp/pl_modules/model.py:138: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  @hydra.main(config_path=str(PROJECT_ROOT / "conf"), config_name="default")
Evaluate the diffusion model.
Traceback (most recent call last):
  File "DiffCSP/scripts/sample.py", line 163, in <module>
    main(args)
  File "DiffCSP/scripts/sample.py", line 135, in main
    (frac_coords, atom_types, lattices, lengths, angles, num_atoms) = diffusion(test_loader, model, args.step_lr)
  File "DiffCSP/scripts/sample.py", line 61, in diffusion
    outputs, traj = model.sample(batch, step_lr = step_lr)
  File "/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/torch/nn/modules/module.py", line 1130, in __getattr__
    raise AttributeError("'{}' object has no attribute '{}'".format(
AttributeError: 'CrystGNN_Supervise' object has no attribute 'sample'

```

>> CrystGNN_Supervise 타입이 sample 메서드를 제공하지 않아 불가능했음

시도: **2.1**에서 학습한 모델을 사용하는 방법

```bash
(invdesflow_env) root@7db99df9e5ff:/InvDesFlow# PYTHONPATH=DiffCSP HYDRA_FULL_ERROR=1 python DiffCSP/scripts/sample.py --model_path "outputs/hydra_jobs/singlerun/2025-02-01/CrO_experiment_abinitio" --save_path "generated_structures" --formula "CrO" --num_evals 50
/InvDesFlow/DiffCSP/diffcsp/pl_data/dataset.py:155: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  @hydra.main(config_path=str(PROJECT_ROOT / "conf"), config_name="default")
/InvDesFlow/DiffCSP/diffcsp/pl_data/datamodule.py:152: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  @hydra.main(config_path=str(PROJECT_ROOT / "conf"), config_name="default")
/InvDesFlow/DiffCSP/scripts/eval_utils.py:98: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  with initialize_config_dir(str(abs_model_path)):
/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/experimental/compose.py:25: UserWarning: hydra.experimental.compose() is no longer experimental. Use hydra.compose()
  deprecation_warning(message=message)
Traceback (most recent call last):
  File "DiffCSP/scripts/sample.py", line 163, in <module>
    main(args)
  File "DiffCSP/scripts/sample.py", line 120, in main
    model, _, cfg = load_model(
  File "/InvDesFlow/DiffCSP/scripts/eval_utils.py", line 99, in load_model
    cfg = compose(config_name='hparams')
  File "/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/experimental/compose.py", line 26, in compose
    return real_compose(
  File "/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/compose.py", line 38, in compose
    cfg = gh.hydra.compose_config(
  File "/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/_internal/hydra.py", line 594, in compose_config
    cfg = self.config_loader.load_configuration(
  File "/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/_internal/config_loader_impl.py", line 142, in load_configuration
    return self._load_configuration_impl(
  File "/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/_internal/config_loader_impl.py", line 243, in _load_configuration_impl
    self.ensure_main_config_source_available()
  File "/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/_internal/config_loader_impl.py", line 129, in ensure_main_config_source_available
    self._missing_config_error(
  File "/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/_internal/config_loader_impl.py", line 102, in _missing_config_error
    raise MissingConfigException(
hydra.errors.MissingConfigException: Primary config directory not found.
Check that the config directory '/InvDesFlow/outputs/hydra_jobs/singlerun/2025-02-01/CrO_experiment_abinitio' exists and readable
(invdesflow_env) root@7db99df9e5ff:/InvDesFlow# cd DiffCSP
(invdesflow_env) root@7db99df9e5ff:/InvDesFlow/DiffCSP# vim .env
(invdesflow_env) root@7db99df9e5ff:/InvDesFlow/DiffCSP# cd ..
(invdesflow_env) root@7db99df9e5ff:/InvDesFlow# PYTHONPATH=DiffCSP HYDRA_FULL_ERROR=1 python DiffCSP/scripts/sample.py --model_path "outputs/hydra_jobs/singlerun/2025-02-01/CrO_experiment_abinitio" --save_path "generated_structures" --formula "CrO" --num_evals 50
/InvDesFlow/DiffCSP/diffcsp/pl_data/dataset.py:155: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  @hydra.main(config_path=str(PROJECT_ROOT / "conf"), config_name="default")
/InvDesFlow/DiffCSP/diffcsp/pl_data/datamodule.py:152: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  @hydra.main(config_path=str(PROJECT_ROOT / "conf"), config_name="default")
/InvDesFlow/DiffCSP/scripts/eval_utils.py:98: UserWarning: 
The version_base parameter is not specified.
Please specify a compatability version level, or None.
Will assume defaults for version 1.1
  with initialize_config_dir(str(abs_model_path)):
/root/miniconda3/envs/invdesflow_env/lib/python3.8/site-packages/hydra/experimental/compose.py:25: UserWarning: hydra.experimental.compose() is no longer experimental. Use hydra.compose()
  deprecation_warning(message=message)
Evaluate the diffusion model.
100%|██████████████████████████████████████████████████████████| 1000/1000 [00:06<00:00, 165.59it/s]
100%|█████████████████████████████████████████████████████████████| 50/50 [00:00<00:00, 2278.03it/s]
1 Error Structure.
2 Error Structure.
3 Error Structure.
4 Error Structure.
5 Error Structure.
6 Error Structure.
7 Error Structure.
8 Error Structure.
9 Error Structure.
10 Error Structure.
11 Error Structure.
12 Error Structure.
13 Error Structure.
14 Error Structure.
15 Error Structure.
16 Error Structure.
17 Error Structure.
18 Error Structure.
19 Error Structure.
20 Error Structure.
21 Error Structure.
22 Error Structure.
23 Error Structure.
24 Error Structure.
25 Error Structure.
26 Error Structure.
27 Error Structure.
28 Error Structure.
29 Error Structure.
30 Error Structure.
31 Error Structure.
32 Error Structure.
33 Error Structure.
34 Error Structure.
35 Error Structure.
36 Error Structure.
37 Error Structure.
38 Error Structure.
39 Error Structure.
40 Error Structure.
41 Error Structure.
42 Error Structure.
43 Error Structure.
44 Error Structure.
45 Error Structure.
46 Error Structure.
47 Error Structure.
48 Error Structure.
49 Error Structure.
50 Error Structure.

```

 >> get_pymatgen() 함수 내부에서 변환 과정 중에 문제가 발생, Error Structure가 출력됨 

>>> 생성된 lattice 파라미터, 분수 좌표, 원자 타입 등이 물리적으로 타당하지 않아서?

>>> 조성(CrO)이 원래 모델이 학습한 범위와 다르거나, 하이퍼파라미터 설정이 적절하지 않아서?

이 코드를 실행했을 때 만들어지는 샘플링 결과는 `.pt` 파일로 되어 있기 때문에, 이 파일을 `.cif` 파일로 변환하기 위해 `InvDesFlow.ipynb` 파일의 코드를 이용합니다.

이후에 `.cif` 파일로 변환한 데이터셋이 있는 디렉토리를 DiffCSP 데이터 포맷으로 변환하면:

```bash
python cif2dataset.py --cif_dir my_cifs_data_dir 
--dataset_name my_dataset_name
```

이후 이 디렉토리의 주소로 초기 구조 생성 작업을 **2.1** 챕터와 동일하게 실행:

```bash
HYDRA_FULL_ERROR=1 python diffcsp/run.py data=<dataset_directory> 
model=diffusion_w_type expname=CrO_experiment
```

## **3. 평가 (Evaluation)**

1. **안정적인 구조 예측하기:**
- 단일 샘플의 경우

```bash

python scripts/evaluate.py --model_path <model_path> --dataset <dataset>
python scripts/compute_metrics.py --root_path <model_path> 
--tasks csp --gt_file data/<dataset>/test.csv
```

```bash

python scripts/evaluate.py --model_path ./outputs/hydra_jobs/singlerun/2025-02-01/CrO_experiment_abinitio/epoch=484-step=51409.ckpt --dataset ./Data/data_materials.csv
python scripts/compute_metrics.py --root_path ./outputs/hydra_jobs/singlerun/2025-02-01/CrO_experiment_abinitio/epoch=484-step=51409.ckpt 
--tasks csp --gt_file data/mp_20/test.csv
```

- 다중 샘플의 경우

```bash
python scripts/evaluate.py --model_path <model_path> 
--dataset <dataset> --num_evals 20
python scripts/compute_metrics.py --root_path <model_path> 
--tasks csp --gt_file data/<dataset>/test.csv --multi_eval
```

1. **초기 구조 생성 평가하기:**

```bash
python scripts/generation.py --model_path <model_path> --dataset <dataset>
python scripts/compute_metrics.py --root_path <model_path> 
--tasks gen --gt_file data/<dataset>/test.csv
```

## **4. 특성 최적화 (Property Optimization)**

**에너지 예측 모델 학습:**

```bash
python diffcsp/run.py data=<dataset> model=energy expname=<expname> 
data.datamodule.batch_size.test=100
```

**최적화 수행하기:**

```bash
python scripts/optimization.py --model_path <energy_model_path> 
--uncond_path <model_path>
```

**평가하기:**

```bash
python scripts/compute_metrics.py --root_path <energy_model_path> --tasks opt
```

---

## References

[InvDesFlow: An AI search engine to explore possible high-temperature superconductors](https://arxiv.org/abs/2409.08065)

[Code](https://github.com/xqh19970407/InvDesFlow)


<div class="pagination">
  <a href="{{ '/Phys/CP/CP_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>