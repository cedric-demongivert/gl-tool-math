const mix = require('laravel-mix')
const package = require('./package.json')

const externals = []

for (const name in package.dependencies) {
  externals.push(new RegExp(`^${name}(\\/.+)?$`))
}

mix.disableNotifications()
   .webpackConfig({
     'externals': externals,
     'output': {
       'library': package.name,
       'libraryTarget': 'umd'
     }
   })
   .ts('src/index.ts', 'dist')
   .copy('LICENSE.md', 'dist')
   .copy('package.json', 'dist')
   .copy('README.md', 'dist')
   .setPublicPath('dist')
