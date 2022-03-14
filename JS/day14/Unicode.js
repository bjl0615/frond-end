var log = function(value) {
    console.log(value);
}

var value = "1Aa가";
for(var k = 0; k < value.length ; k++) {
    log(value.charCodeAt(k));
}
log(value.charCodeAt(12));

log(String.fromCharCode(49, 65, 97, 44032));

var value = "나";
log(value.localeCompare("가"));
log(value.localeCompare("나"));
log(value.localeCompare("다"));