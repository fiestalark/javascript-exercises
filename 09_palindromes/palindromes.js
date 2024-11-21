const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz123456789';

    const cleanedString = string
                            .toLowerCase()
                            .split('')
                            .filter(char => alphanumerical.includes(char))
                            .join('');

    const reverseString = cleanedString.split('').reverse().join('');
    
    return cleanedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
