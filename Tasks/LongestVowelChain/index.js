function solve(s){
    let strArray = s.split('');
    let count = 0;
    let countArr = [];
    for (i=0;i<strArray.length;i++) {
        if (strArray[i] === 'a' || strArray[i] === 'e' || strArray[i] === 'i' || strArray[i] === 'o'|| strArray[i] === 'u') {
            count++;
        } else {
            countArr.push(count);
            count = 0;            
        }
    };
    countArr.push(count);
    countArr.sort((a,b) => b-a);
    return countArr[0];
}

console.log(solve('abbeeeediiiiiiiiiiiii'));