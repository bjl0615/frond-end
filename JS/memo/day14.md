Unicode 관련 함수 
```
charCodeAt()
    。인덱스 번째의 문자를 유니코드의 코드 포인트 값을 반환
    。인덱스가 문자열 길이보다 크면 NaN 반환

fromCharCode()
    。파라미터 유니코드를 문자열로 변환하고 연결하여 반환
        ，작성하지 않으면 빈 문자열 반환
    。작성 방법
        ，data 위치에 String 오브젝트 작성 변환 대상 값을 작성하지 않음
        ，String-formCharCode() 형태
    
localCompare
    。값을 비교하여 위치를 나타내는 값으로 반환
    。위치 값 : 1(앞), 0(같음), -1(뒤)
    。Unicode 사전 순으로 비교
```

Object 오브젝트
```
자바스크립트의 오브젝트
    。오브젝트 구분
        ，빌트인 오브젝트 Built-in Object
        ，네이티브 오브젝트 Native Object
        ，호스트 오브젝트 Host Object

네이티브 오브젝트
    。빌트인 오브젝트
        ，시전에 만들어 놓은 오브젝트
        ，빌트인 Number 오브젝트, 빌트인 String 오브젝트
    。네이티브 오브젝트
        ，JS 스펙에서 정의한 오브젝트
        ，빌트인 오브젝트 포함, 여기에 
        ，JS 코드를 실행할 때 만드는 오브젝트
        ，예 : Argument 오브젝트

자바스크립트 오브젝트
    。오브젝트 구분
        ，빌트인 오브젝트 Built-in Object
        ，네이티브 오브젝트 Native Object
        ，호스트 오브젝트 Host Object

호스트 오브젝트
    。빌트인, 네이티브 오브젝트를 제외한 오브젝트
        ，예: wiundow, DOM 오브젝트
    ，JS는 호스트 환경에서
        ，브라우저의 모든 요소 기술을 
        ，연결하고 융합하여 이를 제어

new Object()
    。인스터스를 생성하여 반환
    。파라미터를 데이터 타입에 따라
        ，생설할 인스턴스 결정
    。파라미터 값이 undefined, null이면'
        ，빈 Object 인스턴스 반환

Object()
    。Object 인스턴스 생성
        ，파라미터는 {name : value} 형태

Object 생성 방법 
    。var abc = {};
        ，var abc = Object()와 같음
        ，즉, var abc = {}를 실행하면 Object 인스턴스가 생성됨
    。{} 표기를 
        ，오브젝트 리터릴(Literal)이라고 부름 

valueOf()
    。data 위치에 작성한 Object 인스턴스의 프리미티브 값 반환
```

<br>

빌트인 오브젝트 구조
```
    。오브젝트 이름(Object, String, Number ...)
    。오브젝트 .property
        ，인스턴스 생성 가능 여부 기준
        ，프로퍼티를 연결하는 오브젝트
    。오브젝트 .property.constructor
        ，오브젝트의 생성자
    。오브젝트 .property.method
        ，메소드 이름과 함수 작성
    。오브젝트 구조
```