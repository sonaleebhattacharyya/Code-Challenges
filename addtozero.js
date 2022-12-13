// classes and objects 
// everything in a class is referred to by "this"
// start with the first element, check if the remaining elements added to it equal 0, then go to the second element, etc.
// [1, 4, 11, 2, 37, -4]
let addtozero=(arr) => {
    let found = false 
    for(let i=0; i< arr.length-1; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i]+arr[j]===0) {
                found = true
                break
            } 
        } 
        if(found) {
            console.log(found)
            break
        } 
    } 
    if (!found) {
        console.log(found)
    }
}
addtozero([1, 4, 11, 2, 37, 5]);
// function addtozero(arr) {
//
//}
// callback functions (using the arrow function as a parameter in another function)
// closure (extra feature after callback function)