var log = function(log) {
    console.log(log);
}

var newNum = new Number(123);
log(typeof newNum);
log(newNum + 100);


var newObj = new Object(123);
log(typeof newObj);
log(newObj + 100);

var newObj = new Object();
log(newObj);