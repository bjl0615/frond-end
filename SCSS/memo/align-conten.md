aligin-content
```
    CSS aligin-content 속성은 콘텐츠 사이와 콘텐츠 주위 빈 공간을 플렉스박스의 교차축, 그리드의 블록 축을 따라 배치하는 방식을 결정합니다.

    /* Basic positional alignment */
    /* align-content does not take left and right values */
    align-content: center;     /* Pack items around the center */
    align-content: start;      /* Pack items from the start */
    align-content: end;        /* Pack items from the end */
    align-content: flex-start; /* Pack flex items from the start */
    align-content: flex-end;   /* Pack flex items from the end */

    /* Normal alignment */
    align-content: normal;

    /* Baseline alignment */
    align-content: baseline;
    align-content: first baseline;
    align-content: last baseline;

    /* Distributed alignment */
    align-content: space-between; /* Distribute items evenly
                                    The first item is flush with the start,
                                    the last is flush with the end */
    align-content: space-around;  /* Distribute items evenly
                                    Items have a half-size space
                                    on either end */
    align-content: space-evenly;  /* Distribute items evenly
                                    Items have equal space around them */
    align-content: stretch;       /* Distribute items evenly
                                    Stretch 'auto'-sized items to fit
                                    the container */

    /* Overflow alignment */
    align-content: safe center;
    align-content: unsafe center;

    /* Global values */
    align-content: inherit;
    align-content: initial;
    align-content: unset; 

값
    start : 플렉스/그리드 항목을 한 덩어리로 뭉쳐서 정렬 컨테이너 교차축의 시작 모서리에 배치합니다.

    end : 플렉스/그리드 항목을 한 덩어리로 뭉쳐서 정렬 컨테이너 교차축의 끝 모서리에 배치합니다.

    flex-start : 플렉스 항목을 한 덩어리로 뭉치고, 플렉스 컨테이너의 교차 시작점에 따라 정렬 컨테이너 모서리에 배치합니다.
    플레스 레이아웃 항목에만 적영됩니다. 플렉스 컨테이너의 자식이 아닌 항목에 대해서는 start로 취급합니다.

    flext-end : 플렉스 항목을 한 덩어리로 뭉치고, 플렉스 컨테이너의 교차 끝점에 따라 정렬 컨테이너 모서리에 배치합니다.
    플레스 리에아웃 항목에만 적용됩니다. 플렉스 컨테이너의 자식이 아닌 항목에 대해서는 end로 취급합니다.

    center : 플렉스/그리드 항목을 한 더어리로 뭉쳐서 컨테이너 교차축의 중앙에 배치합니다.

    normal : align-center를 지정하지 않았을 때처럼, 플렉스/그리드 항목을 한 덩어리로 뭉쳐서 기본위치에 배치합니다.

    space-around : 정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. 이웃한 항목간의 거리가 동일해집니다. 첫 항목 이전 여백과 마지막 항목 이후 여백은 각 항목간 거리의 절반이 됩니다.

    space-evenly : 정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. 이웃한 항목간의 거리, 첫 항목 이전 여백, 마지막 항목 이후 여백이 모두 같아집니다.

    stretch : 모든 항목의 교차축 방향 크기의 합이 정렬 컨테이너보다 작은 경우, 모든 auto 크기릐 항목이 동일(비례하지 않음)하게 커져서 정렬 컨테이너의 교차측 방향을 가득 채웁니다. 단, 항목에 지정한 max-height/max-width 등의 크기 제한은 준수합니다.

    safe : 정렬 키워드와 함께 사용합니다. 주어진 키워드로 인해 항목이 정렬 컨테이너 밖으로 오버프로하게 되어 데이터가 유실될 수 있으면 항목 정렬에 start를 대신 사용합니다.

    unsafe : 정렬 키워드에 함께 사용합니다. 컨테어너와 항목의 상대적 크기 및 오버플로로 인한 데이터 유실에 상관하지 않고 주어진 정렬을 준수합니다.
```