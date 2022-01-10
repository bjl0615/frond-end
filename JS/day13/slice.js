var log = function(value) {
    console.log(value);
}

var value = "1234567";
log(value.slice(1,4));
log(value.slice(false, 4));

var value = "1234567";
log(value.slice("A"));
log(value.slice());

var value = "01234567";
log(value.slice(5));
log(value.slice(5, 3)); // 첫 번째가 두 번째보다 크거나 같으면 빈 문자열

var value ="01234567";
log(value.slice(4, -2)); 
log(value.slice(-5 ,-2));
log(value.slice(-2, -5));