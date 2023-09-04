document.addEventListener('DOMContentLoaded', e => {
    const video = document.querySelector('.main-video');

    const constraints = {'video': true, 'audio': true};

    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        alert("error: " + err);
        console.error("error: " + err);
    });
});