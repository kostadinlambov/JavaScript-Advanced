function notify(message) {
    let divNotification = document.getElementById('notification');
    divNotification.textContent = message;
    divNotification.style.display = 'block';

    setTimeout(tick, 2000);
    function tick() {
        divNotification.style.display = 'none';
    }
}