function tax() {
  var income = document.getElementById('income').value;
  var wealth = document.getElementById('wealth').value;
  var tax = 0.35*(income) + 0.25*(wealth);
  document.getElementById('tax').innerHTML = tax;
}

income.addEventListener('input', tax);
wealth.addEventListener('input', tax);

function validateField(controlID) {
  //control.style.color="white";
  var control = document.getElementById('controlID');
  if (control.value == 'moro'){
    control.style.background='red';
  }
  else {
    control.style.background="green";
  }
}
