function setClock(){
    var ampm;
    var now = new Date();
    var hours = (now.getHours());
    var mins = (now.getMinutes());
    var seconds = (now.getSeconds());

    if (hours < 12){
        ampm = "AM";
    }else{
        ampm = "PM";
    }

    const hour = hours % 12;

    if (hour === 0){
        hour = 12
    }


    if (hours<10){
        hour = "0" + String(hour);
    }
    if (mins<10){
        mins = "0" + String(mins);
    }
    if (seconds<10){
        seconds = "0" + String(seconds);
    }

    document.getElementById("time_button").innerHTML =  `${hour}:${mins}:${seconds} ${ampm}`;
    setTimeout(setClock, 1000);
}

window.addEventListener("load", setClock)