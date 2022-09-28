const add = function(num1, num2) {
	return num1+num2; 
};

const subtract = function(num1,num2) {
	return num1 - num2
};

const sum = function(num) {
	total = 0
  for(const  i of num){
    total = total+i;
  }
  return total;
};

const multiply = function(num) {
	total = 1;
  for(const i of num){
    total = total*i;
  }
  return total;
};

const power = function(num1,num2) {
	total = 1;
  for(i=0;i<=num2-1;i++){
    total = total * num1
  }
  return total;
};

const factorial = function(num1) {
  total = 1
	for(i=num1;i>=1;i--){
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
