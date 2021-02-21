module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        secDozens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        hundreds = ['hundred'];

    let numH = Math.floor(number / 100),
        ost = number / 100 - numH;

    if (number < 10) {
        return numbers[number];
    } else if (number > 10 && number < 20) {
        return secDozens[number - 11];
    } else if (number < 100 && number % 10 === 0) {
        return dozens[number / 10 - 1];
    } else if (number > 20 && number < 100 && number % 10 !== 0) {
        return dozens[Math.floor(number / 10) - 1] + ' ' + numbers[number % 10];
    } else if (number > 100 && ost > 0 && ost < 0.1 && number % 10 !== 0) {
        return numbers[numH] + ' ' + hundreds[0] + ' ' + numbers[number % 100];
    } else if (number > 100 && ost > 0.1 && ost < 0.2 && number % 10 !== 0) {
        return numbers[numH] + ' ' + hundreds[0] + ' ' + secDozens[number % 100 - 11];
    } else if (number % 100 === 0) {
        return numbers[number / 100] + ' ' + hundreds[0];
    } else if (number > 100 && number % 10 === 0) {
        return numbers[numH] + ' ' + hundreds[0] + ' ' + dozens[(number - numH * 100) / 10 - 1];
    } else if (number > 100 && ost > 0.2 && number % 10 !== 0) {
        return numbers[numH] + ' ' + hundreds[0] + ' ' + dozens[Math.floor((number - numH * 100) / 10 - 1)] + ' ' + numbers[number % (Math.floor(number / 10) * 10)];
    }
}
