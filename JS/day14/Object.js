var log = function(value) {
    console.log(value);
}

// var node = document.querySelector("div")
// log(node.nodeName);

// var obj = Object({name : "JS책"});
// log(obj);

var emptyObj = Object();
log(emptyObj);

var obj = Object({name: "value"});
log(obj);
log(obj instanceof Object);