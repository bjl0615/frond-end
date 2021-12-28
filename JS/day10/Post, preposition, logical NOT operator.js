var log = (value) => {console.log(value)};

var one = 1;
var value = one++ + 3;
log(value);
log(one);

var one = 1;
var value = ++one + 3;
log(value);

var two = 2;
var value = two-- + 3;
log(value);
log(two);

var two = 2;
var value = --value + 3;
log(value);

var value = true;
log(!value);
log(!!"A");
