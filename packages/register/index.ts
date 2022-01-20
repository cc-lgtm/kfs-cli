function onRegister(cmd: {
  [k: string]: any
}) {
  console.log(cmd, 'register')
}

module.exports = {
  onRegister
}
export {}
