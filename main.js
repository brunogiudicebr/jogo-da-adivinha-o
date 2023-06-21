const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const rNumber = Math.round(Math.random() * 10) 
let xAttemps = 1
function Click(event) {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    console.log(inputNumber.value)
    
    if(Number(inputNumber.value) == rNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        
        document.querySelector(".screen2 h1").innerText = ("acertou em " + xAttemps + " tentativas")
    }   
    inputNumber.value= ""
    xAttemps++
}   
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
btnTry.addEventListener('click',Click)
btnReset.addEventListener('click', function() {
    screen1.classList.remove("hide")
        screen2.classList.add("hide")
        xAttemps = 1
})