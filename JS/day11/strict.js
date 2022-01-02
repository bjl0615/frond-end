 function log(value) {
     console.log(value);
 }

book = "책";
log(book);

"usestrict"
try{
    book = "변수 선언하지 않음";
    log(book);
} catch(error) {
    log(error.message);
}

