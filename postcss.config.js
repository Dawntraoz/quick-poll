const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer({
            add: true,
            grid: true
        }),
        purgecss({
           content: [
               './public/*.html', 
               './src/**/*.vue'
           ],
           defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
       }) 
    ]
};