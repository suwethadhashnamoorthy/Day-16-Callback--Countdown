var countdown = document.createElement("div");
countdown.className = "js";

setTimeout(() => {
    countdown.innerText = "Let's start";
}, 1000);
setTimeout(() => {
    countdown.innerText = "10";
}, 2000);
setTimeout(() => {
    countdown.innerText = "9";
}, 3000);
setTimeout(() => {
    countdown.innerText = "8";
}, 4000);
setTimeout(() => {
    countdown.innerText = "7";
}, 5000);
setTimeout(() => {
    countdown.innerText = "6";
}, 6000);
setTimeout(() => {
    countdown.innerText = "5";
}, 7000);
setTimeout(() => {
    countdown.innerText = "4";
}, 8000);
setTimeout(() => {
    countdown.innerText = "3";
}, 9000);
setTimeout(() => {
    countdown.innerText = "2";
}, 10000);
setTimeout(() => {
    countdown.innerText = "1";
}, 11000);
setTimeout(() => {
    countdown.innerText = "Happy Independence Day";
    countdown.style.color = "#ff8c1a";
}, 12000);
document.body.appendChild(countdown);