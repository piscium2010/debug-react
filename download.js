const fs = require('fs-extra')
const path = require('path')
const unzip = require('unzip')
const request = require('request')

// https://github.com/facebook/react/archive/v16.13.0.zip
// https://github.com/facebook/react/archive/v16.12.0.zip
// https://github.com/facebook/react/archive/v16.11.0.zip

const version = process.argv[2] || 'v16.13.1'
const url = `https://github.com/facebook/react/archive/${version}.zip`

const tempPath = path.join(__dirname, 'temp')
const outputPath = path.join(__dirname, 'code')
const zipPath = path.join(tempPath, 'code.zip')

if (!fs.existsSync(tempPath)) {
    fs.mkdirSync(tempPath)
}
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath)
}

const write = fs.createWriteStream(zipPath)

console.log(`from ${url}`)
console.log(`downloading...`)
request(url).pipe(write)
    .on('finish', function () {
        console.log(`complete download`)
        console.log(`unzip...`)
        fs.createReadStream(zipPath)
            .pipe(unzip.Extract({ path: tempPath }))
            .on('finish', function () {
                console.log(`unzipped to ${tempPath}`)
                for (let dir of fs.readdirSync(tempPath)) {
                    if (dir.match(/react-\d/)) {
                        let source = path.join(tempPath, dir)
                        fs.copySync(source, outputPath)
                        fs.removeSync(tempPath)
                    }
                }
                console.log(`move to ${outputPath}`)
            })
    })
