#!/usr/bin/env node
const yargs = require('yargs')
.usage(`
Usage: $0 url
`)
.options({})
.describe({})
.boolean([])
.help()
.alias('h', 'help');

const argv = yargs.argv;

if (argv._.length) {
  process(argv._[0], argv?.u, argv?.p);
} else {
  throw new Error('URL is not define')
}

function process(value, user, password) {
  const module = require('./dist/common.js');

  module.heating(value, user, password).then((data) => {
    console.log(data)
  })
}
