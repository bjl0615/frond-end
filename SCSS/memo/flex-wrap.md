flex-wrap
```
    CSS flex-wrap property는 flex-item 요소들이 강제로 한줄에 배치되게 할 것인지, 또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성입니다.
    만약 영역 내에서 벗어나지 못하게 설정한다면, 동시에 요소의 방향 축을 결정할 수 있습니다.

Syntax
    flex-wrap: nowrap; /* Default value */
    flex-wrap: wrap;
    flex-wrap: wrap-reverse;

    /* Global values */
    flex-wrap: inherit;
    flex-wrap: initial;
    flex-wrap: unset;

    flex-wrap 속성의 값으로, 다음 목록 중 하나의 키워드를 선택할 수 있습니다.

Values 
    아래는 사용 가능한 속성값들입니다.
    
    nowrap
        기본 설정값으로, flex-container 부모요소 영역을 벗어나더라도 flex-item 요소들을 한 줄에 배치합니다. 시작점은 flex-direction에 의해 결정된 방향으로 적용됩니다.

    wrap
        flex-item 요소들이 내부 로직에 의해 분할되어 여러 행에 걸쳐서 배치됩니다.
        nowrap 속성과 마찬가지로 요소가 배치되는 시작점은 flex-dirction에 의해 결정됩니다.
        일반저긍로 위에서 아래로 쌓이는 순서입니다.

    wrap-reverse
        wrap 속성값과 동일하지만, 요소가 나열되는 시작점과 끝점의 기분이 반대로 배치됩니다.

        
```