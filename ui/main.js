

var button = document.getElementById('counter');

button.onclick = function () {
   
   //create a xmlhttp object
   var request = new XMLHttpRequest();
   //handle the request
   request.onreadystatechange = function () {
       if(request.readyState === XMLHttpRequest.DONE){
           if(request.status === 200){
               var counter = request.responseText;
               //render the html element
               var span = document.getElementById('count');
               span.innerHTML = 'successs';
           }
       }
   };
   
   //send the request
   request.open('GET','https://riteshk981.imad.hasura-app.io/counter',true);
   request.send(null);
};

