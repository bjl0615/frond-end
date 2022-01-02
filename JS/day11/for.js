function log(value) {
    console.log(value);
}

// for(var k = 0; k < 2; k++) {
//     log(k);
// }

// for(var k=0; k < 3;) {
//     log(k);
//     k++
// };

// var k = 0;
// for(; k< 3;) {
//     log(k);
//     k++;
// };

// for( var k =0; ;) {
//     log(k);
//     k++;
//     if(k > 2) {
//         break;
//     };
// };

// var k =0;
// for (;;) {
//     log(k);
//     if(k === 2) {
//         break;
//     };
//     k++;
// };

var even = 0;
var odd = 0;
var num = 0;
for(i =1 ; i <51 ;i++){
    if(i % 2 === 0) {
        even += i;
        log("짝수 = " + i);
    }else {
        odd += i;
        log("홀수 = " + i)
    }
    num += i;
}
log("짝수 = " + even + ", 홀수 = " + odd + ", 총합 = " + num);