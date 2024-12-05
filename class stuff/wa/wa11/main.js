const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg"];

const altText = {
    "pic1.jpg": "a close up of a blue eye",
    "pic2.jpg":"wavy rock formation",
    "pic3.jpg":"flowers with varying purple hues",
    "pic4.jpg":"egyptian hieroglyphics",
    "pic5.jpg":"a moth sitting on a leaf"
};

/* Looping through images */
for(let i = 0; i < images.length; i++){
    var currImg = images[i];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + currImg);
    newImage.setAttribute('alt', altText.currImg);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e =>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


btn.addEventListener("click", e =>{
    if (btn.classList.contains("dark") ){
        btn.setAttribute("class", "light");
        btn.innerHTML = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }else if(btn.classList.contains("light")){
        btn.setAttribute("class", "dark");
        btn.innerHTML = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});

/* Wiring up the Darken/Lighten button */
