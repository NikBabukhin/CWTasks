function explode(s) {
    let arr = s.split('');
    let resArr = [];
    arr.forEach(element => {
        for (i=0;i<(+element);i++) {
            resArr.push(element);
        }
    });
    return resArr.join('');
};

console.log(explode("234"));