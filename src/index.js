import './style.scss';
import addLayout from './addLayout';
// import keys from './keys';
import Virtual from './virtual';

// npx eslint src/index.js

addLayout();

// const handler = new Virtual();

function keyDownHandler(e) {
  if (document.querySelector(`.${e.code}`)) { // чтобы не падало при нажатии иных клавиш
    // console.log(e);
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
