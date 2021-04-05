let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(cron);
}

function reseta() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.body.style.background = 'white';
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    // Regras para prova
    if(minute == 0 && second == 30) {
        document.body.style.background = '#00ff00';
    }
    if(minute == 1 && second == 30) {
        document.body.style.background = '#ffff00';
    }
    if(minute == 2 && second == 40) {
        document.body.style.background = '#ff0000';
    }
    if(minute == 2 && second == 50) {
        document.body.style.background = 'white';
        reseta()
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}