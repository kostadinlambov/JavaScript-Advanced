window.onload = function () {
    stopwatch();
};

function stopwatch() {
    let seconds;
    let interval;
    let startBtn = document.getElementById('startBtn');
    let endBtn = document.getElementById('stopBtn');
    startBtn.addEventListener('click', start);
    endBtn.addEventListener('click', stop);

    function start() {
        seconds = -1;
        incrementTime();
        startBtn.disabled = true;
        endBtn.disabled = false;
        interval = setInterval(incrementTime, 1000)
    }

    function incrementTime() {
        seconds++;
        document.getElementById('time').textContent =
            ('0' + Math.floor(seconds / 60)).slice(-2) + ':' +
            ('0' + seconds % 60).slice(-2);
    }

    function stop() {
        clearInterval(interval);
        startBtn.disabled = false;
        endBtn.disabled = true;
    }
}