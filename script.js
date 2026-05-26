let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${h}:${m}:${s}`;
}

document.getElementById("start").addEventListener("click", () => {

    if (!running) {

        running = true;

        timer = setInterval(() => {

            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();

        }, 1000);
    }
});

document.getElementById("pause").addEventListener("click", () => {

    clearInterval(timer);
    running = false;
});

document.getElementById("reset").addEventListener("click", () => {

    clearInterval(timer);

    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;

    laps.innerHTML = "";

    updateDisplay();
});

document.getElementById("lap").addEventListener("click", () => {

    if (running) {

        const lapItem = document.createElement("li");

        lapItem.textContent =
            `Lap ${laps.children.length + 1}: ${display.textContent}`;

        laps.appendChild(lapItem);
    }
});

updateDisplay();