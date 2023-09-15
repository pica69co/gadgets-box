//function for converting time to 12 hour format
export const convertTimeTo12HourFormat = (time) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour "0" should be "12"
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    let strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return strTime;
    }
//function for converting time to 24 hour format
export const convertTimeTo24HourFormat = (time) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 24;
    hours = hours ? hours : 24; // the hour "0" should be "12"
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
    }
// function for converting time to UTC format
export const convertTimeToUTCFormat = (time, utc) => {
    let hours = (time + utc);
    let strTime = hours
    return strTime;
    }

//   const timeConverter = (time, offset) => {
//   const d = new Date(time);
//   const utc = d.getTime() + d.getTimezoneOffset() * 60000;
//   const nd = new Date(utc + 3600000 * offset);
//   return nd.toLocaleString();
// };
//   console.log(timeConverter(Date.now(), -5));


