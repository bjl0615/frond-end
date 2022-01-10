var log = function(value) {
    console.log(value);
}

log("12_34_56" .split("_"));

var value = "123";
log(value.split(""));
log(value.split());

var value = "12_34_56_78";
log(value.split("_", 3));

value = "123";
log(value.split("A"));