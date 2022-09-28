const reverseString = function(stringy) {
    let reverse = stringy.split('');
    let newstring = '';

    for(i=stringy.length;i>=1;i--){
        newstring = newstring.concat(reverse[i-1]);
    }
    return newstring;
};

// Do not edit below this line
module.exports = reverseString;
