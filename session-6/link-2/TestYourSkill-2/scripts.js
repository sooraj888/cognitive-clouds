const section=document.querySelector(".section");
// Final result should be 10.42
// Add/update your code here


let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

result=result*result2;
let finalResult=Number(result.toFixed(2));
let finalNumber=finalResult;

console.log(finalNumber);
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
let para2 = document.createElement('p');
 finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);