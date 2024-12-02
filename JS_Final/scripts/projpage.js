let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/") + 1, window.location.href.lastIndexOf("."));


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
    console.log(project);
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`
}