var exports = module.exports = {}

exports.plus = function (a, b) {
    return a+b
}

exports.minus = function (a, b) {
    return a-b
}

exports.multiply = function (a, b) {
    return a*b
}

exports.divide = function (a, b) {
    if (b == 0) {
        throw new Error("Attempt to divide by zero")
    }
    return a/b
}