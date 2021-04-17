let targetDate = '15 April 2022' // declare the date you want to have countdown
function countdown(){
    const dateTarget = new Date(targetDate);
    const currentDate = new Date();
    const totalSeconds = (dateTarget - currentDate)/1000; //value in seconds  dividing by 1000 so that value can be converted from microseconds
    document.getElementById("days").innerHTML = Math.floor(totalSeconds/3600/24);
    document.getElementById("hours").innerHTML = Math.floor(totalSeconds/3600)%24;
    document.getElementById("minutes").innerHTML = Math.floor(totalSeconds/60)%60;
    document.getElementById("seconds").innerHTML = Math.floor(totalSeconds)%60;
}
setInterval(countdown,1000)