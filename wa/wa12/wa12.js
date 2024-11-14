let myData = {}

function fetchData(){
    let comicNumber = Math.floor(Math.random()*3000) + 1;
    fetch(`https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`)
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res)
        }
    }).then(res =>{
        myData = res;
        console.log(myData)
        
        document.querySelector("#title").innerHTML = myData.title
        document.querySelector("#comimage").src = myData.img
        document.querySelector("#comimage").setAttribute('alt', myData.alt)
        document.querySelector("#date").innerHTML = myData.month + '/' + myData.day + "/" + myData.year
    })
}

document.getElementById("generate").addEventListener("click", e =>{fetchData()});