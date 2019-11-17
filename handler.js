module.exports.add = async ({ x, y }) => {
    return x + y
}

class NumberIsTooBig extends Error {
    constructor(n) {
        super(`${n} is too big`)
        this.name = 'NumberIsTooBig'
        Error.captureStackTrace(this, NumberIsTooBig)
    }
}

module.exports.double = async sum => {
    if (sum > 50) {
        throw new NumberIsTooBig(sum)
    }
    return sum * 2
}
