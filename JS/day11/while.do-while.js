var log = (value) => {console.log(value)};

var k = 1;
while(k < 3) {
    log(k);
    k++;
};

var k = 0;
do {
    log("do:", k);
    k++;
}while (k < 3) {
    log("while:" , k);
};