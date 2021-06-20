

const vowels = ['a', 'a', 'e', 'i', 'u', 'u', 'e', 'i', 'i', 'i']
function vowelCounter(array) {
    const obj = {}
    for (let i = 0; i < array.length; i++) {
        let key = array[i]
        if (key in obj) {
            obj[key]++
        } else {
            obj[key] = 1
        }
    }
    return obj
}
console.log(vowelCounter(vowels))