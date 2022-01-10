var log = function(value){
    console.log(value);
}

var value = "01234567";
log(value.substr(0,3));

var value = "01234567";
log(value.substr(-3, 3));

var value = "01234567";
log(value.substr(4));
log(value.substr());