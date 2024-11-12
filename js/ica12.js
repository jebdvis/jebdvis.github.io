let myData = {};


function getFact(){
    fetch("https://catfact.ninja/fact")
    .then(res => {
        if(res.ok){
            return res.json();
        }else{
            console.log(res)
        }
    }).then(res =>{
        myData = res;
        console.log(myData)
        document.querySelector(".text").innerHTML = myData.fact
    }).catch(error =>{
        console.log(error)
    })
}
getFact();
document.querySelector(".generate").addEventListener("click", e => {getFact()});