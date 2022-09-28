const removeFromArray = function(array1, ...args) {
for(const arg of args){
    for(i=0;i<=array1.length-1;i++){
        if(array1[i] === arg){
            array1.splice(i,1);
        }
    }
}
return array1;
};

// Do not edit below this line
module.exports = removeFromArray;

