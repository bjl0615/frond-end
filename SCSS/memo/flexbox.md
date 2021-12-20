Flexbox의 기본 개념
```
    일명 flexbox라 불리는 Flextible Box module은 flexbox 인터페이스 내의 아이템 간 공간 배분과 강력한 정렬 기능을 제공하기 위한 1차원 레이아웃 모델 로 설게되었습니다.
    flexbox를 1차워닝라 칭하는 것은, 레이아웃을 다룰 때 한 번에 하나의 차원(행이나 열)만을 다룬다는 뜻입니다. 이는 행과 열을 함계 조절하는 CSS 그리드 레이아웃의 2치원 모델과는 대조됩니다.
```

<br>

flexbox의 두개의 축
```
    flexbox를 다루려면 주축과 교차축이라는 두 개의 축에 대한 정의를 알아야 합니다.
    주축은 flex-direction 속성을 사용하여 지정하며 교차축은 이에 수직인 축으로 결정됩니다. flexbox의 동작은 결국 이 두 개의 축에 대한 문제로 환원되기 때문에 이들을 어떻게 동작하는지 처음부터 이해 하는 것이 중요 합니다.

주축
    주축은 flext-direction에 의해 정의되며 4개의 값을 가질 수 있습니다.
        - row
        - row-reverse
        - column
        - column-reverse
    row 혹은 row-reverse를 선택하면 주축은 인라인 방형으로 행을 따릅니다.
    column 혹은 column-revers을 선택하면 주축은 페이지 상단에서 하단으로 블록 방향을 따릅니다.

교차축 
    교차축은 주축에 수직하므로, 만약 flex-direction(주축)이 row나 row-reverse라면 교차축은 열 방향을 따릅니다.
    주축이 column 혹은 column-reverse 라면 교차축은 행 방향을 따릅니다.
    flex 요소를 정렬하고 끝을 맞추(justify)라면 어느 축이 어느 방향인지 이해하는 것이 중요합니다.
    flexbox는 주축, 교차축을 따라 항목을 정렬하고 끝을 밎추는 각정 속성들을 적용하는 방식으로 동작합니다.
```