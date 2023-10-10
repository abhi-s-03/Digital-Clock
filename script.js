const dateElement = document.querySelector("#date");
const timeElement = document.querySelector("#time");
updateDate();
function updateDate() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();

    dateElement.innerHTML = `${day}/${month}/${year}`;
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    timeElement.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

    if (hours === 0) {
        updateDate();
    }
}

setInterval(updateTime, 1000);
updateTime(); 
