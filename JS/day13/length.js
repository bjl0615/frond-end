var log = function(value){
    console.log(value);
}

var value = "ABC";
log(value.length);

var value = "ABC";
for(var k = 0; k < value.length; k++) {
    log(value[k]);
};