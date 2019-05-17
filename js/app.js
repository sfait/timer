function isValidNumber(number) {
    if (number != null && !isNaN(number)) {
        return number;
    }
}

function convertTime(number) {
    let hours = Math.floor(number / 3600);
    let minutes = Math.floor((number - (hours * 3600)) / 60);
    let seconds = number - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":"+ seconds;
}

function showTime(number) {
    const timer = document.querySelector(".timer");

    const interval = setInterval(function() {
        if (convertTime(number) >= "00:00:00") {
            timer.textContent = convertTime(number--);
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

function showError() {
    const error = document.querySelector(".error");
    error.textContent = "Wprowadź cyfry";
}

const init = () => {
    const fragment = window.location.hash.slice(1);
    const maybeNumber = Number(fragment);
    if (isValidNumber(maybeNumber)) {
        showTime(maybeNumber);
    } else {
        showError();
    }
};

document.addEventListener("DOMContentLoaded", init);
