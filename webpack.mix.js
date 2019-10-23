const mix = require('laravel-mix');
require('laravel-mix-alias')

const dirJs = '/resources/js/'

mix.alias({
  '@': dirJs,
  '@v': `${dirJs}/views`,
  '@c': `${dirJs}/components`,
  '@l': `${dirJs}/layouts`,
  '@system-tokens': `${dirJs}/system/styles/tokens.scss`
})

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');
