var log = function(value) {
    console.log(value);
}

var value = "123123";
log(value.lastIndexOf(2));

var value = "1231231";
log(value.lastIndexOf(1, 4));
log(value.lastIndexOf(2, -1)); // 두 번째 파라미터가 0보다 작으면 -1 반환

var value = "1234512345";
var num = value.lastIndexOf(3, 2);
if(5 > num) {
    console.log("true");
    console.log(num);
}else {
    console.log("false")
    console.log(num);
}