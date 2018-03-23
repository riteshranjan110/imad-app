console.log('Loaded!');

var message = document.getElementById("message");
message.innerHTML = "ritesh";

var marginLeft;
var moveRight = function () {
    marginLeft +=10;
    img.style.marginLeft = marginLeft + 'px';
};

var img = document.getElementById('madi');
img.onclick = function () {
    var interval = setInterval(moveRight,100);
};