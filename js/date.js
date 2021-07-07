export function setDate(d){
    for (let i = 0; i < 5; i++) {
        let months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        let weekDays = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'
        ];
        let day = weekDays[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];

        return `${day} ${date} ${month}`
    }
    console.log(months);
}