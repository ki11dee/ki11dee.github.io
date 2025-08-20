---
layout: default
date: 2025-05-26
---

date: {{ page.date | date: "%Y.%m.%d" }}

원문: [QFT and mathematical rigor](https://mathoverflow.net/questions/393826/qft-and-mathematical-rigor)

# Arithmetic QFT에 관한 궁금증 1

수학적인 용어로 QFT에 접근하는 한 가지 방법은 이른바 Gårding–Wightman axioms을 사용하는 것으로, 이는 quantum field theory가 무엇인지에 대한 수학적으로 엄밀한 정의를 제공합니다. 내가 틀리지 않았다면, 이것이 바로 axiomatic QFT라 불리는 것입니다. 이 이론은 정밀한 수학 이론임에도 불구하고, 이 공리를 만족시키는 QFT의 예를 실제로 구성하는 것은 쉬운 일이 아니며, 내가 알기로는 지금까지 극히 일부만이 그런 이론으로 구성되었습니다.  
이제 내 질문을 더 명확히 하기 위해 구체적인 이론, 즉 Klein–Gordon theory를 예로 들어보겠습니다. 우리는 예를 들어 Folland의 책에서 설명하는 바를 따라 해당 이론에 수학적 의미를 부여할 수 있습니다. 단일 입자 Hilbert space H를 정의하고, creation 및 annihilation operators에 의미를 부여하여 관련된 Fock space에서 operator-valued distributions로 해석하며, 이로부터 관련된 quantum fields를 얻는 방식입니다.  
이러한 구성은 실제로는 공리적 구성에서 기대되는 몇몇 요소를 사용하지만, 이 두 접근은 철학이 다르다고 생각됩니다. Axiomatic approach는 공리 하나하나를 모두 만족하는 이론을 구성하려는 것이고, 반면 두 번째 접근은 보다 pragmatic하며 물리학 문헌에 나오는 내용을 수학적으로 정밀한 언어로 번역하려는 것입니다.  
Non-axiomatic approach는 그것이 다루는 객체들이 어떤 종류의 공리를 만족하는지 확인하려는 의도가 없습니다. 거의 마치 물리 이론을 수학적 청중에게 번역해주는 사전과도 같습니다. 결과적으로 이 방식은 덜 기술적이며, 물리학 문헌에 쓰여 있는 방식과 더 잘 호환됩니다.  
질문: 그렇다면 내 질문은 이렇습니다. QFT를 formalize하는 데 왜 axiomatic approach가 필요한가요? Non-axiomatic approach에는 어떤 한계가 있나요? 이 두 접근 방식 모두 QFT에 수학적 의미를 부여하려는 현재의 시도에 있어 research program으로 정당화될 수 있나요?

------
Abdelmalek Abdesselam (2021년 5월 26일 22:12):  
여기서 axiomatic construction이라는 표현은 모순어법입니다. Axiomatic approach는 실제로 아무것도 construct하지 않기 때문입니다. 그것은 단지 어떤 수학적 object를 구성했을 때, 그것이 QFT에 해당하는지 아닌지를 판단할 뿐입니다. 마찬가지로 non-axiomatic approach는 수학적 기준에서 보면 approach라고 할 수 없습니다.

JustWannaKnow (2021년 5월 26일 22:16):  
하하, 맞는 말이네요.

Paul Garrett (2021년 5월 26일 22:33):  
덧붙이자면, "Garding"은 "d"가 들어갑니다. "å" 위의 부호를 제외하면 말이죠.

Igor Khavkine (2021년 5월 27일 8:28):  
"QFT"에 대한 몇 가지 구체적인 예시만 가지고 있다면, "모든 QFT에 대해..."로 시작하는 어떤 명제도 증명하거나 반증할 수 없습니다. 이를 위해서는 "QFT"라는 용어의 따옴표를 제거하고 실제 정의를 제공해야 하며, 이때 Wightman과 같은 공리 체계가 필요합니다. 물론, 공리의 선택은 사람들이 관심을 가지는 예시들을 실제로 수용할 수 있도록 유연해야 합니다 (다른 댓글/답변에서 이미 지적된 바와 같이).

Pedro Lauridsen Ribeiro (2021년 5월 27일 14:10):  
"새로운 물리학적 결과"가 무엇을 의미하는지에 따라 다릅니다. Axiomatic QFT에는 물리학에 영향을 미칠 수 있는 몇 가지 중요한 conceptual open problems가 있습니다. 그 중 두 가지는: (a) 질량을 가진 입자와 질량이 없는 입자가 모두 포함된 QFT scattering theory을 엄밀하게 정의하는 방법; (b) QFT에서 resonance를 엄밀하게 정의하는 방법. 이 두 가지 모두 실험과 직접적으로 연결되어 있으며, 여전히 잘 이해되지 않고 있습니다.

​---------
Abdelmalek Abdesselam이 원 질문에 대한 댓글에서 지적했듯이, QFT에 대한 공리적 접근은 "양자장이란 무엇인가?"라는 질문에 답하려는 데 중점을 둡니다. 이는 Streater와 Wightman의 책 『PCT, Spin and Statistics, and All That』의 서문에서 명확히 언급되어 있습니다. 보다 정확히 말하면, "quantum field"라는 개념에 대한 최소한의 바람직한 조건들을 나열하고, 이러한 요구사항의 결과를 다루며, 이는 "structural"이거나 "model-independent"라고 볼 수 있습니다. 이러한 요구사항을 실제로 만족하는 물리학에서 사용되는 field가 무엇인지에 대한 질문은 열려 있으며, free field가 이러한 요구사항을 만족하는지 확인하는 것 외에는 명확하지 않습니다. 이는 자유장이 수학적으로 가장 쉽게 제어할 수 있는 대상이기 때문에 중요합니다. 만약 free field조차도 QFT의 axiomatic list를 만족하지 않는다면, 이러한 공리는 무용지물이며 수정되어야 합니다. 보다 일반적으로, 물리 이론의 클래스에 적용되는 수학적 공리의 목록은 고정되어 있지 않으며, 자연에 대한 우리의 지식은 항상 제한된 실험 정밀도로 인해 근사적이기 때문입니다. 따라서 이러한 공리(및 주어진 맥락에서의 한계)는 스스로 잘 정의된 수학적 틀을 형성하는 것 외에도, 일반적인 물리 원칙으로서 그 견고함이 지속적으로 시험되어야 합니다. 이것이 자연과학의 방식입니다.

이와 관련하여, 실제로 모든 물리적으로 관련된 fields가 Gårding-Wightman axioms를 만족하는 것은 아니라는 점을 언급해야 합니다. 가장 두드러진 예로, Krein space(즉, 스칼라곱이 양의 정의가 아닐 수 있는 Hilbert space)에서 작용하는 field, 예를 들어 covariant gauge에서의 전자기 퍼텐셜 등이 있습니다. 이 경우 실패하는 공리는 vacuum expectation value에 대한 positive definiteness입니다. 이러한 field에 대해 Wightman form을 확장하는 방법이 있지만, 결과는 그다지 강력하거나 심지어 엄밀하지도 않습니다. 왜냐하면 스칼라곱의 positive definiteness는 강력한 제약이기 때문입니다. 또 다른 까다로운 예는 perturbative (renormalized) quantum fields입니다. 이들은 결합 상수에 대한 형식적인 멱급수로 표현되며(renormalized perturbation series의 수렴은 일반적으로 실패할 것으로 예상됨), 이 경우 모든 급수에 관련된 차수별 구조를 추적해야 하며, Gårding-Wightman axioms에서 요구하는 positive definiteness와 같은 개념을 정의하는 것은 결코 간단하지 않습니다. Renormalization과 관련하여, 주요 개념적 도전은 ultraviolet problem(이는 형식적인 perturbative 수준에서 엄밀히 잘 이해되고 있음)보다는 infrared problem입니다. 이는 massless fields와 상호작용하는 모든 QFT models에 영향을 미치며, 심지어 형식적인 perturbation theory에서도 엄밀하게 완전히 이해되지 않았습니다. 그리고 이는 perturbation data로부터 예를 들어 generalized summability concepts를 사용하여 모델의 non-perturbative 정의를 추출하는 방법을 고려하기 전의 이야기입니다.

이러한 접근 방식—즉, 일반적인 바람직한 조건의 목록을 제시하고, 모델이 이를 만족하는지 여부를 확인하는 방식—은 종종 QFT에 대한 "top-down" approach라고 불립니다. Folland와 같은 사람들이 시도하는 것은 오히려 "bottom-up" approach입니다. 즉, 물리학자들이 실제로 (perturbative) QFT에서 사용하는 형식적인 절차에 의미를 부여하려는 것입니다. Folland가 시도하는 것을 보다 성공적으로 수행하는 방법은 이른바 perturbative algebraic QFT입니다. 이는 QFT에 대한 Haag-Kastler algebraic approach(이는 Gårding와 Wightman의 공리 체계와는 다른 공리 체계로, field가 존재하는 특정 Hilbert space에 의존하지 않는 측면을 목표로 함)에서 아이디어를 차용하여, 형식적인 renormalized perturbative QFT를 수학적으로 이해하려는 것입니다(이 접근에서는 perturbation series의 summability는 아직 다루어지지 않았습니다). 이른바 constructive approach도 이러한 "bottom-up" 철학에 부합합니다. 이는 관련 사례에서 예상되는 발산을 고려하여 perturbative theory 이외의 수단으로 QFT models을 구축하려는 것입니다(Abdelmalek이 이에 대해 나보다 훨씬 더 많은 것을 말해줄 수 있습니다). 모델을 얻은 후에는 예를 들어 Wightman axioms(또는 그에 적합한 수정된 형태)를 확인하여 얻은 모델이 해당 QFT concept을 만족하는지 여부를 확인할 수 있습니다. 이는 의심할 여지 없이 관련이 있습니다.

요약하자면, 나는 두 접근 방식이 모두 중요하며 서로를 보완한다고 말하고 싶습니다.

------
Jules Lamers (2021년 5월 27일 5:49):  
$\phi^4$ 모델은 $d=2, 3$ 및 $d>4$의 시공간 차원에서 construct되었으며, Wightman axioms를 만족하는 것으로 알려져 있습니다. 그러나 $d>4$의 경우, non-perturbative renormalization 후 상호작용이 사라지므로 이론은 자유(자명)입니다. $d=4$의 경우는 아직 미해결입니다. 순수한 Abelian gauge theory은 non-interacting하며, covariant gauge에서 field가 Krein space에서 작용한다는 점을 제외하면 엄밀하게 구성하는 것이 어렵지 않습니다. 순수한 non-Abelian Yang-Mills theory는 $d=2$에서 알려져 있으며, $d=4$에서는 finite volume에서만 알려져 있습니다.

Jules Lamers (2021년 5월 27일 5:56):  
계속해서, $d=2$에서의 massless QED(Schwinger model)는 free field theory와 동등하므로 구성하기 어렵지 않습니다. $d=3$에서의 massive QED는 최근(2020년)에 Dimock에 의해 finite volume에서 구성되었습니다. $d=4$의 QED는 아직 미해결이며, QED와 $\phi^4$ theory 모두 d=4에서 자명하다고 여겨지지만, 이는 perturbative series의 부분 re-summation에서 얻은 정보에 기반하므로 현재의 지식 상태에서는 확실히 말하기 어렵습니다.

Jules Lamers (2021년 5월 27일 6:01):  
일반적으로, 이론이 완전히 구성되고 Wightman axioms의 유클리드 버전인 Osterwalder-Schrader axioms을 만족한다면, Lorentz signature에서 이론을 복원할 수 있으며, 이는 Wightman axioms을 만족하게 됩니다. 이는 Euclidean theory가 finite volume에서만 알려져 있는 경우에는 불가능하며, 이는 $d=3$의 QED와 $d=4$의 순수 Yang-Mills theory의 경우입니다. Non-interacting models의 경우, 상호작용이 없다는 것이 사전에 알려져 있다면 Lorentz signature에서 직접 구성이 이루어집니다. 이는 $d>4$에서의 $\phi^4$ theory의 경우에는 해당되지 않습니다.

Abdelmalek Abdesselam (2021년 5월 27일 14:35):  
$\phi^4$ theory의 $d=4$의 경우, 그 문제는 더 이상 미해결이 아닙니다. 물리학자들의 RG-based predictions을 확인하면서, Aizenman과 Duminil-Copin은 곧 Annals of Math에 게재될 논문에서 자명성을 증명했습니다.


<div class="pagination">
  <a href="{{ '/Phys/WP/what_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>