function absentVowel(x){
    let arrayVowel = ['a', 'e', 'i', 'o', 'u'];
    let vowelX = x.replace(/[bcdfghgklmnpqrstvwxyz]/gi, '');
    for (i=0;i<arrayVowel.length;i++) {
        if (!vowelX.includes(arrayVowel[i])) {
            return i;
        };
    };
}

console.log(absentVowel('aHello world!'));
