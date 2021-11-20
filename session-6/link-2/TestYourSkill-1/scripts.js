const section=document.querySelector(".section");
let num1=18,num2=1,num3=3,num4=24;

let addition=num1+num2;
let subtraction=num4-num3;

let finalResult=addition*subtraction;

let evenOddResult=finalResult%2;

// Add your code here



// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
let para2 = document.createElement('p');
let evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
    