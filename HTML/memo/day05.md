책갈피(bookmark)
```
    <a>태그의 name 속성 또는 다른 태그의 id 속성을 이용하여 
    책갈피 가능을 활용할 수 있다.

    <a href="#test">텍스트</a>
    ...
    <a name="test">도착</a>
    또는
    <p id="test">도착</p>
```

<br>

아이프레임
```
    iline frame의 약자
    iframe을 이용하면 웹페이지 안에 또 다른 웹페이징를 사압랄 수 있음

    <iframe src="삽입할 페이지의 주소 또는 문서위치" style="CSS 스타일 코드"></iframe>
    target 속성
        _blank : 링크로 연결된 문서를 새 탭에서 열어준다.
    
    name속성 
        해등 이름으로 설정된 페이지에서 문서를 열어준다.
```

<br>

폼(form)
```
    웹 페이지에서 사용자로부터 입력을 받을 때 사용하는 태그(하나의 세트로)
    사용자가 입력한 테이터를 서버로 보낼 때 form 요소를 사용
    action속성은 서버로 데이터를 전송할 때 "목적지" 역할,
    method속성은 데이터의 전송 방법 설정 역할
    
    <form action="데이터를 보낼 목적지" method="데이터 전송 방식">
        여러 입력 + 내용들
    </form>

    method 속성
        get  : URL에 데이터를 저장하여 전송하는 방식
        post : body에 데이터를 저장하여 전송하는 방식

입력상자(input)
    <input type="입력형식">

    type 속성
        text        : 문자를 입력받는 글상자
        password    : 비밀번호를 입력받는 글상자(텍스트 내용이 표기되지 않음)
        radio       : 여러개의 옵션 중에서 단 하나의 옵션만을 입력받을 수 있는 동그란 버튼 radio는 그룹을 맺기 위해 name 속성의 값이 동일해야 한다.
        checkbox    : 여러개의 옵션 중에서 다수의 입력받을 수 았도록 하는 네모난 버튼
        file        : 원하는 파일을 서버로 전송하기 위한 글상자
        button      : 이벤트가 없는 일반 버튼
        reset       : 입력받은 데이터를 초기화 하는 버튼
        submit      :  입력받은 데이터를 서버에 제출하는 버튼
                        속해있는 form의 action속성에 설정한 곳으로 데이터를 전송
        email       : 이메일을 입력받는 글상자(@필요)
        url         : 웹사이트를 입력받는 글상자(http부터 시작된 url)
        tel         : 전화번호를 입력받는 글상자
        date        : 원하는 날짜를 입력받는 글상자
        number      : 원하는 숫자를 입력받는 글상자
        color       : 원하는 색상을 입력받는 요소
                        선택한 색상은 16진수 RGB컬러 값으로 전달
                        16진수 : 0 1 2 3 4 5 6 7 8 9 A B C D E F

                        Red Green Blue
                        FF  FF    FF ---> 흰색
                        00 00     00 ---> 검정색
                        FF 00     00 --->
                        빨간색
                        #ff0000
        search      : 검색어를 입력받는 글상자
        range       : 일정 범위안에 값만을 입력하는 조절바

그룹(fieldset)
    폼 요소를 그룹으로 묶을 때 사용
    <fieldset>
        그룹으로 묶을 input들
    </fieldset>

    fieldset의 제목을 만들 때 사용
        <fieldset>
            <legend>제목</legend>
        </fieldset>
    
라벨 
    input에 이름을 붙이는 태그
    label 요소와 다른 input 요소를 연결하면 input 영역이 넓어짐
    radio, checkbox의 스타일 설정

    <label>텍스트 <input></label>

선택상자
    여러개의 옵션이 드롭다운 리스트로 되어 있으며 그 중에서 단 하나의
    옵션만을 입력받을 수 있음 <option> 요소를 통해 선택할 수 있는 아이템을 설정

    <select>
        <option>내용</option>
        <option>내용</option>
        ...
    </select>

여러줄 글상자
    여러줄의 텍스트를 입력받는 글상자
    <textarea cols="가로 글자수" rows="세로 글자수"></textarea>

데이터 목록
    미리 지정된 옵션 목록을 보여줌
    특정 글자를 입력하면 해당하는 지정된 글자를 미리 보여줄 때 사용

    <datalist>
        <option value="실제 값" label="내용1"></option>
        <option value="실제 값">내용2</option>
        ...
    </datalist>

<input>의 속성들
    size 
            크기를 설정하는 속성
    maxlength
            값의 최대 길이를 설정하는 속성
    placeholder
            입력 전 특정 데이터를 입력하도록 윧도, 안내하는 값을 설정하는 속성
    checked
            어려개의 라디오 또는 체크박스 중에서 미리 선택하는 옵션을 설정하는 속성
    readonly
            데이터를 볼 수 있으나 수정할 수는 없게 설정하는 설정
    value
            입력되는 값 혹은 미리 세팅되어 있는 값을 설정하는 속성
    disabled
            입력필드르 사옹할 수 없게 설정하는 속성
    required
            데이터를 필수로 입력하도록 지정하는 옵션
    name 
            요소의 이름을 설정
            서버에서 전달된 값을 받을 때 찾는 키로 사용
    id
            요소의 유일한 이름을 설정
            HTML문서에서 해당 요소의 스타일을 동적인 작동을 하게 할 때 사용

파비콘(Favicon) 만들기
        Favorites Icon의 줄임말
        웹브라우저 주소창 옆에 작은 아이콘으로 표기
        16 * 16 픽셀이 기본 규격

        <head>
            <link rel="icon" href="파일경로>
        </head>

        png 파일을 icon 파일로 변환
```
[`🔗` 파일 질라](https://convertico.com)
