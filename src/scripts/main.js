AOS.init();

const eventDate = new Date("Dec 12, 2025 19:00:00");
const timeStampEvent = eventDate.getTime();

const countdown = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const timeLeft = timeStampEvent - timeStampNow;

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = "O evento já aconteceu!";
    }
}, 1000)