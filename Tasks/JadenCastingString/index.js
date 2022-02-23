String.prototype.toJadenCase = function () {
    return this.split(' ').map(element => element.replace(element[0], element[0].toUpperCase())).join(' ');
};

console.log('How can mirrors be real if our eyes arent real'.toJadenCase());