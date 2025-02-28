/**
 * 344. Reverse String
 */
const reverseString = function(s) {
    let start = 0
    let end = s.length - 1

    while (start < end) {
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp
        start++
        end--
    }
}

console.log(reverseString(["h","e","l","l","o"])) // [ 'o', 'l', 'l', 'e', 'h' ]
