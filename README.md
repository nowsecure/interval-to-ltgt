
# interval-to-ltgt

  Convert an interval string to a levelup style ltgt object.

  This is the counterpart to [ltgt-to-interval](https://npmjs.org/package/ltgt-to-interval).

  [![build status](https://secure.travis-ci.org/nowsecure/interval-to-ltgt.svg)](http://travis-ci.org/nowsecure/interval-to-ltgt)

## Example

```js
var toLtgt = require('interval-to-ltgt');

toLtgt('a,b'); // => { gte: 'a', lte: 'b' }
toLtgt('a,'); // => { gte: 'a' },
toLtgt(',b'); // => { lte: 'b' }
toLtgt('[a,b'); // => { gte: 'a', lte: 'b' }
toLtgt('(a,b'); // => { gt: 'a', lte: 'b' }
toLtgt('[a,b)'); // => { gte: 'a', lt: 'b' }
toLtgt(']a,b['); // => { gt: 'a', lt: 'b' }
```

## Installation

```bash
$ npm install interval-to-ltgt
```

## API

### toLtgt(str)

  Parse `str` into an [levelup](https://npmjs.org/package/levelup) style ltgt object.

  Intervals sides are inclusive by default, unless when using parens or
  outward open square brackets.

## License

  MIT

