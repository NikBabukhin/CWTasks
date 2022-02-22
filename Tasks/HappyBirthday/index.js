function wrap(height, width, length){
    let arr = [height, width, length].sort((a, b) => b - a);
    //your code here
    return (2*(arr[0] + arr[1] + 2*arr[2]) + 20);
}

console.log(wrap(17, 32, 11));