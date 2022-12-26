let daysE1 = document.getElementById("days");
let hoursE1=document.getElementById("hours");
let minutesE1=document.getElementById("minutes");
let secondsE1=document.getElementById("seconds");

let newYears="1 Jan 2023";

function countDown()
{
    let newYearsDate=new Date(newYears);
    let curerentDate=new Date();
    let totalSeconds=(newYearsDate-curerentDate)/1000;

    let days=Math.floor(totalSeconds/3600/24);
    let hours=Math.floor(totalSeconds/3600)%24;
    let minutes=Math.floor(totalSeconds/60)%60;
    let seconds=Math.floor(totalSeconds)%60;

    daysE1.innerHTML=times(days);
    hoursE1.innerHTML=times(hours);
    minutesE1.innerHTML=times(minutes);
    secondsE1.innerHTML=times(seconds);
}

function times(time)
{
    return time<10? (`0${time}`): time;
}
countDown();

setInterval(countDown,1000);