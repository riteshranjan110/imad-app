

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
               span.innerHTML = counter.toString();
           }
       }
   };
   
   //send the request
   request.open('GET','http://riteshk981.imad.hasura-app.io/counter',true);
   request.send(null);
};


var inputName = document.getElementById('input-name');
var name = inputName.value;
var submit = document.getElementById('submit');
submit.onclick = function () {
     //create a xmlhttp object
   var request = new XMLHttpRequest();
   //handle the request
   request.onreadystatechange = function () {
       if(request.readyState === XMLHttpRequest.DONE){
           if(request.status === 200){
              var names = request.responseText;
              //converting string into array 
              names = JSON.parse(names);
            var list='';
            for(var i=0;i<names.length;i++){
                list += '<li>' + names[i] + '</li>';
            }
            
            var ul = document.getElementById('name-list');
            ul.innerHTML = list;
            }
        }
   };
   
   //send the request
   request.open('GET','http://riteshk981.imad.hasura-app.io/submit-name?name='+name ,true);
   request.send(null);
    
    
    

};