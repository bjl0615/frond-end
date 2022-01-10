var log = function(value) {
    console.log(value);
}

var value = "01234567";
log(value.substring(2,5)); // 2번 인덱스 부터 5번 인덱스 직전까지 반환

var value = "01234567";
log(value.substring(5));
log(value.substring());

var value = "01234567";
log(value.substring(5, 20));

var value = "01234567";
log(value.substring(-7 , 2)); //파라미터 값이 음수이면 0으로 간주 0번 인덱스 부터 2번 인덱스 직전까지 반환
log(value.substring(5, 1)); // 첫 번쨰 파라미터 값이 두 번쨉돠 크면 파라미터 값을 바꿔서 처리 value.substring(1,5) 형태가 됨
log(value.substring(5, "A")); // NaN는 0으로 간주 첫 번째 파라미터 값이 두 번째보다 크므로 value.substring(0,5) 형태가 됨