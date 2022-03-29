function pigIt(str){
    return str.split(' ').map(el=> el.match(/^[.,:!?]/)?  el : el.substring(1, el.length) + el[0] + 'ay').join(' ')
}

console.log(pigIt('Hello world !'))