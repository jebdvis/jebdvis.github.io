function tellFortune(children,partner,geo, job){
    return "You will be a " + String(job) + " in " + String(geo) + ", and married to " + String(partner) + " with " + String(children) + " kids.";
}

function calculateDogAge(puppyAge){
    return "Your doggie is "+ String(puppyAge * 7) +" years old in dog years!";
}



document.getElementById("fortune1").innerHTML = tellFortune(1222, "Bobert", "atlantic ocean", "farmer");
document.getElementById("fortune2").innerHTML = tellFortune(1, "Sock", "Portland", "Tattoo Artist");
document.getElementById("fortune3").innerHTML = tellFortune(24, "Exit Sign", "Door", "Exit Sign");

document.getElementById("dog1").innerHTML = calculateDogAge(3);
document.getElementById("dog2").innerHTML = calculateDogAge(27);
document.getElementById("dog3").innerHTML = calculateDogAge(1);