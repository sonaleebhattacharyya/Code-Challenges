// Write your solution below:
let str = 'slsmmsllsmsmlmsls'
function shirtSorter(str) {
    str = str.split("")
    str = str.sort()
    str = str.reverse()
    str = str.join("")
    return str
    console.log(str)
}
console.log(shirtSorter('slsmmsllsmsmlmsls'))