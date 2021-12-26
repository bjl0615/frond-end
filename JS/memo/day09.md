상수
```
    。변경할 수 없는 값
    。상수 변수
        ．상수가 설정된 변수
        ．JS는 변수의 값을 변경할 수 있으므로
        ．상수 변수는 선언적 의미
    。 상수 변수 표기 방법
        ．코딩 관례로 영문 대문자 사용
        ．var ONE = 1;
        ．상수로 사용한다는 시맨틱 선언
    。JS가 제공하는 상숫값은 변경 불가
        ，MAX_VALUE, MIN_VALUE 등

```

<br>

진수
```
    。10의 진수 : 123
    。16진수
        ，0xFF : 255
        ，1번째에 숫자 0 작성
        ，2번째에 영뮨자 x 작성
        ，1번째 이후: 0 ~ f 작성 대소문자 구분하지 않음
    。8진수
        ，ES3에서 폐지, ES6에서 재정의
    。2진수 : ES6에서 특별한 방법 제공
```

<br>

데이터 타입
```
    。데어터Data의 사전적 의미는 자료
    。데이터 타입Type 형태
        ，숫자 타입 : var value = 123;
        ，문자 타입 : var value = "sports";
    。typeof 연산자
        ，데이터 (값) 타이 변환
        ，typeof vlaue에 데이터를 작성
    。키워드 Keyword
        ，특별한 기능을 가진 단어
    。 데이터 타입을 자료형이라고도 부름
        ，강좌에서는 데이터 타입으로 표기
    。데이터는 타입을 가짐
        ，JS는 테이터를 기준으로 타입을 결정
        ，타입을 먼저 선언하고 타이에 맞는 데이터를 할당하지 않음
```

<br>

데이터 타입 분류
```
    。언어 타입과 스펙 타입
    。언어 타입
        ，JS 프로그램에서 사용할 수 있는 타입
        ，Undefined, Null, Boolean, String, Number, Object
    。스펙(문서) 타입
        ，언어 알고리즘을 위한 타입으로 JS 프로그램에서 사용 불가
        ，Reference, List, Completion, Property Descriptor, Data Block, Lexical Environment, Lexical Record 등

Number 타입
    。Number 타입
        ，부호(+,-)를 가진 값
    。숫자 값 범위
        ，18,437,736,874,454,810,627
        (2의 64승 - 2의 53승 + 3)
    。Number 타입의 특수한 3개 값
        ，NaN: Not-a-Number
        ，Infinity : 양수 무한대
        ，-Infinity : 음수 무한대

String 타입
    。문자 타입
        ，값을 "" 또는 '' 사이에 작성
        ．최대 문자수 : 2의 53승 - 1
    。큰 따옴표와 작은따옴표를 같이 사용할 때
        ，따옴표 작성 방밥
    。따옴표에 숫자를 작성하려면 문자타입이 됩니다.
```

<br>

Undefined,Null 타입
```
Undefined 타입
    。Undefined(대문자) 타입
        ，값 : undefined(소문자)
    。변수의 디폴트Default 값
        ，var point;
        ，변수를 선언만 한 거승로 undefined가 초깃값으로 설정
        ，변수에 값을 할당하지 않은 것을 나타내는 신맥틱
    。변수에 undefined 할당 가능

Null 타입
    。 Null(대문자) 타입
        ，값: null(소문자)
    。null과 undefined 차이
        ，undefined는 단지 변수만 선언
        ，null을 할당해야 값으 null이 됨
        ，의도적으로 값을 할당한 것으로 코드를 수행한 것이 됩니다.
```

<br>

Boolean 타입, Object 타입
```
Boolean 타입
    。불리언 타입
        ，값: true, false 

Object 타입
    。Object 형태
        ，{name : value}
    。 프로퍼티Property
        ，name과 value 하나를 지칭
    。 Object는 프로퍼티 집합

타입 정리
    。JS의 기본 데이터 타입 정리
    。기본 데이터 타입을 Primitive 타입이하고 합니다.
    。데이터 타입이 같다? 
```