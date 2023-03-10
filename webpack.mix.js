// Required plugins
const mix = require('laravel-mix')

const config = {
  srcJSDir: '.',
  dstDir: '.'
}

// javascript (when it's needed)
mix.js(
  config.srcJSDir + '/index.js',
  config.dstDir + '/app.js'
)
