const path = require('path')
const mix = require('laravel-mix')
const webpackNodeExternals = require('webpack-node-externals')

mix
    .options({manifest: false})
    .js('resources/js/ssr.js', 'public/js')
    .vue({version: 3, options: {optimizeSSR: true}})
    .alias({'@': path.resolve('resources/js')})
    .webpackConfig({
        target: 'node',
        externalsPresets: { node: true }, // Needed for Webpack 5 https://www.npmjs.com/package/webpack-node-externals
        externals: [webpackNodeExternals({
            modulesFromFile: {
                fileName: 'package.json',
                includeInBundle: 'dependencies',
                excludeFromBundle: 'devDependencies',
            }
        })]
    })
