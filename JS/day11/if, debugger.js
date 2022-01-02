var log = (value) => {console.log(value)};

var a =1 , b = 1;
if(a === b) log("블록을 사용하지 않음");

if(a === b) 
    log("1번째 줄");
    log("2번째 줄")

var a = 1, b= 1;
if(a === b) {
    log("블록 사용!");
};

var a = 1, b = 2;
if(a === b)
    log("블록을 사용하지 않음. true")
else 
    log("블록을 사용하지 않음, else")

var sports = "스포츠";
debugger;
log(sports);