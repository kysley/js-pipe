const _pipe = (a, b) => (...args) => b(a(...args))

const pipe = (...ops) => ops.reduce(_pipe)

module.exports = pipe
