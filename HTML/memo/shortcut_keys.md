```
    。 html 자동완성 : ! + tab
    。 기본언어 영어 : 한글 : lang = "en" , lang = "ko" 의미는?
    。 들여쓰기 : 범위선택후 tab
    。 내여쓰기 : 밤위 선택후 shift + tab
    。 한줄 주석처리 : 영억 지정후 + /
    。 찾기(바꾸기) : ctrl + F
    。 세로 범위로 선택 : alt + shift + 드래그
    。 찾기(바꾸기) : ctrl + F
    。 세로 범위로 선택 : alt + shift + 드래고
    。 분활화면 이동하기 : ctrl + alt  + 방향키
    。 옆화면 이동하기 : ctrl + 방향키
    。 클래스명 부여하기  : tag.class + tab     div.title : <div class="title"></div>
    。 아이디명 부여하기 : tag#id + tab / div#header : <div id="header"></div>
    。 복합적 사용 : form#search.wide : <form id="search" class="wide"></form>

```

<br>

```
    nav>ul>li 
        <nav>
            <ul>
                <li></li>
            </ul>
        </nav>


    div+p+bq
        <div></div>
        <p></p>
        <blockquote></blockquote>

    ul>li*5
        <ul>
            <li></li>    
            <li></li>    
            <li></li>    
            <li></li>    
            <li></li>    
        </ul>

    ul>li.item*5
        <ul>
            <li class="item1"></li>
            <li class="item2"></li>
            <li class="item3"></li>
            <li class="item4"></li>
            <li class="item5"></li>
        </ul>

    div>(header>ul>li*2>a)+footer>p
        <div>
            <header>
                <ul>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </header>
            <footer>
                <p></p>
            </footer>
        </div>

    a{Click me}
        <a href="">Click me</a>
        
    p>{Click}+a{here}+{ to continue}
    <p>Click    <a href="">here</a>     to continue<p>

``` 