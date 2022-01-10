var log = function(value) {
    console.log(value);
}

var value = "abcabc";
log(value.replace("a", "바꿈"));
log(value.replace(/a/, "바꿈"));

function change() {
    return "함수";
}
log(value.replace(/a/, change()));