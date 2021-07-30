export const minToHours = (minutes) => {
    const minutesNumb = parseInt(minutes.split(" ")[0]) 
    let hour = `${Math.floor(minutesNumb/60)}h`;
    if(hour === '0h') {
        hour = ''
    }
    let min = `${minutesNumb % 60}min`;
    if (min < 10 && min > 0) {
        min = `0${min}min`;
    } else if (min === 0) {
        min = '';
    }
    return `${hour}${min}`
}

