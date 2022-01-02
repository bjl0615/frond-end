function log(value) {
    console.log(value);
}

var value;
try {
    value = ball;
} catch(error) {
    log("catch 실행");
};

var sports;
try {
    sports = ball;
} catch(error) {
    log("catch 실핼")
} finally {
    log("finally 실행")
};

try{
    throw "예외 발생시킴";
    var sports = "스포츠";
} catch(error) {
    log(error);
    log(sports);
}

try {
    throw {
        msg : "예외 발생시킴",
        bigo : "임의의 이름 사용"
    }
}catch(error) {
    log(error.msg);
    log(error.bigo);
}

try {
    throw new Error("예외 발생시킴")
} catch(error) {
    log(error.message);
};