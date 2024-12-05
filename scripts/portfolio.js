let proj;

fetch('project.json')
.then(response => {
    return response.json();
}).then(projects => {
    console.log(projects);
    proj = projects
    parseData(projects);
}).catch(err => {
    console.log(`error ${err}`);
})


function parseData(data){
    for(let i = 0; i < data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href ="/projects/${data.projects[i].subdomain}.html">
    <div class = "row project" id = "${data.projects[i].subdomain}">
        <div class = "projimg"><img src = "images/${data.projects[i].mainimg}"></div>
        <div class = "name"><h2>${data.projects[i].name}</h2><p class = "subtitle">${data.projects[i].subtitle}</p>
        <p class = "abstract">${data.projects[i].abstract}</p></div></div></a>`;
    }
}

function sortProjects(buttonVal){
    if (buttonVal == "clear"){
        for(let i = 0; i < proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(buttonVal != undefined){

        for (let i = 0; i < proj.projects.length; i++){
            if (proj.projects[i].tags.includes(buttonVal) == true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    }else{
        console.log("error, button not defined");
    }
}


for (b of document.querySelectorAll("#buttons button")){
    b.addEventListener("click", e=>{
        sortProjects(e.target.value);
    })
}