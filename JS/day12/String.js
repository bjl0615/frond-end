var log = function(value) {
    console.log(value);
}

var value = 20;
log(20 === value.toString());

log(value.toString(16));

log(20..toString());

var value = 1234.56;
log(value.toLocaleString());
log(value.toLocaleString('de-DE'));
log(value.toLocaleString(
    'zh-Hans-CN-u-nu-hanidec'
));

var value = 1234;
log(value.toExponential());

var value = 123456;
log(value.toExponential(3));

var value = 1234.567;
log(value.toFixed(2));
log(value.toFixed());

var value = 1234.567;
log(value.toFixed(5));

var concat = 123 + "abc" +
                        "가나다라";
log(concat);

var value = String(123);
log(value);
log(typeof value);

log(typeof ("" + 123));

var obj = new String(123);
log(typeof obj);

var obj = new String(123);
log(obj.valueOf());