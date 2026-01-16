const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } else if (!(num1 % 1 === 0) || !(num2 % 1 === 0)) {
        return "ERROR"
    } else if (isNaN(num1) || isNaN(num2)) {
        return "ERROR"
    } else if ((typeof num1 == "string" || typeof num2 == "string")) {
        return "ERROR"
    }

    sumArr = [];

    if (num2 > num1) {
        for (let i = num1; i < num2 + 1; i++) 
            sumArr.push(i)
    } else {
        for (let i = num2; i < num1 + 1; i++)
            sumArr.push(i)
    }

    sum = sumArr.reduce((total, item) => total + item)

    return sum
};

// Do not edit below this line
module.exports = sumAll;
