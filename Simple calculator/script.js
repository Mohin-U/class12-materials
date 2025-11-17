let total = 0

document.querySelector('#zero').addEventListener('click', makeZero)
document.querySelector('#plusThree').addEventListener('click', ()=>{
    total = total + 3
    document.querySelector('#placeToPutResult').innerText = total
})

document.querySelector('#plusNine').addEventListener('click', ()=>{
    total = total + 9
    document.querySelector('#placeToPutResult').innerText = total
})

const negativeTwo = document.querySelector('#negativeTwo')
negativeTwo.addEventListener('click', ()=> {
    total = total - 2
    document.querySelector('#placeToPutResult').innerText = total
})


function makeZero(){
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}