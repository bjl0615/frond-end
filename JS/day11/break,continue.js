function log(value) {
    console.log(value);
}

var k = 0, m = 0;
while(k < 3) {
    k++;
    if(k === 2) {
        break;
    }
    log(m);
};

for(var i =0; i < 3; i++) {
    if(i === 1) {
        bvreak;
        log("k === 1");
    }
    log(k);
};

for(var k =0; k < 5; k++) {
    if(k===2 || k===3) {
        continue;
    }
    log(k)
};