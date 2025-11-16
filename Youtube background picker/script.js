document.querySelector('#purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.querySelector('#blue').onclick = partyBlue
document.querySelector('#red').onclick = partyRed


function partyPurple(){
    document.querySelector('body').style.backgroundColor = 'purple'
    document.querySelector('body').style.color = 'white'
}

function partyGreen () {
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('body').style.color = 'white'
}

function partyBlue (){
    document.querySelector('body').style.backgroundColor = 'blue'
    document.querySelector('body').style.color = 'white'
}

function partyRed (){
    document.querySelector('body').style.backgroundColor = '#d4c0ff'
    document.querySelector('body').style.color = 'white'
}