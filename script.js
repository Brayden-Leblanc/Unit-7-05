// Turns userInput into a variable
document.getElementById('button').addEventListener('click', age)
let userInput = 0
let day = 0

function age () {
// Get user input from box
  userInput = document.getElementById('input').value
  day = document.getElementById('input2').value

  // Determines what to say based on the day, and the age entered
  if ((userInput >= 18) && (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday')) {
    document.getElementById('answer').innerHTML = 'Time for work!'
  } else if ((userInput <= 18) && (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday')) {
  document.getElementById('answer').innerHTML = 'Time to go to school!'
  } else {
    document.getElementById('answer').innerHTML = 'Its the weekend! Time to relax!'
  }
}