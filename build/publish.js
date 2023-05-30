const fs = require('fs')
const path = require('path')
copy()
console.log('build success!!')
function copy() {
  // 拷贝 package.json
  fs.copyFileSync(path.join(__dirname, '../package.json'), path.join(__dirname, '../dist/package.json'))
}
