function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('').reduce((acc,el)=> {
        if (alphabet.includes(el)) {
            acc.push(alphabet.indexOf(el)+1)
        }
            return acc;
    }, []).join(' ')
}

console.log(alphabetPosition('The sunset sets at twelve o clock.'))