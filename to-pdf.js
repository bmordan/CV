const markdownpdf = require('markdown-pdf')
const path = require('path')
const fs = require('fs')

; (async function () {
    const options = {
        html: true,
        remarkable: {
            preset: 'full'
        },
        paperFormat: 'A4',
        cssPath: path.join(__dirname, 'cv.css')
    }
    const readme = fs.readFileSync(path.join(__dirname, 'readme.md'))
    markdownpdf(options).from.string(readme).to(path.join(__dirname, 'readme.pdf'), process.exit)
})()
