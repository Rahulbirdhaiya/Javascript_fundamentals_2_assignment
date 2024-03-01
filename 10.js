function wordCounter(sentence) {
    const words = sentence.toLowerCase().split(' ');

    const wordCount = new Map();

    for (const word of words) {
        if (wordCount.has(word)) {
            const count = wordCount.get(word);
            wordCount.set(word, count +1)
        } else {
            wordCount.set(word, 1)
        }
    }
    return wordCount;
}

const sentence = 'please please submit your assignment on time, your assignments are important';
const result = wordCounter(sentence);
console.log(result);