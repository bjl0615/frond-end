var log = (value) => {console.log(value)}

var value, zero = 0, two = 2;
log(value || zero || two);

var value, zero = 0;
log(zero || value);

var one = 1;
log(one === 1 || two === 2);

var one =1, two =2;
log(one && two);

var one =1, zero= 0;
log(one && zero && nine);