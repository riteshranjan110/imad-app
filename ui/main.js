console.log('Loaded!');

var img = document.getElementById('madi');
var marginLeft = 0;
var moveRight =  function () {
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
};


img.onclick = function () {
    var interval = setInterval(moveRight,100);
};


var button = document.getElementById("click-me");
button.onClick = function () {
    var message = document.getElenmentById("message");
    message.innerHTML ="success"; 
};

