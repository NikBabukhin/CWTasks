function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp('+', 4, 3));
//And i know eval is evil