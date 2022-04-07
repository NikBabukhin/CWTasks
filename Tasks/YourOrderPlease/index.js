function order(words){
    const arr = words.split(' ');
    const helperArr = [];
    for (let i = 0; i < arr.length; i++) {
        helperArr.push(arr.find((el)=>el.includes((i+1).toString())))
    }
    return helperArr.join(' ');
}

console.log(order(""))