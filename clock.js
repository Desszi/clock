'use strict'

const actualTime =() => {
    const time = document.querySelector('.time');
    const nowDate = new Date();
    const nowLocalTime = nowDate.toLocaleDateString('hu');
    time.textContent = nowLocalTime;
};

actualTime();
setInterval(actualTime,1000);