function log(vale) {
    console.log(vale);
}
var exp = 1;
switch(exp) {
    case 1 : 
        log(100);
    case 2 : 
        log(200);
};

var exp = 1;
switch(exp) {
    case 1 : 
        log(100);
        break;
    case 2 : 
        log(200);
};

var exp = 7, value;
switch (exp) {
    case 1:
        value = 100;
        break;
    default: value = 700;
        break;
    case 2 :
        value= 200;
}
log(value);