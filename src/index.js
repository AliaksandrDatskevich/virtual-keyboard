import './style.scss';
import addLayout from './addLayout';
// import keys from './keys';
import Virtual from './virtual';

// npx eslint src/index.js

let language = 'eng';

addLayout();

function setLocalStorage() {
  localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage);

function changeLang(e) {
  if (e.altKey === true && e.shiftKey === true) {
    if (language === 'eng') {
      language = 'rus';
    } else {
      language = 'eng';
    }
    setLocalStorage();
  }
}

function keyDownHandler(e) {
  if (document.querySelector(`.${e.code}`)) {
    // console.log(e);
    Virtual.capsLockHandler(e);
    Virtual.shiftHandler(e);
    changeLang(e);
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

function getLocalStorage() {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
  const ev = new KeyboardEvent('keydown', { code: 'ShiftLeft' });
  keyDownHandler(ev);
  keyUpHandler(ev);
}
window.addEventListener('load', getLocalStorage);

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
