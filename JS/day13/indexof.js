var log = function(value) {
    console.log(value);
}

var value = "123123"; // "123123"에서 2가 두 개이지만 처음 인덱스를 반환하므로 1을 반환
log(value.indexOf(2));  // 값을 구하게 되면 더 이상 값을 구하지 않습니다.
log(value.indexOf(23)); // indexOf(23)에서 23이 존재하며 2가 검색된 인덱스를 반환합니다.

var value = "123123"; 
log(value.indexOf(2,3)); // indexOf(2, 3)에서 3은 3번 인덱스부터 검색하므로 1이 아닌 4를 반환

var value = "123123";
log(value.indexOf(15));

var value = "123123";
log(value.indexOf(2 , -1)); // 두 번째 파라미터 값이 0보다 작으면 처음부터 검색
log(value.indexOf(2, 9)); // 두 번째 파라미터 값이 length보다 크면 -1 반환
log(value.indexOf(2, "A")); // 두 번째 파라미터가 NaN이면 처음부터 검색