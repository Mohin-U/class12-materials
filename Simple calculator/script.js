let total = 0

document.querySelector('#zero').addEventListener('click', makeZero)
document.querySelector('#plusThree').addEventListener('click', makeThree)
document.querySelector('#plusNine').addEventListener('click', makeNine)
document.querySelector('#negativeTwo').addEventListener('click', makeNegativeTwo)

function makeZero() {
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}

function makeThree() {
    total = total + 3
    document.querySelector('#placeToPutResult').innerText = total
}

function makeNine() {
    total = total + 9
    document.querySelector('#placeToPutResult').innerText = total
}

function makeNegativeTwo() {
    total = total - 2
    document.querySelector('#placeToPutResult').innerText = total
}