var button = document.getElementByID('counter');
var counter = 0;
button.onclick = function () {
  
  //Make request to counter end point
  
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};