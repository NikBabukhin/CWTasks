function findShort(s){
    let count = s.length;
    s.split(' ').forEach(el=> {
        if(el.length<count) {
            count = el.length;
        }
    });
    return count;
};

console.log(findShort('bitcoin take over the2 world maybe whort knows perhaps'));