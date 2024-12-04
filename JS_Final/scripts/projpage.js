let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/") + 1, window.location.href.lastIndexOf("."));
let projectdata

let imageArr = [];


fetch('../project.json')
.then(response => {
    return response.json();
}).then(projects => {
    proj = projects
    findProjectInJSON(projects);
    // parseData(projects);
}).catch(err => {
    console.log(`error ${err}`);
})




function findProjectInJSON(projs){
    for(let i = 0; i < projs.projects.length; i++){
        if(projs.projects[i].subdomain == subdomain){
            buildPage(projs.projects[i]);
            break;
        }else{
            continue;
        }
    }
}


function buildPage(project){
    imageArr = project.images
    document.getElementsByClassName('title-bar-text').innerHTML = `${project.name}`
    document.getElementById('slideshow').innerHTML += `
    <h2>${project.name}</h2>
    <h3>${project.subtitle}</h3>
    <div class="full-img">
    <img class="displayed-img" src="../images/${project.mainimg}" alt="">
    </div>
    <div class="thumb-bar"></div>`

    document.getElementById("project").innerHTML += `
    <p id = "description">${project.description}</p>`
    
for(let i = 0; i < imageArr.length; i++){
    var currImg = imageArr[i];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "../images/" + currImg);
    newImage.setAttribute('alt', project.alts[i]);
    document.querySelector('.thumb-bar').appendChild(newImage);
    newImage.addEventListener('click', e =>{
        document.querySelector('.displayed-img').src = e.target.src;
        document.querySelector(".displayed-img").alt = e.target.alt;
    });
}
}

