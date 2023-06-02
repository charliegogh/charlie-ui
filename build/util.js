const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const path = require('path')
function getEntry(globPath) {
  const files = glob.sync(globPath)
  const entries = {}
  files.forEach(entry => {
    const entryName = path.dirname(entry).split('/').pop()
    entries[entryName] = [entry]
  })
  return entries
}

module.exports = {
  getEntry
}
