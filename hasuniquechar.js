word = 'hello'
function wordsplit(word){
for (i = 0; i < wordsplit.length; i++) {
    for (j = 0; j < wordsplit.length; j++) {
        if( i != j && wordsplit[i] === wordsplit[j]) {
            console.log('false')
        } else {
            console.log('true')
        }
    }
}
}
wordsplit(word)