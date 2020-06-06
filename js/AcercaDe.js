var contEs = 0;
var contEn = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    moveEsBar();
    moveEnBar();
});

function moveEsBar() {
    if (contEs == 0) {
        contEs = 1;
    var elem = document.getElementById("bar_es");
    var width = 1;
    var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100)
            {
                clearInterval(id);
                contEs = 0;
            }
            else
            {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

function moveEnBar() {
    if (contEn == 0) {
        contEn = 1;
    var elem = document.getElementById("bar_en");
    var width = 1;
    var id = setInterval(frame, 10);
        function frame() {
            if (width >= 80)
            {
                clearInterval(id);
                contEn = 0;
            }
            else
            {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}