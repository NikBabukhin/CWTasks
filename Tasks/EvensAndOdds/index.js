function evensAndOdds(num){
    if (num%2 === 0) {
      return num.toString(2)
    } else {
      return num.toString(16)
    }
      //your code here
};

console.log(evensAndOdds(2))
console.log(evensAndOdds(13))
console.log(evensAndOdds(12))
console.log(evensAndOdds(10))