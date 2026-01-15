const removeFromArray = function(arr, ...args) {
    const argsArr = [...args];
    resultsArr = [];

    arr.forEach((element) => {
        if (!(argsArr.includes(element))) {
            resultsArr.push(element);
        }
    })
    return resultsArr
};

// note: more smooth way to use "filter" (which is the "advanced" solution in the js)

// Do not edit below this line
module.exports = removeFromArray;
