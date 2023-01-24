import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const formEl = document.querySelector('form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let delay = delayEl.value;
  const step = stepEl.value;
  const amount = amountEl.value;

  for (let position = 1; position <= amount; position += 1) {
    const promise = createPromise(position, delay);
    console.log(position, delay);

    promise
      .then(position, delay => {
        console.log(position, delay);
      })
      .catch(position, delay => {
        console.log(position, delay);
      });

    delay = Number(delay) + Number(stepEl.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        );
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}
