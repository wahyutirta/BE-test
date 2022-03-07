
const wordSet = ["star", "tars", "stay", "tay", "seed", "dees", "eesd", "rast", "date", "ate"]

const sentences = ["ate date stay",
"rast tay star",
"tay stay tars",
"seed dees star",
"ate seed rast"]

function countSentences(wordSet, sentences) {
    let result = Array(sentences.length).fill(1)
    var dictWord = {}
    
    dictWord = wordSet.reduce((dict, word) => {
        let partial = word.split("").sort().join("")
        console.log(partial)
        
        if (!dict[partial]) {
            dict[partial] = []
        }
        dict[partial].push(word)

        return dict

    }, dictWord)

    console.log(dictWord)
    
    result = result.map((v, i) => {
        let temp = sentences[i].split(" ")
        temp.forEach((element) => {
            let partial = element.split("").sort().join("")
            v =  v * dictWord[partial].length
        })
        return v
    })

    return result

}

const result = countSentences(wordSet, sentences)
console.log(result)