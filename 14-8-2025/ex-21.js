var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(123);
console.log("Number:", numberBox.getValue());
var stringBox = new Box("Hello");
console.log("String:", stringBox.getValue());
var booleanBox = new Box(true);
console.log("Boolean:", booleanBox.getValue());
