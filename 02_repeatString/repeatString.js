const repeatString = function(stringy, num) {
    let kek = '';
    if(num<0){
        return 'ERROR';
    }
for(i=0;i<num;i++){
    kek = kek.concat('', stringy);
}
    return kek;;
};

// Do not edit below this line
module.exports = repeatString;
