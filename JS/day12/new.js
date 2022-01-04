var log = function(value) {
    console.log(value);
}

var obj = new Number();
log(typeof obj);

var oneObj = new Number("123");
log(oneObj.valueOf());

var twoObj = new Number("456");
log(twoObj.valueOf());

var obj = new Number("123");
log(obj.valueOf());
