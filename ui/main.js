

var button = document.getElementById('button1');

button.onclick = function () {
   
   //create a xmlhttp object
   var request = new XMLHttpRequest();
   //handle the request
   request.onreadystatechange = function () {
       if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
           var counter = request.responseText;
           //render the html element
           var span = document.getElementById('count');
           span.innerHTML = counter.toString();
       }
   };
   
   //send the request
   request.open('GET','https://riteshk981.imad.hasura-app.io/counter',true);
   request.send(null);
};

