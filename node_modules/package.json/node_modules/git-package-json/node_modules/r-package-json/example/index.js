const readPack = require("../lib");

readPack(__dirname + "/..", function (err, pack) {
    console.log(err || pack);
    // { name: 'w-package-json',
    //   version: '1.0.0',
    //   description: 'Write package.json files.',
    //   main: 'index.js',
    //   ...
    // }
});
