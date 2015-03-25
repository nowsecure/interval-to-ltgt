module.exports = function(str){
  var m = str.match(/([\[\]\(]?)([^,]*),([^\]\[\)]*)(.?)/);
  var o = {};

  var excludeLower = m[1] == ']' || m[1] == '(';
  var lowerBound = m[2];
  var upperBound = m[3];
  var excludeUpper = m[4] == '[' || m[4] == ')';

  if (lowerBound) {
    var key = excludeLower ? 'gt' : 'gte';
    o[key] = lowerBound;
  }
  if (upperBound) {
    var key = excludeUpper ? 'lt' : 'lte';
    o[key] = upperBound;
  }

  return o;
};
