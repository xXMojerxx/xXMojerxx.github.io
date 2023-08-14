function randomNumber(){
  var getNumber = document.getElementById("numberGenerator");
  var randomNumber = Math.random()*100;

  getNumber.innerHTML = randomNumber
}
