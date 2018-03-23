console.log('Loaded!');

var message = document.getElementById("message");
var button = document.getElementById('button1');

button.onClick = function (){
    button.innerHTML = 'Executed Successfully';
};

