10. 속성 선택자
```
    [속서명 ~= "속성값"] : 속성값이 완벽히 일치하는 문자를 가지고 았는 요소를 선택
                        = "apple" - 값이 "apple" 인것
                        ~= "apple banana" 인것도 선택 
    [속서명 *= "속성값"] : 속성값이 포함된 문자를 가지고 있는 요소를 선택
    [속서명 $= "속성값"] : 속성값이 접미사로 문자를 가지고 있는 요소를 선택
    [속서명 |= "속성값"] : 속성값이 접두사로 시작되는 문자를 가지고 있는 요소를 선택
                        |="apple" - "applemango", "apple-mango" ("apple manggo" X)
    [속서명 ^= "속성값"] : 속성값이 접두사로 시작되는 문자를 가지고 았는 요소를 선택
                        |="apple" - "applemango", "apple-mango" ,"apple manggo"
```

<br>

11. 순서에 따른 가상 테이블 클래스 선택자
```
    클래스를 추갈할 필요없이 요소 중에서 순서에 따라 원하는 특정 요소를 선택하여 스타일 지정
    <ul>
        <li>김사과</li>
        <li>반하나</li>
        <li>이체리</li>
        <li>차두리</li>
    </ul>

    li:first-child          --> li 요소 중에서 첫번째 해당하는 요소
    li:last-child           --> li 요소 중에서 마지막 해당하는 요소
    li:nth-child(n)         --> li 요소 중에서 n번째에 해당하는 요소
    li:nth-child(odd)        --> li 요소 중에서 홀수번째에 해당하는 요소
    li:nth-child(even)       --> li 요소 중에서 짝수번째에 해당하는 요소
```

<br>

12.가상 요소 선택자
```
    ::before
        글, 이미지, 그라데이션 등을 요소 앞에 삽입
    ::after
        글, 이미지, 그라데이션 등을 요소 뒤에 삽입
    ::link
        하이퍼링크가 연결됐을 때( 기본상태 )
    ::visited
        특정 하이퍼링크를 방문한 적이 있을 때
    ::active
        마우스 버튼을 클릭하고 있을 때
    ::hover
        마우스가 올라갔을 때
```

<br>

CSS의 컬러
```
    색상 이름으로 표현
        red, white, black, ...
    RGB 색상값으로 표현
        rgb(0~255, 0~255, 0~255)
        rgba(0~255, 0~255, 0~255, 0~1) 
                                  ---
                alpha 투명도(높을수록 불투명)
    16진수 색상값으로 표현
        rgb 색상값을 16진수로 0~f // 00~ff까지 범위를 지정
        #0000ff(파란색) --> #00f

    
```
[`🔗` 컬러 사이트](https://materializecss.com/color.html)

<br>

CSS의 텍스트
```
    color
        텍스트의 색상을 설정 (기본색상은 검정색)
    letter-spacing
        텍스트 내에서 글자 사이의 간격을 설정
    word=spacing
        텍스트 내에서 단어 사이의 간격을 설정
    text-align
        텍스트의 수평 방향 정렬을 설정
    text-indent
        단락의 첫 줄을 들어쓰기를 설정
    line-height
        텍스트의 줄 간격(높이)를 설정
    text-decoraction
        텍스트에 여러가지 효과를 설정하거나 제거하는 데 사용
        none, underline, line-through, overline
    text-transform
        텍스트에 포함된 영문자에 대한 대소문자를 설정
        uppercase, lowercase, capitalize
    font-variant
        소문자를 작은 대문자로 변경
        소문자 크기의 작은 대문자로 설정
    text-shadow
        텍스트에 그림자 효과를 지정
        선택자 {
            text-shadow : 가로거리 세로거리 번짐정도 색상;
        }
    text-overflow
        텍스트가 기준선을 벗어나 넘칠 경우 넘치는 텍스트를 어떻게 처리할지 설정
    white-space
        스페이스와 탭, 줄바꿈, 자동 줄바꿈을 어떻게 처리할지 설정
    overflow
        기준선을 벗어나 넘칠 경우 값을 어떻게 처리할지 설정

    font-size
        텍스트의 크기를 설정
        px
            스크린의 픽셀을 기준으로 하는 절대 크기 설정
        %
            기본크기(16px)를 기준으로 하고 상대 크기 설정
            150% --> 24px;
        em
            부모 요소의 글자 크기르 기준으로 하고 상대 크기 설정
            1.5em --> 부모 요소 글자 크기의 * 1.5
        rem
            부모 요소에 상관없이 기본 크기(16px)에 대한 크기 설정
            1.5rem --> 16px * 1.5
    font-weight
        텍스트의 굵기를 설정
        기본 굵기는 숫자 400
        숫자는 100 ~ 900 사용

    font-family
        글꼴을 설정 
        하나의 글꼴을 설정, 여러개의 글꼴을 등록
        여러개의 글꼴이 등록되어 있는 경우, 웹 브라우저에서 글꼴 이름에 띄어쓰기가 있는 경우 반드시 따옴표를 감싸주어야 함
```
[`🔗` 구글 폰트](https://fonts.google.com)

<br>

CSS의 배경
```
    background-color 
        HTML의 쇼오의 배경색을 설정
    background-image
        HTML 요소의 배경으로 나타날 배경 이미지를 설정
        배경 이미지는 기본 설정으로 바둑판 형식으로 반복되어 나타남
        선택자 {
            background-image:url('이미지파일 경로');
        }
    background-repeat
        배경 이미지를 수평이나 수직 방향으로 반복하도록 설정
        repeat, repeat-x, repeat-y, no-repeat
```