function persistence(num) {
    let result = -1;

    function recursion(number) {
        ++result;
        if (number.toString().length === 1) {
            return result;
        } else {
            let res = number.toString().split('').map(el => +el).reduce((acc, item) => acc * (+item))
            recursion(res);
        }
    }

    recursion(num);
    return result;
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));


