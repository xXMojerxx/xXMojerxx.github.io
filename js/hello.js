function randomNumberGenerator() {
  var getNumber = document.getElementById("numberGenerator");
  var randomNumber = Math.random()*100;

  getNumber.appendChild(randomNumber);
}
