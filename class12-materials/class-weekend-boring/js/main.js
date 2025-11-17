const check = document.querySelector('#check')
const displayTheOutput = document.querySelector('#placeToSee')
check.addEventListener('click', ()=> {
  const day = document.querySelector('#day').value.toLowerCase()
  if(day === 'tuesday' || day === 'thursday'){
    displayTheOutput.innerText = "class day"
  }else if(day === 'saturday' || day === 'sunday'){
    displayTheOutput.innerText = 'BORING DAY'
  }else{
    displayTheOutput.innerText = "WEEKEND"
  }
})
