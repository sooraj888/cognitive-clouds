const section=document.querySelector(".section");
let myName;
myName="sooraj";
let myAge=20;

section.innerHTML = '';
let para1 = document.createElement('p');
para1.textContent = myName;
let para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);
    