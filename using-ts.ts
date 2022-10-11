const button = document.querySelector("button")!;
const input1 = document.getElementById("string1")! as HTMLInputElement;
var input2 = document.getElementsByName('array[]')!

//tsc using-ts.ts

function vowelCount(str: string): number {
    const count: number = str.match(/[aeiou]/gi)?.length ?? 0;
    /*g modifier: global. All matches (don't return on first match)
    i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])*/
    return count;
}

function sortCheck(input2: NodeListOf<HTMLElement>/*arr: Array<Int32Array>*/): boolean {
    //might just use Array.push(value) but that would require constant user submission i guess? (good heavens i can't spell)
    /*as NodeListOf<HTMLElement>*/;
    var array: number[] = [];
    var res: boolean;

    for (var i: number = 0; i < input2.length; i++) {
        array.push(+((input2[i] as HTMLInputElement).value))
    }

    function internalCheck(arrayk: number[]): boolean {
        for (var i: number = 0; i < arrayk.length; i++) {
            if (arrayk[i + 1] != null) {
                if (arrayk[i + 1] && (arrayk[i + 1] > arrayk[i])) { continue; }
                else if (arrayk[i + 1] && (arrayk[i + 1] < arrayk[i])) { return false; }
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