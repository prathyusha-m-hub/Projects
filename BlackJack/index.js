let firstCard=10
let secondCard=12

let sum = firstCard+secondCard
console.log(sum)

if (sum < 21){
    console.log("Do you want a new card??")
}
else if(sum === 21){
    console.log("Yoo!! You got it!!")

}
else {
    console.log("Sorry You are out of the Game ")
}