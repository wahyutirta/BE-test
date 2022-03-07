function checkAnagram(a, b) {

    // Not of same length, can't be Anagram
    if (a.length !== b.length) {
        return false;
    }

    // Inbuilt functions to rearrange the string
    var str1 = a.split('').sort().join('');
    var str2 = b.split('').sort().join('');

    if (str1 !== str2) return false

    return true

}

const str = "race car care"

const arr = str.split(" ")

const anagramDic = {}

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (checkAnagram(arr[i], arr[j])) {
            anagramDic[arr[i]] = arr[j]
            anagramDic[arr[j]] = arr[i]
        }
    }
}
console.log(anagramDic)