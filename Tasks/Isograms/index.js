function isIsogram(str){
    return str.toLowerCase().split('').filter((element, index, arr)=> arr.indexOf(element) == index).length == str.length;
}

console.log(isIsogram('moOse'));