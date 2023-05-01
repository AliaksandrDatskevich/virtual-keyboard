import keys from './keys';

export default class Virtual {
  static capsLockHandler(e) {
    if (e.code === 'CapsLock' || e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
      const outerEl = document.querySelector('.CapsLock');
      if (e.getModifierState('CapsLock')) {
        outerEl.classList.add('active');
        for (let i = 0; i < keys.eng.capsLockKeys.length; i += 1) {
          const el = document.querySelector(`.${keys.eng.capsLockKeys[i]}`);
          const innerEl1 = el.querySelector('.caseDown');
          innerEl1.classList.add('hidden');
          const innerEl2 = el.querySelector('.caseUp');
          innerEl2.classList.remove('hidden');
        }
      } else {
        outerEl.classList.remove('active');
        for (let i = 0; i < keys.eng.capsLockKeys.length; i += 1) {
          const el = document.querySelector(`.${keys.eng.capsLockKeys[i]}`);
          const innerEl1 = el.querySelector('.caseDown');
          innerEl1.classList.remove('hidden');
          const innerEl2 = el.querySelector('.caseUp');
          innerEl2.classList.add('hidden');
        }
      }
    }
  }

  static shiftHandler(e) {
    if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
      if (e.shiftKey === true) {
        for (let i = 0; i < keys.eng.shiftKeys.length; i += 1) {
          const el = document.querySelector(`.${keys.eng.shiftKeys[i]}`);
          const innerEl1 = el.querySelector('.caseDown');
          innerEl1.classList.add('hidden');
          const innerEl2 = el.querySelector('.caseUp');
          innerEl2.classList.remove('hidden');
        }
      } else {
        for (let i = 0; i < keys.eng.shiftKeys.length; i += 1) {
          const el = document.querySelector(`.${keys.eng.shiftKeys[i]}`);
          const innerEl1 = el.querySelector('.caseDown');
          innerEl1.classList.remove('hidden');
          const innerEl2 = el.querySelector('.caseUp');
          innerEl2.classList.add('hidden');
        }
      }
    }
  }
}
