function toggleTextLeft() {
  var textLeftOne = document.getElementById("hiddenLeftOne");
  var textLeftTwo = document.getElementById("hiddenLeftTwo");
  //excuse the repeated code, forogr how to make it better :P
  if ((textLeftOne.style.display === "none") && (textLeftTwo.style.display === "none")) {
    textLeftOne.style.display = "block";
    textLeftTwo.style.display = "block";
  } else {
   textLeftOne.style.display = "none";
   textLeftTwo.style.display = "none";
  }
}
    
function toggleTextRight() {
  var textRightOne = document.getElementById("hiddenRightOne");
  var textRightTwo = document.getElementById("hiddenRightTwo");
  if ((textRightOne.style.display === "none") && (textRightTwo.style.display === "none")) {
    textRightOne.style.display = "block";
    textRightTwo.style.display = "block";
  } else {
    textRightOne.style.display = "none";
    textRightTwo.style.display = "none";
  }
}
