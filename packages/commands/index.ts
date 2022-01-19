const { Command } = require('commander')
const { onGenerate } = require('../generate')

const generateCMD = new Command()
generateCMD.command('generate')
.option('-g --generate <type>', "生成组件的文件夹")
.action(onGenerate)
generateCMD.parse()

module.exports = {
  generateCMD
}
export {}
