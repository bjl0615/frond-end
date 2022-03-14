const log = (value) => {console.log(value)};

var numObj = new Number(123);
log(Object.prototype.isPrototypeOf(numObj));

var point = {book: "책"};
log(point.toString());

var obj = new Number(123);
log(Object.prototype.toString.call(obj));

log(1234.56.toLocaleString());
log("4567.89".toLocaleString());