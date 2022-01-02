var log = function(value) {
    console.log(value);
}

// var book = {
//     title = "책",
//     point = 123
// };

// var book = {
//     title = "책"
// };

// var book = {
//     title: "책",
//     point: {
//         ten : 10,
//         bonus: 200,
//         promotion: function(){}
//     }
// };

// var book = {};
// book.title = "JS책";
// log(book);

// var book = {};
// book["title"] = "JS책"
// log(book);

// var book = {title: "JS책"};
// var varName = "title";
// book[varName] = "HTML책";
// log(book);

// var obj = {book : "책"};
// log(obj.book);
// log(obj["sports"]);

var sports = {
    soccer : "축구",
    baseball : "야구"
};
for(var item in sports) {
    log(item);
    log(sports[item]);
}