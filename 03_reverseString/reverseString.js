const reverseString = function(string) {
    let reverseArray = [];

    let i = string.length;

    while (i >= 0) {
        reverseArray.push(string[i]);
        i--;
    }
    let reverseString = reverseArray.join('');

    return reverseString;
    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
