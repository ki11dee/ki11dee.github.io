---
layout: default
---

# CrySPY


## Installation

Python version checking : `python --version`

## Quick Install

```bash
pip3 install csp-cryspy dscribe physbo
```

## CrySPY utility (optional)

```bash
git clone https://github.com/Tomoki-YAMASHITA/CrySPY_utility.git
```

# Tutorial

## Random Search  - ASE in your local PC

[Automic Simulation Environment](https://wiki.fysik.dtu.dk/ase/)

[Pure Python EMT calculator](https://wiki.fysik.dtu.dk/ase/ase/calculators/emt.html#module-ase.calculators.emt)  

## 1. Assumption

assume the following conditions:

- CrySPY 1.2.0 or later in your local PC
- CrySPY job filename: `job_cryspy`
- ase input filename: `ase_in.py`

## 2. Input files

```bash
cd ase_Cu8_RS
tree
```

```bash
.
├── calc_in
│   ├── ase_in.py_1
│   └── job_cryspy
└── cryspy.in
```

## 3. calc_in directory

The job file and input files for ASE are prepared in this directory.

### Job file

```bash
#!/bin/sh

# ---------- ASE
python3 ase_in.py

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```

### Input for ASE

```python
from ase.constraints import ExpCellFilter, StrainFilter
from ase.calculators.emt import EMT
from ase.calculators.lj import LennardJones
from ase.optimize.sciopt import SciPyFminCG
from ase.optimize import BFGS
from ase.spacegroup.symmetrize import FixSymmetry
import numpy as np
from ase.io import read, write

# ---------- input structure
# CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory
atoms = read('POSCAR', format='vasp')

# ---------- setting and run
atoms.calc = EMT()
atoms.set_constraint([FixSymmetry(atoms)])
atoms = ExpCellFilter(atoms, hydrostatic_strain=False)
opt = BFGS(atoms)
#opt=SciPyFminCG(atoms)
opt.run()

# ---------- opt. structure and energy
# [rule in ASE interface]
# output file for energy: 'log.tote' in eV/cell
#                         CrySPY reads the last line of 'log.tote'
# output file for structure: 'CONTCAR' in vasp format
e = atoms.atoms.get_total_energy()
with open('log.tote', mode='w') as f:
    f.write(str(e))

write('CONTCAR', atoms.atoms, format='vasp')
```

Unlike VASP and QE, the ASE input (python script) is more flexible. CrySPY has two rules:

1. Optimized structure is output to `CONTCAR`` file in the VASP format.
    1. Energy is output in units of eV/cell to `log.tote` file. CrySPY reads the last line of it.

# Running CrySPY

## [Check cryspy.in](https://tomoki-yamashita.github.io/CrySPY_doc/tutorial/random/cryspy_in/)

### [basic] section

- `algo`: Algorithm. Set `RS` for Random Search.
- `calc_code`: Structure optimizer. Choose from `VASP`, `QE`, `OMX`, `soiap`, `LAMMPS`
- `tot_struc`: The total number of structures. In this case, 5 random structures are generated at 1st run.
- `nstage`: The number of stages. It’s up to you.
- `njob`: The number of jobs running at the same time. In this example, CrySPY sets 2 slots for structure optimization, in other words, optimizes every 2 structures.
- `jobcmd`: Command for jobs. Use `bash`, `zsh`, `qsub`, and so on.
- `jobfile`: File name of the job file.

### [structure]  section

- `natot`: The total number of atoms. e.g. for Na8Cl8: `natot = 16`.
- `atype`: Atom type. e.g. for Na8Cl8: `atype = Na Cl`.
- `nat`: The number of each atom. e.g. for Na8Cl8: `nat = 8 8`

## [First run](https://tomoki-yamashita.github.io/CrySPY_doc/tutorial/random/first_run/)

```bash
[2024-09-27 22:20:07,488][cryspy_init][INFO] 

Start CrySPY 1.3.0

[2024-09-27 22:20:07,489][cryspy_init][INFO] # ---------- Library version info
[2024-09-27 22:20:07,489][cryspy_init][INFO] pandas version: 2.2.3
[2024-09-27 22:20:07,489][cryspy_init][INFO] pymatgen version: 2024.9.17.1
[2024-09-27 22:20:07,489][cryspy_init][INFO] pyxtal version: 1.0.3
[2024-09-27 22:20:07,490][cryspy_init][INFO] # ---------- Read input file, cryspy.in
[2024-09-27 22:20:07,492][write_input][INFO] [basic]
[2024-09-27 22:20:07,493][write_input][INFO] algo = RS
[2024-09-27 22:20:07,493][write_input][INFO] calc_code = ASE
[2024-09-27 22:20:07,493][write_input][INFO] tot_struc = 5
[2024-09-27 22:20:07,493][write_input][INFO] nstage = 1
[2024-09-27 22:20:07,493][write_input][INFO] njob = 2
[2024-09-27 22:20:07,493][write_input][INFO] jobcmd = bash
[2024-09-27 22:20:07,493][write_input][INFO] jobfile = job_cryspy
[2024-09-27 22:20:07,493][write_input][INFO] 
[2024-09-27 22:20:07,493][write_input][INFO] [structure]
[2024-09-27 22:20:07,493][write_input][INFO] struc_mode = crystal
[2024-09-27 22:20:07,493][write_input][INFO] natot = 8
[2024-09-27 22:20:07,493][write_input][INFO] atype = ('Cu',)
[2024-09-27 22:20:07,494][write_input][INFO] nat = (8,)
[2024-09-27 22:20:07,494][write_input][INFO] mindist_factor = 1.0
[2024-09-27 22:20:07,494][write_input][INFO] vol_factor = 1.1
[2024-09-27 22:20:07,494][write_input][INFO] symprec = 0.01
[2024-09-27 22:20:07,494][write_input][INFO] spgnum = all
[2024-09-27 22:20:07,494][write_input][INFO] use_find_wy = False
[2024-09-27 22:20:07,494][write_input][INFO] 
[2024-09-27 22:20:07,494][write_input][INFO] [option]
[2024-09-27 22:20:07,494][write_input][INFO] stop_chkpt = 0
[2024-09-27 22:20:07,494][write_input][INFO] load_struc_flag = False
[2024-09-27 22:20:07,494][write_input][INFO] stop_next_struc = False
[2024-09-27 22:20:07,494][write_input][INFO] append_struc_ea = False
[2024-09-27 22:20:07,494][write_input][INFO] energy_step_flag = False
[2024-09-27 22:20:07,495][write_input][INFO] struc_step_flag = False
[2024-09-27 22:20:07,495][write_input][INFO] force_step_flag = False
[2024-09-27 22:20:07,495][write_input][INFO] stress_step_flag = False
[2024-09-27 22:20:07,495][write_input][INFO] 
[2024-09-27 22:20:07,495][write_input][INFO] [ASE]
[2024-09-27 22:20:07,495][write_input][INFO] kpt_flag = False
[2024-09-27 22:20:07,495][write_input][INFO] force_gamma = False
[2024-09-27 22:20:07,495][write_input][INFO] ase_python = ase_in.py
[2024-09-27 22:20:07,496][rs_gen][INFO] # ---------- Initial structure generation
[2024-09-27 22:20:07,496][rs_gen][INFO] # ------ mindist
[2024-09-27 22:20:07,499][struc_util][INFO] Cu - Cu: 1.32
[2024-09-27 22:20:07,499][rs_gen][INFO] # ------ generate structures
[2024-09-27 22:20:07,700][gen_pyxtal][INFO] Structure ID      0: (8,) Space group:   3 -->   3 P2
[2024-09-27 22:20:07,728][gen_pyxtal][INFO] Structure ID      1: (8,) Space group: 218 --> 221 Pm-3m
[2024-09-27 22:20:07,840][gen_pyxtal][INFO] Structure ID      2: (8,) Space group: 123 --> 123 P4/mmm
[2024-09-27 22:20:08,081][gen_pyxtal][INFO] Structure ID      3: (8,) Space group:  77 -->  77 P4_2
[2024-09-27 22:20:08,265][gen_pyxtal][INFO] Structure ID      4: (8,) Space group: 134 --> 123 P4/mmm
[2024-09-27 22:20:09,229][cryspy_init][INFO] Elapsed time for structure generation: 0:00:01.732396
```

Let’s take a look at `cryspy.stat` file.

```
[status]
id_queueing = 0 1 2 3 4
```

Structure ID 0 – 4 are queueing because we just generated structures, and have not submitted yet.

> Check the initial structures, if the distances between atoms are too close, you should set the `mindist` in `cryspy.in`.
> 
- **Restriction on interatomic distances**
    - example of [structure] section
    
    ```
    [structure]
    natot = 8
    atype = A B
    nat = 4 4
    mindist_1 = 2.0 1.8
    mindist_2 = 1.8 1.5
    ```
    
    This means that minimum interatomic distances of A-A, A-B, and B-B are limited to 2.0, 1.8, and 1.5 Å, respectively. Structures with interatomic distances shorter than these values are automatically eliminated.
    
    For ternary systems, you will need `mindist_1`, `mindist_2`, and `mindist_3`. Mindist matrix must be a symmetric matrix.
    

## [Submit job](https://tomoki-yamashita.github.io/CrySPY_doc/tutorial/random/submit_job/)

Continue if you have `cryspy.stat` 

Start from the beginning if you don’t have it.

Rerun cryspy:

```bash
[2024-09-27 22:28:11,291][cryspy_restart][INFO] 

Restart CrySPY 1.3.0

[2024-09-27 22:28:11,292][cryspy_restart][INFO] read input, cryspy.in
[2024-09-27 22:28:11,306][ctrl_job][INFO] # ---------- job status
[2024-09-27 22:28:12,228][ctrl_job][INFO] ID      0: submit job, Stage 1
[2024-09-27 22:28:12,231][ctrl_job][INFO] ID      1: submit job, Stage 1
```

Check the screen or `log_cryspy` file. Check the screen or `log_cryspy` file.
And also `cryspy.stat` file.

```
[status]
id_queueing = 2 3 4
id      0 = Stage 1
id      1 = Stage 1
```

CrySPY submitted two jobs for structure ID 0 and 1 as you set `njob = 2` in `cryspy.in`. Calculations are performed in the `work` directory. These directory names correspond to their structure ID. Check `tree -d work`.

When the two jobs are done, run CrySPY again. 

You may find it tedious to run `cryspy` over and over again. This auto script could help you. This runs `cryspy` once every 5 minutes.

- [Repeat_cryspy](https://tomoki-yamashita.github.io/CrySPY_doc/cryspy_utility/scripts/repeat/)
    
    ```bash
    #!/bin/bash
    
    set -e
    
    while :
    do
        cryspy -n
        LOG_LASTLINE=`tail -n 1 log_cryspy`
        if  [ "$LOG_LASTLINE" = "Done all structures!" ]
        then
            exit 0
        # ---------- for EA
        elif [ "${LOG_LASTLINE:0:17}" = "Reached maxgen_ea" ]
        then
            exit 0
        elif [ "$LOG_LASTLINE" = "EA is ready" ]
        then
            cryspy -n    # EA
            LOG_LASTLINE=`tail -n 1 log_cryspy`
            if [ "${LOG_LASTLINE:0:17}" = "Reached maxgen_ea" ]
            then
                exit 0
            fi
            cryspy -n    # submit jobs
        # ---------- for BO
        elif [ "${LOG_LASTLINE:0:21}" = "Reached max_select_bo" ]
        then
            exit 0
        elif [ "$LOG_LASTLINE" = "BO is ready" ]
        then
            cryspy -n    # selection
            LOG_LASTLINE=`tail -n 1 log_cryspy`
            if [ "${LOG_LASTLINE:0:21}" = "Reached max_select_bo" ]
            then
                exit 0
            fi
            cryspy -n    # submit jobs
        # ---------- for LAQA
        elif [ "$LOG_LASTLINE" = "LAQA is ready" ]
        then
            cryspy -n    # selection
            cryspy -n    # submit jobs
        fi
        sleep 20    # seconds
    done
    ```
    

## [Check results](https://tomoki-yamashita.github.io/CrySPY_doc/tutorial/random/result/)

Move to `data` directory.

- `cryspy_rslt`: Result file.
- `cryspy_rslt_energy_asc`: Result file sorted in energy ascending order.
- `init_POSCARS`: Initial structure file in POSCAR format.
    - What is POSCAR?
        
        POSCAR is a file format used in computational materials science, particularly with the Vienna Ab initio Simulation Package (VASP). It contains structural information about a crystal, including:
        
        - Lattice vectors
        - Atomic positions
        - Number and types of atoms
        
        In the context of CrySPY, POSCAR files are used to store both initial and optimized crystal structures. This format allows for easy visualization and further analysis of the generated structures.
        
- `opt_POSCARS`: Optimized structure file in POSCAR format.
- `pkl_data/`: Directory to save pickled data.

```bash
cat cryspy_rslt
```

In `cryspy_rslt_energy_asc` file, the results are sorted in energy ascending order.

```
   Spg_num Spg_sym  Spg_num_opt Spg_sym_opt  E_eV_atom  Magmom      Opt
0      149    P312          162       P-31m   0.149727     NaN  no_file
1      139  I4/mmm          229       Im-3m   0.025492     NaN  no_file
2      127  P4/mbm          225       Fm-3m  -0.007002     NaN  no_file
3      102  P4_2nm          131    P4_2/mmc   0.817500     NaN  no_file
4      123  P4/mmm          221       Pm-3m   0.996812     NaN  no_file
```

`Spg_num` and `Spg_sym` show space group information on initial structures. `Spg_num_opt` and `Spg_sym_opt` are those of optimized structures. The last column `Opt` indicates whether or not optimization reached required accuracy.

## [Append structures](https://tomoki-yamashita.github.io/CrySPY_doc/tutorial/random/append/)

- Structure generation mode whenever you change the value of `tot_struc`.
In this mode, CrySPY does not do any other action such as collecting data, submitting jobs, and so on.
    
    ```bash
    [2024-09-27 23:37:33,540][cryspy_restart][INFO] 
    
    Restart CrySPY 1.3.0
    
    [2024-09-27 23:37:33,540][cryspy_restart][INFO] read input, cryspy.in
    [2024-09-27 23:37:33,542][diff_input][INFO] Changed tot_struc from 5 to 10
    [2024-09-27 23:37:33,561][utility][INFO] Backup data
    [2024-09-27 23:37:33,561][cryspy_restart][INFO] # ---------- Append structures
    [2024-09-27 23:37:33,561][rs_gen][INFO] # ---------- Initial structure generation
    [2024-09-27 23:37:33,562][rs_gen][INFO] # ------ mindist
    [2024-09-27 23:37:33,562][struc_util][INFO] Si - Si: 2.0
    [2024-09-27 23:37:33,562][rs_gen][INFO] # ------ generate structures
    [2024-09-27 23:37:33,635][gen_pyxtal][INFO] Structure ID      5: (8,) Space group:  76 -->  76 P4_1
    [2024-09-27 23:37:33,636][gen_pyxtal][WARNING] Compoisition [8] not compatible with symmetry 145:     spg = 145 retry.
    [2024-09-27 23:37:33,668][gen_pyxtal][INFO] Structure ID      6: (8,) Space group: 224 --> 221 Pm-3m
    [2024-09-27 23:37:33,708][gen_pyxtal][INFO] Structure ID      7: (8,) Space group: 111 --> 123 P4/mmm
    [2024-09-27 23:37:34,099][gen_pyxtal][INFO] Structure ID      8: (8,) Space group: 173 --> 173 P6_3
    [2024-09-27 23:37:34,125][gen_pyxtal][INFO] Structure ID      9: (8,) Space group:  86 --> 129 P4/nmm
    [2024-09-27 23:37:35,070][cryspy_restart][INFO] Elapsed time for structure generation: 0:00:01.508022
    ```
    

## [Analysis and visualization](https://tomoki-yamashita.github.io/CrySPY_doc/tutorial/random/analysis_visualization/)

```bash
cp /path/to/the/file.ipynb /path/to/the/data/in/directory
```

```python
# 코드 상단에 폰트 오류 제거를 위해 추가
from matplotlib import rcParams

rcParams['font.family'] = 'DejaVu Sans'
```

# Quantum Espresso

## Assumption

ㅁssume the following conditions:

- CrySPY job command: `bash`
- CrySPY job filename: `job_cryspy`
- QE executable file: `/usr/local/qe-7.2/bin/pw.x`
- QE input filename: `pwscf.in`
- QE output filename: `pwscf.out`

### Cryspy.in example

```tsx
[basic]
algo = RS
calc_code = QE
tot_struc = 5
nstage = 2
njob = 2
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 8
atype = Si
nat = 8

[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol =  40  80

[option]
```

In `[basic]` section, `jobcmd = qsub` can be changed in accordance with your environment. CrySPY runs `qsub job_cryspy` as a background job internally in this setting.

`nstage = 2` : stage-based system for structure optimization calculations. In the first stage, only the ionic positions are relaxed, fixing the cell shape, with low k-point grid density. Next, the ionic positions and cell shape are fully relaxed with high accuracy in the second stage.

You have to specify k-point grid density (Å^-3) for each stage in `kppvol`.

```
classmethod*automatic_density_by_vol(*structure: [Structure](https://pymatgen.org/pymatgen.core.html#pymatgen.core.structure.Structure)*, *kppvol: int*, *force_gamma: bool = False*, *comment: str \| None = None*)→ Self
```

Get an automatic Kpoints object based on a structure and a kpoint density per inverse Angstrom^3 of reciprocal cell.**Algorithm:**Same as automatic_density()**Parameters:**
• **structure** ([*Structure*](https://pymatgen.org/pymatgen.core.html#pymatgen.core.structure.Structure)) – Input structure.
• **kppvol** (*int*) – Grid density per Angstrom^(-3) of reciprocal cell.
• **force_gamma** (*bool*) – Force a gamma centered mesh.
• **comment** (*str*) – Comment in Kpoints.**Returns:**Kpoints

- **structure** ([*Structure*](https://pymatgen.org/pymatgen.core.html#pymatgen.core.structure.Structure)) – Input structure.
- **kppvol** (*int*) – Grid density per Angstrom^(-3) of reciprocal cell.
- **force_gamma** (*bool*) – Force a gamma centered mesh.
- **comment** (*str*) – Comment in Kpoints.

## Calc_in Directory

### Jobfile

```bash
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Si8_CrySPY_ID
#$ -pe smp 20
####$ -q ibis1.q
####$ -q ibis2.q

mpirun -np $NSLOTS /path/to/pw.x < pwscf.in > pwscf.out

if [ -e "CRASH" ]; then
    sed -i -e '3 s/^.*$/skip/' stat_job
    exit 1
fi

sed -i -e '3 s/^.*$/done/' stat_job
```

### Input files

`pwscf.in_1` is set to fix the cell and relax only the ionic positions, while `pwscf.in_2` is configured to fully relax both the cell and ionic positions.
`pwscf.in_1`: 

```tsx
 &control
    title = 'Si8'
    calculation = 'relax'
    nstep = 100
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/'
    outdir='./out.d/'
 /

 &system
    ibrav = 0
    nat = 8
    ntyp = 1
    ecutwfc = 44.0
    occupations = 'smearing'
    degauss = 0.01
 /

 &electrons
 /

 &ions
 /

 &cell
 /

ATOMIC_SPECIES
  Si  28.086  Si.pbe-n-kjpaw_psl.1.0.0.UPF
```

`pwscf.in_2` : 

```tsx
 &control
    title = 'Si8'
    calculation = 'vc-relax'
    nstep = 200
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/'
    outdir='./out.d/'
 /

 &system
    ibrav = 0
    nat = 8
    ntyp = 1
    ecutwfc = 44.0
    occupations = 'smearing'
    degauss = 0.01
 /

 &electrons
 /

 &ions
 /

 &cell
 /

ATOMIC_SPECIES
  Si  28.086  Si.pbe-n-kjpaw_psl.1.0.0.UPF
```

Change `pseudo_dir` to your suitable directory. Inputs for structure data and k-point such as `ATOMIC_POSITIONS` and `K_POINTS` are automatically appended by CrySPY with pymatgen.

## Kpoints

CrySPY automatically generates the k-point setting using the [`pymatgen.io.vasp.Kpoints.automatic_density_by_vol`](https://pymatgen.org/pymatgen.io.vasp.html#pymatgen.io.vasp.inputs.Kpoints.automatic_density_by_vol) function from [pymatgen](https://pymatgen.org/).

`kppvol` means a grid density per $Å^{−3}$of reciprocal cell.

VASP: gamma centered meshes are used for hexagonal cells and face-centered cells; otherwise, Monkhorst-Pack grids are employed.

QE and OMX: only a k-mesh is provided, no offset.

# [Molecular Crystal Structure Prediction](https://tomoki-yamashita.github.io/CrySPY_doc/tutorial/mol/index.html)

You need to use a pre-defined molecular by PyXtal’s database (https://pyxtal.readthedocs.io/en/latest/Usage.html?highlight=benzene#pyxtal-molecule-pyxtal-molecule)) or create molecule files that define molecular structures.

## User-defined molecule

Molecule files of Li and PS4 are included. Supported formats in PyXtal are `.xyz`, `.gjf`, `.g03`, `.g09`, `.com`, `.inp`, `.out`, and pymatgen’s `JSON` serialized molecules.

```tsx
cat Li.xyz
1
New structure
 Li  0.000  0.000  0.000
```

`cryspy.in` file: 

```tsx
[basic]
...

[structure]
struc_mode = mol
...
mol_file = ./Li.xyz ./PS4.xyz
nmol = 6 2

..
```

`timeout_mol` : Sometimes molecular crystal structure generation gets stuck. So we set a time limit on the single structure generation. The time limit (`timeout_mol`) is set to 120 seconds by default. 

Volume of unit cell: You can control the volume of unit cells by changing the value(s) of scaling factor, `vol_factor`, in `cryspy.in`. By default, `vol_factor` is set to `1.0`. It is also possible to specify a range of factors. Set minimum and maximum values such as `vol-factor = 0.8 1.5` 

### Restriction on Interatomic Distances

You can restrict the interatomic distance in structure generation. Here is an example of [structure] section in the input file to limit minimum interatomic distance for a A-B binary system.

```tsx
[structure]
natot = 8
atype = A B
nat = 4 4
mindist_1 = 2.0 1.8
mindist_2 = 1.8 1.5
```

This means that minimum interatomic distances of A-A, A-B, and B-B are limited to 2.0, 1.8, and 1.5 Å, respectively. Structures with interatomic distances shorter than these values are automatically eliminated.

For ternary systems, you will need `mindist_1`, `mindist_2`, and `mindist_3`. Mindist matrix must be a symmetric matrix.




# VESTA for Visualization of Structure

VESTA Manual link: [VESTA_Manual.pdf](https://jp-minerals.org/vesta/archives/VESTA_Manual.pdf)

In order to run VESTA in Linux WSL, we need window GUI such as VcXsrv. Download the GUI program first and just using the command `wget https://PATH/TO/THE/PROGRAM` . Check the [official website](https://jp-minerals.org/vesta/en/download.html) with [vesta/archives/](https://jp-minerals.org/vesta/archives/).


<div class="pagination">
  <a href="{{ '/Phys/CP/CP_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>