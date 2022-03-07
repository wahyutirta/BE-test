function check(freq, k){
    const MAX_CHAR = 10
    for (let i = 0; i < MAX_CHAR; i++){
        if (freq[i] != 0 && freq[i] != k) return false
    }
    return true
}

function perfectSubstring(s,k) {
    const MAX_CHAR = 10;
    let res = 0
    for(let i = 0; i < s.length; i++){
        let freq = new Array(MAX_CHAR).fill(0)
        for(let j = i; j < s.length; j++) {
            let idx = s[j].charCodeAt(0) - '0'.charCodeAt(0);
            freq[idx] += 1
            if(freq[idx] > k) break;
            else if (freq[idx] == k && check(freq,k)) res +=1
        }
    }
    return res
}

let s = "1102021222"
let k = 2
console.log(perfectSubstring(s,k))