const $ = document;

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let clear = null;


function start() {
    if (clear !== null) {
        clearInterval(clear);
    }
    clear = setInterval(() => {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            console.log(seconds);
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                console.log(minutes)
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                    console.log(hours)
                }
            }
        }
        $.getElementById("miligiay").innerHTML = milliseconds;
        $.getElementById("giay").innerHTML = seconds;
        $.getElementById("phut").innerHTML = minutes;
        $.getElementById("gio").innerHTML = hours;
    }, 10);
    $.getElementById("stop").style.display = "inline";
}
function stop() {
    let lastest = [];
    clearInterval(clear);
    let html = ""
    lastest.push([milliseconds, seconds, minutes, hours]);
    const kq = $.createElement("p");
    let text = $.createTextNode(`${hours} : ${minutes}: ${seconds} : ${milliseconds}`)
    kq.appendChild(text);
    $.getElementById("lastest").appendChild(kq);
    $.getElementById("stop").style.display = "none";
}

function reset() {
    clearInterval(clear);
    [milliseconds, seconds, minutes, hours] = [00, 00, 00, 00];
    $.getElementById("gio").innerHTML = "00";
    $.getElementById("phut").innerHTML = "00";
    $.getElementById("giay").innerHTML = "00";
    $.getElementById("miligiay").innerHTML = "00";
}

function showHis() {
    $.getElementById("lastest").style.display = "flex";

}

