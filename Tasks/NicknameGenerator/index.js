function nicknameGenerator(name){
    let arrVowel = ['a', 'e', 'u', 'i', 'o'];
    if (name.length<4) {
        return "Error: Name too short";
    } else {
       return arrVowel.includes(name[2])? name.substring(0, 4) : name.substring(0, 3);
    }
};

  console.log(nicknameGenerator('Nickolay'));
