const log = (value) => {console.log(value)}

var obj = {value: 123};
var own = obj.hasOwnProperty("value");
log(own);

var obj = {value: undefined};
var own = obj.hasOwnProperty("value");
log(own);

var obj = {};
var own = obj.hasOwnProperty("hasOwnProperty");
log(own);

var obj= {sports: "축구"};
log(obj.propertyIsEnumerable("sports"));


var obj = {sports: "축구"};
Object.defineProperty(obj, "sports", {
    enumerable: false
});
log(obj.propertyIsEnumerable("sports"));

for(var name in obj) {
    log(name);
}
