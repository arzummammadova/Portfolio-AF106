let totalseconds =0;

function customclock(clockformat) {
    const hours = Math.floor(clockformat / 3600) % 24;
    const minutes = Math.floor((clockformat % 3600) / 60);
    const seconds = clockformat % 60;

    let period = "AM";
    let displayHours = hours;

    if (displayHours >= 12) {
        period = "PM";
        if (displayHours > 12) {
            displayHours -= 12;
        }
    }

    const formathours = displayHours < 10 ? '0' + displayHours : displayHours;
    const formatminutes = minutes < 10 ? '0' + minutes : minutes;
    const formatseconds = seconds < 10 ? '0' + seconds : seconds;

    return `${formathours}:${formatminutes}:${formatseconds} ${period}`;
}

function startClock() {
    setInterval(() => {
        totalseconds += 1;
    
        document.querySelector(".time").textContent = customclock(totalseconds);
        if(totalseconds>=24 * 60 *60){
            totalseconds=0;
        }
    }, 1000);
}

startClock();
