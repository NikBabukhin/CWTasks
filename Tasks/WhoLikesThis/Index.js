function likes(names) {
    let answer;
  switch (names.length) {
    case 0:
        answer = "no one likes this";
        break;
    case 1:
        answer = names[0] + ' likes this';
        break;
    case 2:
        answer = names[0] + ' and ' + names[1] + ' like this';
        break;
    case 3:
        answer = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
        break;
    default:
        answer =  names[0] + ', ' + names[1] + ' and ' + (names.length-2) + ' others like this';
  };
  return answer;
};

console.log(likes(['Alex', 'Jacob', 'Mark']));