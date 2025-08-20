---
layout: default
date: 2025-08-20
---

date: {{ page.date | date: "%Y.%m.%d" }}

<style>
  :root{ --page-font: "Courier New", D2Coding, "Nanum Gothic Coding", ui-monospace, Menlo, Consolas, monospace; }
  html, body{ font-family: var(--page-font) !important; }
</style>
<h1 style="color: #9900ffff;">The Emergence of Parochial Altruism and War</h1>

This is a simulation based on the research of *A Cooperative Species* by S. Bowles & H. Gintis.

{% raw %}
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Parochial altruism — 3D bar (interactive)</title>
<!-- ECharts + ECharts-GL (CDN) -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts-gl@2/dist/echarts-gl.min.js"></script>
<style>
  body{font-family:system-ui,apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;margin:16px;background:#111;color:#ddd}
  .row{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
  .card{background:#1b1b1b;border:1px solid #2a2a2a;border-radius:12px;padding:12px 16px}
  .sl{display:flex;align-items:center;gap:10px;margin:6px 0}
  input[type=range]{width:260px}
  #chart{width:94%;height:640px;margin-top:12px}
  .btn{padding:8px 14px;border-radius:10px;border:1px solid #2a2a2a;background:#222;color:#ddd;cursor:pointer}
  .btn:disabled{opacity:.6;cursor:not-allowed}
  .mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}
  small{color:#9aa}
</style>
</head>
<body>
  <div class="row">
    <div class="card">
      <div class="sl">
        <label for="delta_f"><b>$\delta_f$</b> (fighters death rate)</label>
        <input id="delta_f" type="range" min="0.10" max="0.20" step="0.005" value="0.185">
        <span id="delta_f_val" class="mono">0.170</span>
      </div>
      <div class="sl">
        <label for="iota_c"><b>$l_c$</b> (losers civilian-loss scale)</label>
        <input id="iota_c" type="range" min="2.00" max="2.5" step="0.05" value="2.05">
        <span id="iota_c_val" class="mono">2.00</span>
      </div>
      <div class="sl">
        <button id="runBtn" class="btn">Run</button>
        <button id="stopBtn" class="btn">Stop</button>
        <span id="status" class="mono"></span>
      </div>
      <small>G=200, n=26, T=400, burn-in=100, b=0.02, c=0.01, g=0.001, m=0.30, μ=0.005, grid=51</small>
    </div>
  </div>
  <div id="chart" class="card"></div>

<script>
// ---------- UI ----------
const deltaF = document.getElementById('delta_f');
const iotaC  = document.getElementById('iota_c');
const dval   = document.getElementById('delta_f_val');
const ival   = document.getElementById('iota_c_val');
const statusEl = document.getElementById('status');
const runBtn = document.getElementById('runBtn');
const stopBtn = document.getElementById('stopBtn');
function fmt(x, k=3){ return (+x).toFixed(k); }
deltaF.addEventListener('input', ()=> dval.textContent = fmt(deltaF.value));
iotaC .addEventListener('input', ()=> ival.textContent = fmt(iotaC.value,2));
dval.textContent = fmt(deltaF.value);
ival.textContent = fmt(iotaC.value,2);

// ---------- Chart (ECharts-GL 3D bar) ----------
const chart = echarts.init(document.getElementById('chart'));
const gridBins = 51;
function emptyOption(){
  return {
    backgroundColor: '#111',
    tooltip: {formatter: p => `f_P=${(p.value[0]).toFixed(2)}<br>f_A=${(p.value[1]).toFixed(2)}<br>freq=${p.value[2].toExponential(2)}`},
    
    xAxis3D: {type:'value', min:0, max:1, name:'Fraction Parochial', nameTextStyle:{color:'#ccc'}, axisLine:{lineStyle:{color:'#666'}}},
    yAxis3D: {type:'value', min:0, max:1, name:'Fraction Altruist',  nameTextStyle:{color:'#ccc'}, axisLine:{lineStyle:{color:'#666'}}},
    zAxis3D: {type:'value', min:0, name:'Frequency', nameTextStyle:{color:'#ccc'}, axisLine:{lineStyle:{color:'#666'}}},
    grid3D: {
      boxWidth: 160, boxDepth: 160, boxHeight: 120,
      viewControl: {alpha:28, beta:45, distance:260},
      light: {main: {intensity:2.0, shadow:false}, ambient:{intensity:0.6}}
    },
    series: [{
      type: 'bar3D',
      shading: 'lambert',
      barSize: 10/gridBins,
      itemStyle: {
        color: '#12b500ff',
        opacity: 1.0
      },
      emphasis: { itemStyle: { color: '#76fff4', opacity: 1 } },
      data: [] // {value:[x,y,z]}
    }]
  };
}
chart.setOption(emptyOption());

// ---------- Web Worker (simulation) ----------
const workerCode = `
  // --- RNG ---
  let rand = Math.random;

  function xmur3(str){
    let h = 1779033703 ^ str.length;
    for (let i=0; i<str.length; i++){
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return function(){
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      return (h ^= h >>> 16) >>> 0;
    }
  }
  function sfc32(a,b,c,d){
    return function(){
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
      var t = (a + b) | 0;
      a = b ^ (b >>> 9);
      b = (c + (c << 3)) | 0;
      c = (c << 21) | (c >>> 11);
      d = (d + 1) | 0;
      t = (t + d) | 0;
      c = (c + t) | 0;
      return (t >>> 0) / 4294967296;
    };
  }

  function binomial(n, p){
    let k = 0;
    if (p <= 0) return 0;
    if (p >= 1) return n;
    for (let i = 0; i < n; i++) if (rand() < p) k++;
    return k;
  }

  function multinomial(N, probs){
    const K = probs.length;
    const out = new Array(K).fill(0);
    let remain = N;
    let sump = 0;
    for (let k = 0; k < K; k++) sump += probs[k];
    if (sump <= 0){
      const eq = 1 / K;
      for (let k = 0; k < K; k++) probs[k] = eq;
      sump = 1;
    }

  let leftProb = sump;
  for (let k = 0; k < K - 1; k++){
    const pk = probs[k] / leftProb;
    const draw = binomial(remain, Math.max(0, Math.min(1, pk)));
    out[k] = draw;
    remain -= draw;
    leftProb -= probs[k];
  }
  out[K - 1] = remain;
  return out;
}

  // --- Constants (fixed to user's example) ---
  const PA=0, PN=1, TA=2, TN=3, TYPES=4;
  const G=200, n=26, T=400, burnin=100, gridBins=51;
  const b=0.02, c=0.01, g=0.001, m=0.30, mu=0.005;

  // --- Helpers ---
  function fractions(c){
    const tot = c[0]+c[1]+c[2]+c[3];
    const fA  = (c[PA]+c[TA])/tot;
    const fT  = (c[TA]+c[TN])/tot;
    const fPA = c[PA]/tot;
    return [fA,fT,fPA,tot];
  }
  function payoffs(ci, cj, hostile){
    const fi = fractions(ci), fj = fractions(cj);
    const base = b*fi[0];
    const peace = hostile ? 0.0 : g*fj[3]*fj[1];
    return [base-c, base, base-c+peace, base+peace];
  }
  function reproduce(counts, payoff){
    const piMin = -c, piMax = b + g*n;
    const pi = payoff.map(x => Math.max(0, Math.min(1, (x - piMin) / (piMax - piMin + 1e-12))));
    const w0=0.95;
    const fit = pi.map(x => w0 + (1-w0)*x);
    const weights = new Float64Array(TYPES);
    let W=0;
    for(let t=0;t<TYPES;t++){ weights[t]=counts[t]*fit[t]; W+=weights[t]; }
    const probs = (W>0)? Array.from(weights, x=>x/W) : [0.25,0.25,0.25,0.25];
    return multinomial(n, probs);
  }

  function applyWar(ci, cj, hostile, delta_f, iota_c){
    if(!hostile) return [ci.slice(), cj.slice(), false];
    const fi = fractions(ci), fj = fractions(cj);
    const Delta = fi[2] - fj[2];
    const p_war = Math.abs(Delta);
    if(rand() >= p_war) return [ci.slice(), cj.slice(), false];

    const ci2 = ci.slice(), cj2 = cj.slice();
    const di = binomial(ci2[PA], delta_f);
    const dj = binomial(cj2[PA], delta_f);
    ci2[PA]-=di; cj2[PA]-=dj;

    let win=ci2, lose=cj2;
    if(Delta<0){ win=cj2; lose=ci2; }
    else if(Delta===0 && rand()>=0.5){ win=cj2; lose=ci2; }

    const nLose = lose[0]+lose[1]+lose[2]+lose[3];
    let civ = Math.round(iota_c * Math.abs(Delta) * nLose);
    civ = Math.min(civ, Math.max(nLose-1,0));
    const nonPA = [lose[PN], lose[TA], lose[TN]];
    const s = nonPA[0]+nonPA[1]+nonPA[2];
    if(s>0 && civ>0){
      const probs = [nonPA[0]/s, nonPA[1]/s, nonPA[2]/s];
      const rem = multinomial(civ, probs);
      lose[PN]-=Math.min(rem[0], lose[PN]);
      lose[TA]-=Math.min(rem[1], lose[TA]);
      lose[TN]-=Math.min(rem[2], lose[TN]);
    }else{
      civ=0;
    }
    const wtot = win[0]+win[1]+win[2]+win[3];
    const rep = (wtot>0)? [win[PA]/wtot, win[PN]/wtot, win[TA]/wtot, win[TN]/wtot] : [0.25,0.25,0.25,0.25];
    const add = multinomial(civ, rep);
    for(let t=0;t<TYPES;t++){ lose[t]+=add[t]; }

    return (win===ci2) ? [ci2, cj2, true] : [cj2, ci2, true];
  }

  function mutate(C){
    const G = C.length;
    const OUT = new Array(G);
    for(let g=0; g<G; g++){
      const row = C[g].slice();
      for(let t=0;t<TYPES;t++){
        const out = binomial(row[t], mu);
        if(out>0){
          row[t] -= out;
          const add = multinomial(out, [0.25,0.25,0.25,0.25]);
          for(let k=0;k<TYPES;k++) row[k]+=add[k];
        }
      }
      let sum=row[0]+row[1]+row[2]+row[3];
      if(sum!==26){
        const probs = (sum>0)? [row[0]/sum,row[1]/sum,row[2]/sum,row[3]/sum] : [0.25,0.25,0.25,0.25];
        if(sum<26){
          const add = multinomial(26-sum, probs);
          for(let k=0;k<TYPES;k++) row[k]+=add[k];
        }else{
          const rm = multinomial(sum-26, probs);
          for(let k=0;k<TYPES;k++) row[k]=Math.max(0, row[k]-rm[k]);
        }
      }
      OUT[g]=row;
    }
    return OUT;
  }

  function migrate(C){
    const G=C.length;
    const C2 = C.map(r => r.slice());
    const out = Array.from({length:G}, _=> new Int32Array(TYPES));
    const pool = new Int32Array(TYPES);
    for(let g=0; g<G; g++){
      for(let t=0;t<TYPES;t++){
        const moved = binomial(C2[g][t], m); C2[g][t]-=moved; out[g][t]=moved; pool[t]+=moved;
      }
    }
    for(let t=0;t<TYPES;t++){
      const arr = multinomial(G>0?pool[t]:0, Array(G).fill(1/G));
      for(let g=0; g<G; g++) C2[g][t]+=arr[g];
    }
    for(let g=0; g<G; g++){
      let sum=C2[g][0]+C2[g][1]+C2[g][2]+C2[g][3];
      if(sum!==26){
        const probs = (sum>0)? [C2[g][0]/sum,C2[g][1]/sum,C2[g][2]/sum,C2[g][3]/sum] : [0.25,0.25,0.25,0.25];
        if(sum<26){
          const add = multinomial(26-sum, probs);
          for(let k=0;k<TYPES;k++) C2[g][k]+=add[k];
        }else{
          const rm = multinomial(sum-26, probs);
          for(let k=0;k<TYPES;k++) C2[g][k]=Math.max(0, C2[g][k]-rm[k]);
        }
      }
    }
    return C2;
  }

  function recordState(C, H){
    for(let g=0; g<C.length; g++){
      const n = C[g][0]+C[g][1]+C[g][2]+C[g][3];
      const fP = (C[g][PA]+C[g][PN]) / n;
      const fA = (C[g][PA]+C[g][TA]) / n;
      let i = Math.min(gridBins-1, Math.floor(fP*(gridBins-1)));
      let j = Math.min(gridBins-1, Math.floor(fA*(gridBins-1)));
      H[j*gridBins + i] += 1;
    }
  }

  onmessage = function(ev){
    const {delta_f, iota_c} = ev.data;
  
    // ---- seed PRNG from params (same params -> same run) ----
    const seedStr = 'delta=' + delta_f.toFixed(3) + ';iota=' + iota_c.toFixed(3) + ';BGv1';
    const seedGen = xmur3(seedStr);
    const rng = sfc32(seedGen(), seedGen(), seedGen(), seedGen());
    rand = () => rng();
    // ---------------------------------------------------------

    // init groups with mild TN bias (as in user's example)
    const p0 = [0.10, 0.25, 0.15, 0.50];
    const counts = new Array(G);
    for(let g=0; g<G; g++){
      counts[g] = multinomial(n, p0);
    }
    const hist = new Float64Array(gridBins*gridBins);

    for(let t=0; t<T; t++){
      // pair groups
      const idx = [...Array(G).keys()];
      for(let i=G-1; i>0; i--){ const r=Math.floor(rand()*(i+1)); const tmp=idx[i]; idx[i]=idx[r]; idx[r]=tmp; }
      const pairs = [];
      for(let k=0;k<G-1;k+=2){ pairs.push([idx[k], idx[k+1]]); }
      if(G%2===1){ pairs.push([idx[G-1], Math.floor(rand()*G)]); }

      // evaluate pairs
      const C_after = counts.map(r=> r.slice());
      const pay = Array.from({length:G}, _=> [0,0,0,0]);
      for(const [i,j] of pairs){
        const fi = fractions(C_after[i]), fj = fractions(C_after[j]);
        const hij = 1.0 - fi[1]*fj[1];
        const hostile = (rand() < hij);
        const res = applyWar(C_after[i], C_after[j], hostile, delta_f, iota_c);
        C_after[i] = res[0]; C_after[j] = res[1];
        pay[i] = payoffs(C_after[i], C_after[j], hostile);
        pay[j] = payoffs(C_after[j], C_after[i], hostile);
      }

      // reproduce
      const C_next = new Array(G);
      for(let g=0; g<G; g++){ C_next[g] = reproduce(C_after[g], pay[g]); }
      // mutate, migrate
      const C_mut = mutate(C_next);
      const C_mig = migrate(C_mut);
      for(let g=0; g<G; g++){ counts[g] = C_mig[g]; }

      if(t>=burnin) recordState(counts, hist);
    }

    // normalize hist as frequency
    let S = 0; for(let q=0;q<hist.length;q++) S+=hist[q];
    const Z = new Float64Array(hist.length);
    if(S>0){ for(let q=0;q<hist.length;q++) Z[q]=hist[q]/S; }

    postMessage({hist: Array.from(Z), gridBins});
  };
`;
const blob = new Blob([workerCode], {type:'application/javascript'});
let worker = null;

function startWorker(){
  if(worker) { worker.terminate(); worker=null; }
  worker = new Worker(URL.createObjectURL(blob));
  worker.onmessage = (ev)=>{
    const {hist, gridBins} = ev.data;
    // convert to bar3D data
    const data = [];
    const step = 1/(gridBins-1);
    let zMax = 0;
    for(let j=0;j<gridBins;j++){
      for(let i=0;i<gridBins;i++){
        const z = hist[j*gridBins+i];
        if(z>0){
          data.push({value:[i*step, j*step, z]});
          if(z>zMax) zMax=z;
        }
      }
    }
    chart.setOption({
      zAxis3D: {max: zMax>0 ? zMax : 1},
      series: [{data}]
    });
    statusEl.textContent = `done (nonzero bins: ${data.length})`;
    runBtn.disabled = false; stopBtn.disabled = true;
  };
  worker.onerror = (e)=>{
    statusEl.textContent = 'error: ' + e.message;
    runBtn.disabled = false; stopBtn.disabled = true;
  };
}

runBtn.addEventListener('click', ()=>{
  runBtn.disabled = true; stopBtn.disabled = false;
  statusEl.textContent = 'running... (G=200, T=400; this may take a few seconds)';
  startWorker();
  worker.postMessage({
    delta_f: +deltaF.value,
    iota_c:  +iotaC.value
  });
});
stopBtn.addEventListener('click', ()=>{
  if(worker){ worker.terminate(); worker=null; }
  runBtn.disabled = false; stopBtn.disabled = true;
  statusEl.textContent = 'stopped';
});

runBtn.click();
</script>
</body>
</html>
{% endraw %}

<p></p>

<h2 style="color: #9900ffff;">Are Humans Selfish or Altruistic?</h2>

We are the species Homo sapiens. The long-standing debate about our origins and nature begins with this question. About 75,000 years ago, early humans at Klasies River mouth in Africa hunted large game such as elephants and hippos, sharing their prey and cooperating collectively. This was essential for the survival of ancient people. Human cooperation was not accidental behavior but appears to form the roots of social preferences deeply embedded in human nature.

However, primordial cooperation is difficult to understand through kin-based selection or reciprocal altruism alone. This is because collective cooperation beyond family units and cooperation in one-time interactions with uncertain rewards were also manifested. Phenomena such as trade, marriage, and information exchange networks could not be explained by simple 'selfishness' alone. Moreover, one of the most characteristic interactions of ancient times was frequent and deadly conflict between groups - war. Climate fluctuations and resource scarcity certainly fueled such conflicts. But how could altruism, where individuals willingly pay costs for non-kin group members, have evolved in such an environment?

In societies without governments or formal law enforcement agencies, the following social preferences operated:

- Coordinated peer punishment among group members: strong reciprocity that abhors and punishes free-riders
- Internalization of norms: motivation for individuals to maintain cooperation and follow norms even at material cost

In the 18th century, Adam Smith's metaphor of the "invisible hand" emerged. He established the concept that society as a whole prospers when butchers, brewers, and bakers each pursue their own self-interest. These examples were remarkable instances of mutualistic cooperation showing how large-scale division of labor and market exchange were possible. In contrast, David Hume pointed out that it would be extremely difficult for selfish individuals to cooperate toward common goals in large groups of thousands, emphasizing the importance of coordination problems.

19th-century scientists, particularly Charles Darwin and Karl Pearson, recognized that war was paradoxically a powerful evolutionary force that could explain human social solidarity and altruism toward group members. This contrasted with Lord Alfred Tennyson's view of "Nature, red in tooth and claw" as something to be overcome through love and religious devotion.

By the mid-20th century, powerful metaphors like the "Prisoner's Dilemma" and the "Tragedy of the Commons" emerged to illuminate the dark side of selfishness. These two cases showed that individual rational pursuit of self-interest could ultimately bring ruin to everyone. Mancur Olson's "The Logic of Collective Action" argued that cooperation in large groups was impossible due to the free-rider problem, reaching the pessimistic conclusion that in a society composed purely of selfish individuals, moral sentiments could not prevent environmental destruction. Richard Dawkins' "The Selfish Gene" also reinforced the perception that the essential selfishness of genes is reflected in individual behavior.

However, field research by anthropologists in the late 20th century (e.g., Elinor Ostrom's studies of common pool resource management systems) and experiments by psychologists and economists (particularly research by Ernst Fehr and colleagues) directly challenged the cold logic of selfishness. This research demonstrated that humans are not simply selfish, and social preferences showing fairness, generosity, and willingness to punish free-riders were very common even in situations involving significant financial stakes. This became a new puzzle: "How did humans become such cooperative beings?"

The answer to this puzzle involves two key propositions:

(1) Humans cooperate not only out of selfishness but because they genuinely care about others' well-being, support social norms, and value ethical behavior.

(2) Moral sentiments: Groups with tendencies to cooperate with others and support ethical norms had evolutionary advantages in survival and prosperity compared to other groups, discovered through the legacy of human ancestors.

There are two models to explain this:

1. **Multi-level selection**: Individual altruists may be disadvantaged within groups, but groups with many altruistic members have advantages in survival and prosperity over other groups. Particularly, intergroup competition (warfare) during the Paleolithic era was a powerful evolutionary driver for spreading such altruistic behavior.

2. **Gene-culture coevolution**: Humanity created social environments that reduced costs for altruists and increased costs for free-riding through unique institutions and cultural transmission capabilities.
   1. Practices like reproductive leveling and resource sharing mitigated fitness disadvantages experienced by altruists within groups
   2. Mechanisms like coordinated punishment effectively sanctioned norm violators within groups, maintaining cooperation

**Parochial Altruism** refers to behavioral patterns that are altruistic within groups but hostile toward out-groups. Hostility toward outsiders (parochialism) and altruism toward in-group members evolved in complementary ways.

Frequent and deadly intergroup conflicts in hunter-gatherer societies increased the likelihood that groups with many Parochial Altruists - who willingly sacrifice and fight for their in-group - would win competitions and prosper. This formed a feedback loop where parochial altruism and warfare coevolved.

This simulation explores the coevolution of two separate traits: parochialism and altruism. These two traits provide conditions for each other's evolutionary success and explain why warfare was so frequent among early humans.

Four Model Types: 

- **Parochialist**: Altruistic toward own group members but hostile or uncooperative toward outsiders
- **Altruist**: Pays cost $c$ to contribute to public goods, but value $b$ is shared equally among all group members. Contributing to public goods is considered altruistic behavior in this model (i.e., $b > c > b/n$)
- Intergroup interactions can occur as peaceful cooperation or hostile attacks. Hostile interactions are more likely to lead to war when at least one group has sufficient parochial members.
- **Parochial Altruist (PA)**: Altruistic and hostile to external forces  
$$
bf_i^A-c
$$
- **Parochial Non-altruist (PN)**: Selfish and hostile to external forces  
$$
bf_i^A
$$
- **Tolerant Altruist (TA)**: Altruistic and not hostile to external forces  
$$
bf_i^A -c + gn_jf_j^T
$$
- **Tolerant Non-altruist (TN)**: Selfish and not hostile to external forces  
$$
bf_i^A + gn_jf_j^T
$$

<h2 style="color: #9900ffff;">Simulation Results</h2>

(A) In wartime situations (high death rate), PA is very dominant.  
(B) In peacetime situations (low death rate), TN is very dominant.

This conclusion shows that death rates in war and levels of intergroup conflict match values estimated from archaeological and ethnographic data. Simulation and actual experimental cases include:

- **Third-party punishment experiments in Papua New Guinea**

- **Brain oxytocin experiments**

- **War and group conflict increase prosocial behavior**

The conclusion that war itself may have contributed to the spread of human altruism is unpleasant and surprising. While cooperative groups gaining advantages in survival competition may be a result of warfare, it could also be the result of other environmental challenges such as the turbulent climate of the late Pleistocene. Even if altruism limited by parochialism is our legacy, it need not be our destiny - tolerant altruism is both possible and desirable.

<div class="pagination">
  <a href="{{ '/P/P_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>