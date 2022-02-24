function countPositivesSumNegatives(input) {
    let sum = 0;
    let count = 0;
    if (input===null || input.length===0 || input===0) {
        return [];
    } else {
        for (i=0; i<input.length; i++) {
            input[i]<=0? count+=input[i] : sum++;
        }
        return [+sum, +count];
    }
};

console.log(countPositivesSumNegatives([]));


