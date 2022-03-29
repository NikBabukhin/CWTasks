const countBits =(n)=> {
    const binaryN = n.toString(2);
    return +binaryN.split('').reduce((acc, el) => {
        return +acc + (+el)
    })
};
