console.log('Loaded!');

var message = document.getElementById("message");
message.innerHTML = "ritesh";

var img = document.getElementById('madi');
var marginLeft;
function moveRight () {
    marginLeft +=10;
    img.style.marginLeft = marginLeft + 'px';
}


img.onclick = function () {
    var interval = setInterval(moveRight,100);
};