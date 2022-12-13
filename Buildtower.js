// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.
// The number passed in tells you how many floors the tower should have.
// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.
//Each block is represented by a *.
// ith row will have 2n-1 slots with 2i-1 stars where n is the total number of rows
function Buildtower(number) {
    space = []
    star = []
    tower = []
    for (i=1;i<=number;i++) {
    space = " ".repeat(number-i) 
    star = "*".repeat(2*i-1)
    tower.push(`${space}${star}${space}`)}
    return(tower)}
    console.log(Buildtower(9))