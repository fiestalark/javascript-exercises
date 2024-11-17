const removeFromArray = function(array, ...remove) {
    remove.forEach(item => {
        array = array.filter(int => int !== item);
    }); 
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
