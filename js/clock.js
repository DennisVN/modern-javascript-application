export const clock = setInterval(() => { 
    const time = new Date();
    const hour = time.getHours();
    const hoursin24HrFormat = hour > 13 ? hour: hour; 
    const minutes = time.getMinutes();
    const amPm = hour >=12 ? "PM" : "AM";

    timeEl.innerHTML = hoursin24HrFormat + ':' + minutes + '' + `<span id="am-pm">${amPm}</span>` 
}, 1000)