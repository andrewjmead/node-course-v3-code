const calculateTip = (total, tipPercent = .25) => total + (total * tipPercent)

module.exports = {
    calculateTip
}