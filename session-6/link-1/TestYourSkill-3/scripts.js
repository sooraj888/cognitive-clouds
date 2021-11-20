

const section= document.querySelector("#section");
let myName = 'Default';
myName = 'Chris';

let myAge = 42;



section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);