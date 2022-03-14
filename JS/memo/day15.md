힘수외 메소드 

```
함수와 메소드 연결
    。힘수
        ．오브젝트에 연결
        ．Object.create()

    。메소드
        ．오브젝트의 prototype에 연결
        ．Object.prototype.toString()

```

<br>

```
함수, 메소드 호출
    。힘스 호출 방법
        ．Object.create();

    。메소드 호출 방법
        ．Object.prototype.toString()
        ．또는 인스턴슬르 생성하여 호출

    。함수와 메소드를 구분해야 하는 이유
        ．JS코드 작성 방법이 다르기 때문
        ．함수는 파라미터에 값을 작성하고 메소드는 메소드 앞에 값을 작성
```

<br>

```
메소드와 메서드
    。메서도(method)
    。국립국어원 표준국어대사전
        ．메소드는 검색되고 메서드는 검색되지 않음
        ．프로그램과 관련지어 설명하고 있음
```

<br>

프로퍼티 처리 메소드
```
hasOwnProperty()
    。인스턴스에 파라미터 이름이 
        ．존재하면 true 반환
        ．존재하지 않으면 false 반환
    。자신인 만든 것이 아니라
        ．상속받은 프러퍼티이면 false 반환

propetyIsEnumerable()
    。오브젝트에 프로퍼티를
        ．열거할 수 있으면 true 반환
        ．열거할 수 없으면 false 반환
```

<br>

빌트인 Object 특징
```
    。인스턴스를 만둘 수 있는 모든 빌트인 오브젝트의 __proto__에 Object.prototype의 6개 메소드가 설정됨
    。따라서 빌트인 오브젝트로 만든 인스턴스에도 설정됨
    。Object.prototype

IsPrototypeof()
    。파라미터에 작성한 오브젝트에
        ．object 위치에 작성한 
        ．존재하면 true 반환
        ．존재하지 않으면 false 반환

toString()
    。인스턴스 타입을 문자열로 표시
    。오브젝트에 toString()이 있으면 
        ．toString()이 호출되고
        ．없으면 Object의 toString()이 호출됨

toLocaleString()
    。지역화 문자 변환 메소드 대체 호출
        ．Array, Number, Date 오브젝트의
        ．toLocaleString() 메소드가 먼저 호출 된다.        
```