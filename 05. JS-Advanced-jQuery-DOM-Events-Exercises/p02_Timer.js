function timer() {
    let hoursValue = $('#hours').text();
    let minutesValue = $('#minutes').text();
    let secondsValue = $('#seconds').text();
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let setTimer;
    $(startBtn).on('click', startTimer);
    $(stopBtn).on('click', stopTimer);

    function startTimer() {
        clearInterval(setTimer);
        $(startBtn).prop('disabled', true);
        $(stopBtn).prop('disabled', false);

        setTimer = setInterval(incrementTime, 1000);
    }

    function stopTimer() {
        $(startBtn).prop('disabled', false);
        $(stopBtn).prop('disabled', true);

        clearInterval(setTimer);
    }

    function incrementTime() {
        secondsValue++;
        if (secondsValue > 59) {
            secondsValue = 0;
            minutesValue++;
        }

        if (minutesValue > 59) {
            minutesValue = 0;
            hoursValue++;
        }

        let newHoursValue = ('0' + hoursValue).slice(-2);
        let newMinutesValue = ('0' + minutesValue).slice(-2);
        let newSecondsValueValue = ('0' + secondsValue).slice(-2);

        $('#hours').text(newHoursValue);
        $('#minutes').text(newMinutesValue);
        $('#seconds').text(newSecondsValueValue);
    }
}