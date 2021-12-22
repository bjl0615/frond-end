SCSS란?
```
    CSS는 상대적으로 배우기 쉽고 재미있습니다.
    웹 개발 초심자에게는 이만큼 접근하기 좋은 게 없죠

    CSS는 분명 쉽고 재밌지만, 작업이 고도화될수록 불편함도 같이 커집니다.
    불필요한 선택자(Selector)의 과용과 연산 기능의 한계, 구문(Statememt)의 부재 등 프로젝트의 규모가 커질수록 아쉬움도 같이 키지죠
    하지만 웹에서는 표준 CSS만 동작할 수 있기 때문에 다른 선택권이 없습니다. 
```

<br>

CSS Preprocessor 란?
```
    HTML, CSS를 다루는 사람이라면 한 번은 들어봤을 Sass, Less 등이 있습니다.
    이 친구들은 CSS 잔(예비)처리기 입니다.
    보통 CSS Preprocesser 라고 부릅니다.

    CSS가 동작하기 전에 사용하는 기능으로,
    웹에서는 분명 CSS가 동작하지만 우린는 CSS의 불편함을 이런 확장 기능으로 상쇄할 수 있습니다.
```

<br>

어떻게 사용하나요?
```
    위에서 언급한 것처럼 웹에서는 CSS만 동작합니다.
    Sass, Less, Stylus 같은 전처리기(이하 '전처리기로 표기')는 직접 동작시킬 수 없습니다.
    그렇다면 어떻게 사용할 수 있을까요?

    CSS는 불편하나 일단 배제하고 우선 전처리기러 작성(코딩)합니다.
    전처리기는 CSS 문법과 굉장히 유사하지만 선택자와 중첩(Nesting)이나 조건문, 반복문 다양한 단위(Unit)의 연산 등... 표준 CSS 보다 훨씬 많은 기능을 사용해서 편리하게 작성할 수 있습니다.
    단, 웹에서는 직접 동작하지 않으니 이렇게 작성한 전처리기를 웹에서 동작 가능한 표준의 CSS로 컴파일(Compile)합니다.
    전처리기로 작성하고 CSS로 컴파일해서 동작시키는 거죠
```

<br>

