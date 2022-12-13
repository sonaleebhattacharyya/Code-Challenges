// Write your code below
function checkPalin(word) {
    let reverseWord = word.split("").reverse().join(""); 
    if(word === reverseWord) {
        console.log("This is a palindrome") 
    } else {
        console.log("This is not a palindrome")
    }
}
checkPalin("tacocat")