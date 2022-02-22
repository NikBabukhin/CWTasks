function isVeryEvenNumber(n) {
    if (n.toString().length === 1) {
        return(n%2===0);
    } else {
        return isVeryEvenNumber(n.toString().split('').map(element => +element).reduce((a,b)=>a+b));
    }
};

console.log(isVeryEvenNumber(1731));