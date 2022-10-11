var button = document.querySelector("button");
var input1 = document.getElementById("string1");
var input2 = document.getElementsByName('array[]');
//tsc using-ts.ts
function vowelCount(str) {
    var _a, _b;
    var count = (_b = (_a = str.match(/[aeiou]/gi)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    /*g modifier: global. All matches (don't return on first match)
    i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])*/
    return count;
}
function sortCheck(input2 /*arr: Array<Int32Array>*/) {
    //might just use Array.push(value) but that would require constant user submission i guess? (good heavens i can't spell)
    /*as NodeListOf<HTMLElement>*/ ;
    var array = [];
    var res;
    for (var i = 0; i < input2.length; i++) {
        array.push(+(input2[i].value));
    }
    function internalCheck(arrayk) {
        for (var i = 0; i < arrayk.length; i++) {
            if (arrayk[i + 1] != null) {
                if (arrayk[i + 1] && (arrayk[i + 1] > arrayk[i])) {
                    continue;
                }
                else if (arrayk[i + 1] && (arrayk[i + 1] < arrayk[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    // var input = (<HTMLInputElement><any>document.getElementsByName('array[]')).value;
    // for (var i: number = 0; i < input2.length; i++) {
    //     var prevIndex = (input2[i] as HTMLInputElement).value;
    //     if (input2[i + 1] != null) { var nextIndex = (input2[i + 1] as HTMLInputElement).value; }
    //     else { var nextIndex = "" }
    //     if (nextIndex && (nextIndex > prevIndex)) { continue; }
    //     else if (nextIndex && (nextIndex < prevIndex)) { return false; }
    // }
    return res = internalCheck(array);
}
button.addEventListener("click", function () {
    console.log(vowelCount(input1.value));
    console.log(sortCheck(input2));
});
