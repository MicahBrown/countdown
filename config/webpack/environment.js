const { environment } = require('@rails/webpacker')
// const url = require('./loaders/url')

// console.log(url)
module.exports = environment

// environment.loaders.prepend('url', url)

// avoid using both file and url loaders
// environment.loaders.get('file').test = /\.(tiff|ico|svg|eot|otf|ttf|woff|woff2)$/i