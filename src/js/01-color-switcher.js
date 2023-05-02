function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]'); //отримуємо посилання на стартову кнопку
const stopBtn = document.querySelector('[data-stop]'); //отримуємо посилання на стопову кнопку
const body = document.body; //отримуємо посилання на тіло сторінки

let intervalId = null; //створюємо змінну, в яку буде зберігатися ідентифікатор інтервалу

stopBtn.disabled = true; //робимо стопову кнопку неактивною зі старту

startBtn.addEventListener('click', onStartBtnClick); //створюємо обробник подій старту
stopBtn.addEventListener('click', onStopBtnClick); //створюємо обробник подій стопу

function onStartBtnClick() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor(); //передаємо рандомний колір в тіло сторінки
  }, 1000); //задаємо інтервал в секунду

  startBtn.disabled = true; //робимо стартову кнопку неактивною
  stopBtn.disabled = false; //робимо стопову кнопку активною
}

function onStopBtnClick() {
  clearInterval(intervalId); //зупиняємо зміну кольору фону

  startBtn.disabled = false; //робимо стартову кнопку активною
  stopBtn.disabled = true; //робимо стопову кнопку неактивною
}
