var button = document.getElementByID('counter');
var counter = 0;
button.onclick = function () {
  
  //Create request to counter end point
  var request = new XMLHTTPRequest();
  
  // Capture response and store in variable
  request.onreadystatechange = function() {
      if (request.readyState === XMLHTTPRequest.DONE) {
          // Take action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
          }
      }
    //if NOT ignore
      
  };
 
// Make the request
request.open('GET','http://nadodiganesh.imad.hasura-app.io/counter',true);
request.send(null);
  
};
