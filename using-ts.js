var button = document.querySelector("button");
var input1 = document.getElementById("string1");
//tsc using-ts.ts
function vowelCount(str) {
    var _a, _b;
    var count = (_b = (_a = str.match(/[aeiou]/gi)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    return count;
}
function sortCheck( /*arr: Array<Int32Array>*/) {
    //might just use Array.push(value) but that would require constant user submition i guess?
    var input2 = document.getElementsByName('array[]') /*as NodeListOf<HTMLElement>*/;
    // var input = (<HTMLInputElement><any>document.getElementsByName('array[]')).value;
    for (var i = 0; i < input2.length; i++) {
        var prevIndex = input2[i].value;
        if (input2[i + 1] != null) {
            var nextIndex = input2[i + 1].value;
        }
        else {
            var nextIndex = "";
        }
        if (nextIndex && (nextIndex > prevIndex)) {
            continue;
        }
        else if (nextIndex && (nextIndex < prevIndex)) {
            return false;
        }
    }
    return true;
}
button.addEventListener("click", function () {
    console.log(vowelCount(input1.value));
    console.log(sortCheck());
});
