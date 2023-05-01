import './style.scss';
import addLayout from './addLayout';
import keys from './keys';

// npx eslint src/index.js

addLayout();

function capsLockHandler(e) {
  if (e.code === 'CapsLock' || e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
    const outerEl = document.querySelector('.CapsLock');
    if (e.getModifierState('CapsLock')) {
      outerEl.classList.add('active');
      for (let i = 0; i < keys.capsLockKeys.length; i += 1) {
        const el = document.querySelector(`.${keys.capsLockKeys[i]}`);
        const innerEl1 = el.querySelector('.caseDown');
        innerEl1.classList.add('hidden');
        const innerEl2 = el.querySelector('.caseUp');
        innerEl2.classList.remove('hidden');
      }
    } else {
      outerEl.classList.remove('active');
      for (let i = 0; i < keys.capsLockKeys.length; i += 1) {
        const el = document.querySelector(`.${keys.capsLockKeys[i]}`);
        const innerEl1 = el.querySelector('.caseDown');
        innerEl1.classList.remove('hidden');
        const innerEl2 = el.querySelector('.caseUp');
        innerEl2.classList.add('hidden');
      }
    }
  }
}

function shiftHandler(e) {
  if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
    if (e.shiftKey === true) {
      for (let i = 0; i < keys.shiftKeys.length; i += 1) {
        const el = document.querySelector(`.${keys.shiftKeys[i]}`);
        const innerEl1 = el.querySelector('.caseDown');
        innerEl1.classList.add('hidden');
        const innerEl2 = el.querySelector('.caseUp');
        innerEl2.classList.remove('hidden');
      }
    } else {
      for (let i = 0; i < keys.shiftKeys.length; i += 1) {
        const el = document.querySelector(`.${keys.shiftKeys[i]}`);
        const innerEl1 = el.querySelector('.caseDown');
        innerEl1.classList.remove('hidden');
        const innerEl2 = el.querySelector('.caseUp');
        innerEl2.classList.add('hidden');
      }
    }
  }
}

function keyDownHandler(e) {
  // console.log(e);
  capsLockHandler(e);
  shiftHandler(e);
  const el = document.querySelector(`.${e.code}`);
  el.classList.add('active');
}

function keyUpHandler(e) {
  const el = document.querySelector(`.${e.code}`);
  if (e.code !== 'CapsLock') {
    el.classList.remove('active');
  }
  capsLockHandler(e);
  shiftHandler(e);
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
