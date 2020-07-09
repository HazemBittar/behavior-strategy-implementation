/**
 * Returns a new number with squared digits
 * Time complexity: O(n), space complexity: O(n)
 * @param {Number} num an integer
 * @returns {Number} an integer with squared digits
 */
const squareDigits = num => {
    // Get an array of digits
    const digits = num.toString().split('')

    // Square each digit. Because JavaScript has 
    // automatic type coercion, it will quietly convert each string
    // into a number to perform multiplication
    const squaredDigits = digits.map(n => n * n)

    // Join each digit together, then use the + operator 
    // to convert the string into a number
    const squaredNumber = squaredDigits.join('')

    return +squaredNumber
}