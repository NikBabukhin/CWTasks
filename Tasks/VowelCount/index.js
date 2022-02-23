function getCount(str) {
    let vowelsCount = 0;
    str.split('').forEach(element => { if(['a', 'e', 'i', 'o', 'u'].includes(element)) {vowelsCount++} })
    return vowelsCount;
};

console.log(getCount('abcdeiiiio'))