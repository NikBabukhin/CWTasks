function calc(x){
    let arrayStr = x.split('');
    let arrayNum = [];
    arrayStr.forEach(element => {
        arrayNum.push(element.charCodeAt());
    });
    let total1 = 0;
    let total2 = 0;
    let total1Array = arrayNum.join('').split('');
    let total2Array = [];
    for (i=0; i<total1Array.length; i++) {
        total1Array[i] = +total1Array[i];
        total2Array.push(total1Array[i]);
        if (total2Array[i]===7) {
            total2Array[i] = 1
        };
        total1 = total1 + total1Array[i];
        total2 = total2 + total2Array[i];
    }
    return total1 - total2;
}

console.log(calc('abcdef'));
