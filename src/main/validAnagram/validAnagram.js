var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let counter = {}

    for (let letter of s) {
        if (counter[letter] === undefined) {
            counter[letter] = 1
        } else {
            counter[letter]++
        }
    }
    for (let letter of t) {
        if (counter[letter] === undefined) {
            return false
        }
        if (counter[letter] < 1)
            return false
        counter[letter]--
    }
    return true
};