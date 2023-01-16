module.exports = function toReadable (number) {
    const numbers = {
        tillTwenty: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens: ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    }
    if (number === 0) {
         return 'zero';
    }   else if (number < 20) {
        return numbers.tillTwenty[number % 20]
    } else if (number < 100) {
        return `${numbers.tens[number.toString()[0]]} ${numbers.tillTwenty[number % 10]}`.trim();
    } else if ((number % 100) < 20) { 
        // 118 % 100 = 18<20; 105 % 100 = 5<20
        return `${numbers.tillTwenty[number.toString()[0]]} hundred ${numbers.tillTwenty[number % 100]}`.trim();
    } else if (number < 1000) {
        return `${numbers.tillTwenty[number.toString()[0]]} hundred ${numbers.tens[number.toString()[1]]} ${numbers.tillTwenty[number % 10]}`.trim();
    } 

}
