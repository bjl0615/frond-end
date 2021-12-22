flex-basis
```
    flex-basis CSS 속성은 플렉스 아이템의 초기 크기를 지정합니다. box-sizing을 따로 지정하지 않는다면 콘텐츠 박스의 크기르 변경합니다.

Syntax
    /* <'width'> 지정 */
    flex-basis: 10em;
    flex-basis: 3px;
    flex-basis: auto;

    /* 원본 크기 키워드 */
    flex-basis: fill;
    flex-basis: max-content;
    flex-basis: min-content;
    flex-basis: fit-content;

    /* 플렉스 아이템 내용 크기에 따라 조절 */
    flex-basis: content;

    /* 전역 값 */
    flex-basis: inherit;
    flex-basis: initial;
    flex-basis: unset;

    flex-basis 속성값은 content 키워드를 사용하거나, <'width'>를 나타내는 단위를 사용합니다.

값
    <'width'>
        <length>, 플랙스 컨터이너의 크기에 상대적인 <percentage>, auto 키워드 중 하나. 음수 값은 유효하지 않습니다.
```