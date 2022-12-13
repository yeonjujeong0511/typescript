var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var shape_array = ["spade", "heart", "diamond", "club", "joker"];
function trump_deck(shapeArray) { }
trump_deck(shape_array);
var array = [];
for (var i = 1; i < 14; i++) {
    array.push(i);
}
console.log(array);
var shape = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
];
var result = shape.reduce(function (acc, curr, idx) {
    var _a;
    return __assign(__assign({}, acc), (_a = {}, _a[curr] = array[idx], _a));
}, new Object());
console.log(result);
// console.log(JSON.stringify(result));
var joker = ["RED", "BLACK"];
