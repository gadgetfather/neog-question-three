var input = document.querySelector(".input")
var btnOne = document.querySelector("#button1")
var btnTwo = document.querySelector("#button2")
var btnThree = document.querySelector("#button3")
var outputEl = document.querySelector("#output")

btnOne.addEventListener('click',function clickHandler1(){
    var inputData = input.value
    outputEl.innerHTML = `<h1>${inputData}</h1>`

})


btnTwo.addEventListener('click',function clickHandler1(){
    var inputData = input.value
    outputEl.innerHTML = `<h2>${inputData}</h2>`

})



btnThree.addEventListener('click',function clickHandler1(){
    var inputData = input.value
    outputEl.innerHTML = `<h3>${inputData}</h3>`
})