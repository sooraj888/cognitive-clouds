const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.style.color="white";
btn.style.backgroundColor="green";
btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    btn.style.backgroundColor="#ff0000";
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';   
    btn.style.backgroundColor="green";
    txt.textContent = 'The machine is stopped.';
  }
}