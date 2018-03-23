console.log('Loaded!');

var message = document.getElementById("message");



var img = document.getElementById('madi');
var marginLeft = 0;
var moveRight =  function () {
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
};


img.onclick = function () {
    message.innerHTML = 'Executed Successfully';
    var interval = setInterval(moveRight,100);
    
};