const path = require('path');
const withPlugins = require('next-compose-plugins'),
    css = require('@zeit/next-css'),
    images = require('next-images');

module.exports = withPlugins([
    [css],
    [images]
]);

// module.exports = {
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'src/styles')],
//     },
// };