function onBuild(cmd: {
  [k: string]: any
}) {
  console.log(cmd, 'build')
}

module.exports = {
  onBuild
}
export {}
