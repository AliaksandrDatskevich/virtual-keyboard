import './style.scss';
import addLayout from './addLayout';
// import keys from './keys';
import Virtual from './virtual';

// npx eslint src/index.js

addLayout();

// const handler = new Virtual();

function changeLang(e) {
  if (e.altKey === true && e.ctrlKey === true) {
    for (let i = 0; i < keys.keyboard.length; i += 1) {
      const el = document.querySelector('.rus .caseDown');
      // const el = document.querySelector(`.${keys.capsLockKeys[i]}`);
      const innerEl1 = el.querySelector('.caseDown');
      innerEl1.classList.add('hidden');
      const innerEl2 = el.querySelector('.caseUp');
      innerEl2.classList.remove('hidden');
    }
  }
}

function keyDownHandler(e) {
  if (document.querySelector(`.${e.code}`)) { // чтобы не падало при нажатии иных клавиш
    console.log(e);
    Virtual.capsLockHandler(e);
    Virtual.shiftHandler(e);
    const el = document.querySelector(`.${e.code}`);
    el.classList.add('active');
  }
}

function keyUpHandler(e) {
  if (document.querySelector(`.${e.code}`)) {
    const el = document.querySelector(`.${e.code}`);
    if (e.code !== 'CapsLock') {
      el.classList.remove('active');
    }
    Virtual.capsLockHandler(e);
    Virtual.shiftHandler(e);
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
