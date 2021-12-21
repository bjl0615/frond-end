justyfy-content
```
    CSS의 justyfy-content 브라우저 사이와 함께 주위의 콘텐츠 항목의 공간을 배포하는 방법 속성을 정의 주요 축 플레스 컨테이너 및 그리드 컨테이너의 인라인 축

    길이와 자동 여백이 적용된 후에 정렬이 수행됩니다. 즉, Flexbox 레이아웃에 와 flex-grow 다른 유여한 요소가 하나 이상 0있으면 사용 가능한 공간이 없으므로 효과가 없습니다.

구문
    /* Positional alignment */
    justify-content: center;     /* Pack items around the center */
    justify-content: start;      /* Pack items from the start */
    justify-content: end;        /* Pack items from the end */
    justify-content: flex-start; /* Pack flex items from the start */
    justify-content: flex-end;   /* Pack flex items from the end */
    justify-content: left;       /* Pack items from the left */
    justify-content: right;      /* Pack items from the right */

    /* Baseline alignment */
    /* justify-content does not take baseline values */

    /* Normal alignment */
    justify-content: normal;

    /* Distributed alignment */
    justify-content: space-between; /* Distribute items evenly
                                    The first item is flush with the start,
                                    the last is flush with the end */
    justify-content: space-around;  /* Distribute items evenly
                                    Items have a half-size space
                                    on either end */
    justify-content: space-evenly;  /* Distribute items evenly
                                    Items have equal space around them */
    justify-content: stretch;       /* Distribute items evenly
                                    Stretch 'auto'-sized items to fit
                                    the container */

    /* Overflow alignment */
    justify-content: safe center;
    justify-content: unsafe center;

    /* Global values */
    justify-content: inherit;
    justify-content: initial;
    justify-content: revert;
    justify-content: unset;

값
    start : 항목은 기본 축에서 정렬 컨테이너의 시작 가장자리를 향해 서로 같은 높이로 포장됩니다.

    end : 항목은 주 축에서 정렬 컨테이너의 끝 가장자리를 향해 서로 같은 높이로 포장 됩니다.

    flex-start : 항목은 플레스 컨테이너의 기본 시작 측면에 따라 정렬 컨테이너의 가장자리를 향해 서로 같은 높이로 포장됩니다. 이것은 플렉스 레이아웃 항목에만 적용됩니다. 플렉스 컨테이너의 자식이 아닌 항목의 경우 이 값은 처리 start 됩니다.

    flex-end : 항목은 플렉스 컨테이너의 메인 엔드 측면에 따라 정렬 컨테이너의 가장자리를 향해 서로 같은 높이로 포장됩니다. 이것은 플레스 레이아웃 항목에만 적용 됩니다. 플레스 컨테이너의 자식이 아닌 항목의 경우 이 값은 end 처럼 처리됩니다.

    center : 항목은 주축을 따라 정렬 컨테이너의 중심을 향해 서로 같은 높이로 포장됩니다.

    left : 항목은 정렬 컨테이너의 왼쪽 가장자리를 향해 서로 같은 높이로 포장됩니다. 속성의 축이 인라인 축과 평행하지 않은 경우 이 값은 start처럼 동작 합니다.

    right : 항목은 해당 축에서 정렬 컨테이너의 오른쪽 가장자리 향해 서로 같은 높이로 포장됩니다. 속성의  축이 인라인 축과 평행하지 않은 경우 이 값은 start 처럼 동작 합니다.

    normal : 항목은 justify-content 값이 설정 되지 않을 것처럼 기본 위치에 포장됩니다. 이 값은 stretch 그리드 및 플렉스 컨테이너에서와 같이 작동합니다.

    space-between : 항목은 기본 축을 따라 정렬 컨테이너 내에서 고르게 분포됩니다. 인접한 항목의 각 쌍 사이의 간격은 동일합니다. 첫 번째 항목은 메인 시작 모서리와 같은 높이이고 마지막 항목은 메인 끝 모서리와 같은 높이입니다.

    space-around : 항목은 기본 축을 따라 정렬 컨테이너 내에서 고르게 분포됩니다. 인접한 항목의 각 쌍 사이의 간격은 동일합니다. 첫 번째 항목 앞과 마지막 항목 뒤의 빈 공간은 각 인접 항목 쌍 사이의 공간의 절반과 같습니다.

    space-evenly : 항목은 기본 축을 따라 정렬 컨테이너 내에서 고르게 분포됩니다. 인접한 항목의 각 쌍, 기본 시작 모서리와 첫 번째 항목, 주요 끝 모서리와 마지막 항목 사이의 간격은 모두 정확히 동일합니다.

    stretch : 주 축을 따라 항목의 결합된 크기가 정렬 컨테이너의 크기보다 작으면 크기가 지정된 auto항목의 크기는 max-height/ max-width(또는 동등한 기능) 에 의해 부과된 제약 조건을 여전히 준수하면서 동일하게(비례적으로) 증가합니다. 결합된 크기는 주축을 따라 정렬 컨테이너를 정확히 채웁니다.
    
```