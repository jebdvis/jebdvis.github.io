function tellFortune(children,partner,geo, job){
    return "You will be a " + String(job) + " in " + String(geo) + ", and married to " + String(partner) + " with " + String(children) + " kids.";
}

function calculateDogAge(puppyAge){
    return "Your doggie is "+ String(puppyAge * 7) +" years old in dog years!";
}

function flipNum(number){
    var numString = String(number);
    numString = numString.split('').reverse('').join('');
    return Number(numString);
}

function flipString(thestring){
    var flipString = thestring;
    flipString = flipString.split("").sort().join("");
    return flipString;
}

function makeUpper(string){
    var newStr = string
    newStr = newStr.split(" ");
    for(let i = 0; i < newStr.length; i++){
        var strArr = newStr[i].split("")
        strArr[0] = strArr[0].toUpperCase();
        newStr[i] = strArr.join("")
    }
    return newStr.join(" ");
}



document.getElementById("fortune1").innerHTML = tellFortune(1222, "Bobert", "atlantic ocean", "farmer");
document.getElementById("fortune2").innerHTML = tellFortune(1, "Sock", "Portland", "Tattoo Artist");
document.getElementById("fortune3").innerHTML = tellFortune(24, "Exit Sign", "Door", "Exit Sign");

document.getElementById("dog1").innerHTML = calculateDogAge(3);
document.getElementById("dog2").innerHTML = calculateDogAge(27);
document.getElementById("dog3").innerHTML = calculateDogAge(1);

document.getElementById("revnum1").innerHTML = flipNum(123144)
document.getElementById("revnum2").innerHTML = flipNum(9992838)

document.getElementById("revStr1").innerHTML = flipString("wasssuppppp")
document.getElementById("revStr2").innerHTML = flipString("heloooooo")

document.getElementById("makeupper").innerHTML = makeUpper('the quick brown fox')