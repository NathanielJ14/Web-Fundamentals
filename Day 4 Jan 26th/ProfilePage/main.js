var todBox = document.querySelector(".firstReq");
var philBox = document.querySelector(".lastReq");
var connectionNumValue = 418;
var yourConnectionNum = document.querySelector("#yourConReq")
var connectionReqValue = 2;
var connectionRequest = document.querySelector("#connectionNum");

function acceptTod() {
    todBox.remove();
    connectionNumValue++;
    connectionReqValue--;
    yourConnectionNum.innerHTML = connectionNumValue;
    connectionRequest.innerHTML = connectionReqValue;
}

function acceptPhil() {
    philBox.remove();
    connectionNumValue++;
    connectionReqValue--;
    yourConnectionNum.innerHTML = connectionNumValue;
    connectionRequest.innerHTML = connectionReqValue;
}


function denyTod() {
    todBox.remove();
    connectionReqValue--;
    connectionRequest.innerHTML = connectionReqValue;
}

function denyPhil() {
    philBox.remove();
    connectionReqValue--;
    connectionRequest.innerHTML = connectionReqValue;
}


var originalName = document.querySelector(".profileName");

function changeName() {
    var question = prompt("What is your name?");
    originalName.innerHTML = question;
}