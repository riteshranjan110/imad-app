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

var message = document.getElementById("message");
message.onClick = function () {
    changeText();
};

function changeText () {
    document.getElementById("message").innerHTML = "you clicked me";
}