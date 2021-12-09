하이퍼 링크
```
    <a href="사이트 또는 이동할 문서의 위치경로">링크에 사용될 문자열 또는 이미지</a>
    하이퍼 링크란 다른 페이지나 사이트로 연결, 이동하는 링크(문자 또는 이미지)
```

<br>

호스팅하기
```
    닷홈 > 회원가입 > 로그인 > 웹호스팅 > 무료 호스팅 > 정보 입력 (아이디, 비밀번호는 닷홈 아이디, 비밀번호와 동일하게)

    파일 질러 > 설치 > 실행해서 파일 > 사이트 관리자 > 새 사이트 > New Site > 호스트 : 닷홈의 기본제공 도메인 아이디, 비번 입력해서 성공

    
    ftp-simple 익스텐션에서 설치
    f1키 > ftp-simple : Config - ftp connection setting 선택
    [
	    {
            "name": "web",
            "host": "IP주소",
            "port": 21,
            "type": "ftp",
            "username": "ftp아이디",
            "password": "ftp비밀번호",
            "path": "/html/",
            "autosave": true,
            "confirm": false
        }
    ]

    f1 키 > ftp-simple : Remote ~~~~~ > 우리 설정해둔 네임 선택 > 맨위의것 선택
```
[`🔗` 닷홈](https://www.dothome.co.kr/)
[`🔗` 파일 질라](https://filezilla-project.org/)

<br>

테이블 
```
    여러 종류의 데이터를 보기 좋게 정리해서 보여주는 표
    행과 열로 이루어져 있다.

    <table>
        <tr><!-- 테이블의 각 층 -->
            <td>내용1</td>
            <td>내용2</td>
        </tr>
        ...
    </table>

<table> 속성
    border : 테이블의 테두리 두께를 설정(기본 0)
    width : 테이블의 가로 폭을 설정
    align : 테이블의 정렬을 설정(left, right , center)
    <th>,<td> 속성
        width : 셀의 가로 폭을 설정(td : 같은 열 전부 적용)
        height : 셀의 높이를 설정(td : 같은 행 전부 적용)
        align : 셀의 텍스트 정렬을 적용(left, right, center)

colaspan 속성
    가로로 열을 합침
    <td colspan="합칠 열의 개수">

rowspan 속성
    세로로 행을 합침
    <td rowspan="합칠 행의 개수">

<colgroup>
    <colgroup> 태그 귀에 나오는 컬럼(th, td)에 적용할 스타일을 해당 태그에서 미리 설정할 수 있다.

<caption>
    표에 제목을 붙일 때 사용
    기본 위치는 표의 상단부 중앙
    <caption>제목</caption>
```