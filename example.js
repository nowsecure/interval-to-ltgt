var toLtgt = require('.');

var intervals = [
  'a,b',
  'a,',
  ',b',
  '[a,b',
  '(a,b',
  '[a,b)',
  ']a,b['
];

intervals.forEach(function(interval){
  console.log('%s => %j', interval, toLtgt(interval));
});

