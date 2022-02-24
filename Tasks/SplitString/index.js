function solution(str){
 let bestArr = str.split('');
 let finalArr = [];
 for (i=0;i<bestArr.length;i=i+2) {
    if (bestArr[i+1] === undefined) {
        finalArr.push(bestArr[i] + '_')
    } else {
        finalArr.push(bestArr[i] + bestArr[i+1]);
    };
 };
 return finalArr;
};

console.log(solution('abcdi'));