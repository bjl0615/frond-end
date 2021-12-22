flex-grow
```
    flex-grow CSS property는 flex-item 요소가. 
    flex-contianer 요소 내부에 할당 가능한 공간의 정도를 선언합니다.
    만약 형제 요소로 렌더링 된 모든 flex-item 요소들이 동일한 flex-grow 값을 갖는다면, flex-container 내부에서 동일한 공간을 할당 받습니다.
    하지만 flex-grow 값으로 다른 소수값을 지정한다면, 그에 따라 다른 공간값을 나누어 할당받게 됩니다.

    보통 flex-grow를 사용할땐, flex-shrink, flex-basis 속성을 함께 사용합니다.
    그리고 일반적으로는 모든 값이 설정되었음을 보장하기 위하여 flex 속서을 이용해 축약형으로 사용합니다.

Syntax
    /* <number> values */
    flex-grow: 3;
    flex-grow: 0.6;

    /* Global values */
    flex-grow: inherit;
    flex-grow: initial;
    flex-grow: unset;

    flex-grow 속성에 대한 값은 <number> 단독으로 표현합니다.

Values
    <number>
        <number> 단, 음수값은 허용되지 않습니다.
```

<br>

flex-shirink
```
    flex-shrink CSS property는 flex-item 요소의 flex-shrink 값을 설정하는 속성입니다. 만약 flex-item 요소의 크기가 flex-container 요소의 크기보다 클 때 flex-shrink 속성을 사용하는데, 설정된 숫자값에 따라 flex-container 요소 내부에서 flex-item 요소의 크기가 축소 됩니다.

Syntax
    /* <number> values */
    flex-shrink: 2;
    flex-shrink: 0.6;

    /* Global values */
    flex-shrink: inherit;
    flex-shrink: initial;
    flex-shrink: unset;

Values
    <number>
        <number> 단, 음수 값은 허용되지 않습니다.
```