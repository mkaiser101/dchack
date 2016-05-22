# r-package-json [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/r-package-json.svg)](https://www.npmjs.com/package/r-package-json) [![Downloads](https://img.shields.io/npm/dt/r-package-json.svg)](https://www.npmjs.com/package/r-package-json) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Read package.json files.

## Installation

```sh
$ npm i --save r-package-json
```

## Example

```js
const readPack = require("r-package-json");

readPack(__dirname + "/..", function (err, pack) {
    console.log(err || pack);
    // { name: 'w-package-json',
    //   version: '1.0.0',
    //   description: 'Write package.json files.',
    //   main: 'index.js',
    //   ...
    // }
});
```

## Documentation

### `readPackageJson(dir, callback)`
Reads the `package.json` content from the provided directory.

#### Params
- **String** `dir`: The path to the directory containing the `package.json` file.
- **Function** `callback`: The callback function.

#### Return
- **Object** The `package.json` content (if a `callback` function was not provided).

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## Related

 - [`w-package-json`](https://github.com/IonicaBizau/w-package-json)–Write package.json files.

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md