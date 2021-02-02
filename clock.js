'use strict'

const actualTime =() => {
    const time = document.querySelector('.time');
    const nowDate = new Date();
    const nowLocalTime = nowDate.toLocaleTimeString('hu');
    time.textContent = nowLocalTime;
};

actualTime();
setInterval(actualTime,1000);