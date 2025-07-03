function getIP() {
    fetch('/.netlify/functions/get-ip')
    .then(response => response.json())
    .then(data => {
        const ipElement = document.getElementById('ip');
        if (ipElement) {
            ipElement.textContent = data.ip;
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    getIP();
});