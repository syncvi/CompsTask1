const button = document.querySelector("button")!;
const input1 = document.getElementById("string1")! as HTMLInputElement;

//tsc using-ts.ts

function vowelCount(str: string) {
    const count: number = str.match(/[aeiou]/gi)?.length ?? 0;

    return count;
}

function sortCheck(/*arr: Array<Int32Array>*/) {
    //might just use Array.push(value) but that would require constant user submition i guess?
    var input2 = document.getElementsByName('array[]')!/*as NodeListOf<HTMLElement>*/;

    // var input = (<HTMLInputElement><any>document.getElementsByName('array[]')).value;
    for (var i: number = 0; i < input2.length; i++) {
        var prevIndex = (input2[i] as HTMLInputElement).value;
        if (input2[i + 1] != null) { var nextIndex = (input2[i + 1] as HTMLInputElement).value; }
        else { var nextIndex = "" }
        if (nextIndex && (nextIndex > prevIndex)) { continue; }
        else if (nextIndex && (nextIndex < prevIndex)) { return false; }
    }

    return true;
}

button.addEventListener("click", function () {
    console.log(vowelCount(input1.value));
    console.log(sortCheck());
});