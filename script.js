var timer = 60;
var score = 0;
var hitrn = 0;
function incscore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makebubble() {
    var clutter = " ";
    for (var i = 1; i <= 109; i++) {
        rn = Math.floor(Math.random() * 10);

        clutter += `<div id="bubble">${rn}</div>`; //pichla div aisa hi hai or usme upar se ek or div ajayega to ham kah skte ki clutter me 70 baar div add hoga

    }

    document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer() {
    var timerfun = setInterval(function () {
        if (timer > 0) {
            timer--;

            document.querySelector("#timervalue").textContent = timer;
        }
        else {
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = " <h1>game over try again buddy huhuhuhuhuhuhuh</h1> ";
        }
    }, 1000);
}
function main() {
    document.querySelector("#pbtm")
        .addEventListener("click", function (details) {
            var clickednum = Number(details.target.textContent);
            if (clickednum == hitrn) {
                incscore();
            }
            makebubble();
            getnewhit();

        })
}

runtimer();
makebubble();
getnewhit();
main();


