align-self
```
    align-items로 교차축(cross axis) 아이템 정렬을 정합니다. 이렇게 정한 정렬은 콘테이나 안의 모든 아이템에 적용됩니다,

    <style>
      body {
        box-sizing: border-box;
        margin: 0px;
        font-family: Consolas, monospace;
      }
      .jb-container {
        height: 100vh;
        background-color: #01579b;
        display: flex;
      }
      .jb-item {
        padding: 20px;
      }
      .jb-item:nth-child(1) {
        background-color: #e3f2fd;
      }
      .jb-item:nth-child(2) {
        background-color: #bbdefb;
        font-size: 2em;
      }
      .jb-item:nth-child(3) {
        background-color: #90caf9;
        font-size: 3em;
      }
    </style>

    <div class="jb-container">
      <div class="jb-item">Item 1</div>
      <div class="jb-item">Item 2</div>
      <div class="jb-item">Item 3</div>
    </div>

    。 만약 특정 아이템의 정렬을 따로 정하고 싶다면 align-self 속성을 사용합니다.
    。기본값은 auto로 align-items 속성의 값을 상속 받습니다.
    。stretch, flext-start, flex-end, center, baseline 등을 사용할 수 있습니다.
    。align-self를 지정할려면 반드시 부모한테 height 값을 지정해주어야 합니다.

    .jb-item:nth-child(1) {
    background-color: #e3f2fd;
    align-self: flex-start;
    }
    .jb-item:nth-child(2) {
    background-color: #bbdefb;
    font-size: 2em;
    align-self: flex-end;
    }
    .jb-item:nth-child(3) {
    background-color: #90caf9;
    font-size: 3em;
    align-self: center;
}
```

<br>

order 
```
  order CSS 속성은 플렉스 또는 그리드 컨테이너 안에서 현재 요소의 배치 순서를 지정합니다.
  컨테이너 아이템의 정렬 순서는 오름차순 order 값이고. 같은 값을 경유 소스 코드 의 순서대로 정렬 됩니다.

구문
  /* <integer> 값 */
  order: 5;
  order: -5;

  /* 전역 값 */
  order: inherit;
  order: initial;
  order: unset;

깂 
  <integer> 아이템의 순서
```