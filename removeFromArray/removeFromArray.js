const removeFromArray = function(array, ...args) {
  array = array.filter(x => !args.includes(x));
  return array;
};

module.exports = removeFromArray;
