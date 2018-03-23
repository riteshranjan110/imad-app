console.log('Loaded!');

var message = document.getElementById("message");
var button = document.getElementById('button1');

button.onClick = function (){
    button.innerHTML = 'Executed Successfully';
};

var img = document.getElementById('madi');
var marginLeft = 0;
var moveRight =  function () {
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
};


img.onclick = function () {
    var interval = setInterval(moveRight,100);
};