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

<br>

flex-direction
```
    flex-direction CSS 속성은 플렉스 컨테이너 내의 아이템 배치할 때 사용할 주축 및 방향(정방향, 역방향)을 지정합니다.

    row와 row-reverse의 경우 플렉스 컨테이너의 방향성에 영향을 받암 
    컨테이너의 dir 값이 ltr이라면 row는 왼쪽부터 시작하는 가로축을, row-reverse는 오른쪽부터 시작하는 가로축을 나타냅니다. 그러나 dir 값이 rtl이라면 row가 오른쪽부터 시작하는 가로축을, 
    row-reverse가 왼족부터 시작하는 왼쪽부터 시작하는 가로축을 나타냅니다.

구문
    /* 한 줄의 글을 작성하는 방향대로 */
    flex-direction: row;

    /* <row>처럼, 대신 역방향 */
    flex-direction: row-reverse;

    /* 글 여러 줄이 쌓이는 방향대로 */
    flex-direction: column;

    /* <column>처럼, 대신 역방향 */
    flex-direction: column-reverse;

    /* 전역 값 */
    flex-direction: inherit;
    flex-direction: initial;
    flex-direction: unset;

값 
    row : 플레스 컨테이너의 주축이 글의 작성 방향과 동일합니다. 주축의 시작점과 끝점이 콘텐츠 방향과 동일합니다.

    row-reverse : row와 동일하게 동작하지만 시작점과 끝점이 반대에 위치합니다.

    colum: 플렉스 컨테이너의 주축이 블록 축과 동일합니다. 주축의 시작점과 끝점이, 글 작성 모드의 이전 지점 및 이후 지점과 동일합니다.

    colum-reverse : colum과 동일하게 동작하지만 시작점과 끝점이 반대에 위치합니다.
```