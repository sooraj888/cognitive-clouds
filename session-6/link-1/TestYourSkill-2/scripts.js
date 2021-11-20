
const section=document.querySelector(".selector");
let myName = 'Paul';
myName="sooraj";


section.innerHTML = ' ';
let para = document.createElement('p');
para.textContent = "hi  "+myName+"  ....";
para.style.fontSize="100px";
para.style.backgroundColor="green";
para.style.color="#ffffff";
section.appendChild(para);
console.log(myName);
    