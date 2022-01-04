var log = function(value) {
    console.log(value);
}

log(Number("123") + 500);
log(Number("ABC"));

log(Number(0X14));
log(Number(true));
log(Number(null));
log(Number(undefined));