const ftoc = function(f) {
// return Math.round((f-32)*(5/9)*10/10)
return parseFloat(((f-32)*(5/9)).toFixed(1))
};

const ctof = function(c) {
return parseFloat((c*(9/5)+32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
