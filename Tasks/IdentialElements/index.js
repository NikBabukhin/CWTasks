function duplicateElements(m, n) {
    return !!m.find(element => n.includes(element));
};

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));