
function alertCity(element) {
    alert("Loading weather report...");
}


var cookiesBox = document.querySelector(".cookieBox")
function accept() {
    cookiesBox.remove();
}


function changeTemp(element) {
    var allDegreeSpans = document.querySelectorAll(".temp");

    for (var i = 0; i < allDegreeSpans.length; i++) {
        var currentNum = Number(allDegreeSpans[i].innerText);
        var newValue;

        if (element.value === "F") {
            newValue = (currentNum * 9 / 5) + 32;
        }
        else {
            newValue = (currentNum - 32) * 5 / 9;
        }
        allDegreeSpans[i].innerText = Math.round(newValue);
    }
}

