function highAndLow(numbers){
    let finalarr = numbers.split(' ').map(el => el = +el).sort((a,b) => b-a);
    return (finalarr[0] + ' ' + finalarr[finalarr.length-1]);
};

console.log(highAndLow('12 11 34'));