const fibonacci = function(num) {
    let a=0;
    let b=1;
    let c=0;
    num = parseInt(num);
    if (num == 1 || num == 2){
        return 1;
    }
    if (num < 0){
        return "OOPS";
    }
for(i=2;i<=num;i++){
c = a+b;
a= b;
b = c;
}
return c;
};

// Do not edit below this line
module.exports = fibonacci;
