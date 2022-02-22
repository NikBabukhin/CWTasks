let arr = [15, 15, 17, 17, 17, 84, 15, 84, 30];

function findUniq(arr) {
    let simpleObj = {};
    for (i=0;i<arr.length; i++) {
        if (arr[i] in simpleObj) {
            ++simpleObj[arr[i]];
        }   else {
            simpleObj[arr[i]] = 1;
        }
    };
    return +Object.keys(simpleObj).find(key => simpleObj[key] === 1);
}
console.log(findUniq(arr));

//

