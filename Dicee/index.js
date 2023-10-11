var randomnumber1 = Math.floor(Math.random()*6)+1
document.querySelector(".img1").src = `images/dice${randomnumber1}.png`;
console.log(randomnumber1)

var randomnumber2 = Math.floor(Math.random()*6)+1
document.querySelector(".img2").src = `images/dice${randomnumber2}.png`;
console.log(randomnumber2)

if (randomnumber1>randomnumber2){
    document.querySelector('h1').textContent = ' 🚩 Player 1 Wins'
} else if (randomnumber2 > randomnumber1) {
     document.querySelector('h1').textContent = ' 🚩 Player 2 Wins'
} else {
    document.querySelector('h1').textContent = "Its a Draw"
}   

