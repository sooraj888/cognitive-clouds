const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=1;i<=5;i++){
const newImage = document.createElement('img');
let xxx=`images/pic${i}.jpg`;
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);
newImage.addEventListener("click",function(){
    console.log("clicked");
    displayedImage.setAttribute('src',xxx);
});

}
btn.addEventListener('click',function(){
    console.log("btn clicked");
    if(btn.textContent==="Darken")
    {
        btn.textContent="light";
        overlay.style.backgroundColor ="rgba(0,0,0,0.5)" ;
    }
    else{
        btn.textContent="Darken";
        overlay.style.backgroundColor ="rgba(0,0,0,0)" ;
    }
});
