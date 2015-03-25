var test = require('tape');
var toLtgt = require('.');

var intervals = [
  { str: 'a,b', obj: { gte: 'a', lte: 'b' }  },
  { str: 'a,', obj: { gte: 'a' } },
  { str: ',b', obj: { lte: 'b' } },
  { str: '[a,b', obj: { gte: 'a', lte: 'b' } },
  { str: '(a,b', obj: { gt: 'a', lte: 'b' } },
  { str: '[a,b)', obj: { gte: 'a', lt: 'b' } },
  { str: ']a,b[', obj: { gt: 'a', lt: 'b' } }
];

test('interval-to-ltgt', function(t){
  intervals.forEach(function(interval){
    t.deepEqual(toLtgt(interval.str), interval.obj);
  });
  t.end();
});

