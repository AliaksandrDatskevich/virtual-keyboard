import keys from './keys';

export default class Virtual {
  static capsLockHandler(e) {
    if (e.code === 'CapsLock' || e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
      const outerEl = document.querySelector('.CapsLock');
      if (e.getModifierState('CapsLock')) {
        outerEl.classList.add('active');
        const language = localStorage.getItem('language');
        if (language === 'eng') {
          for (let i = 0; i < keys.eng.capsLockKeys.length; i += 1) {
            const el = document.querySelector(`.${keys.eng.capsLockKeys[i]}`);
            const innerEl1 = el.querySelector('.caseDown');
            innerEl1.classList.add('hidden');
            const innerEl2 = el.querySelector('.caseUp');
            innerEl2.classList.remove('hidden');
            const innerEl3 = el.querySelector('.rus .caseDown');
            innerEl3.classList.add('hidden');
            const innerEl4 = el.querySelector('.rus .caseUp');
            innerEl4.classList.add('hidden');
          }
        }
        if (language === 'rus') {
          for (let i = 0; i < keys.rus.capsLockKeys.length; i += 1) {
            const el = document.querySelector(`.${keys.rus.capsLockKeys[i]}`);
            const innerEl1 = el.querySelector('.caseDown');
            innerEl1.classList.add('hidden');
            const innerEl2 = el.querySelector('.caseUp');
            innerEl2.classList.add('hidden');
            const innerEl3 = el.querySelector('.rus .caseDown');
            innerEl3.classList.add('hidden');
            const innerEl4 = el.querySelector('.rus .caseUp');
            innerEl4.classList.remove('hidden');
          }
        }
      } else {
        outerEl.classList.remove('active');
        const language = localStorage.getItem('language');
        if (language === 'eng') {
          for (let i = 0; i < keys.eng.capsLockKeys.length; i += 1) {
            const el = document.querySelector(`.${keys.eng.capsLockKeys[i]}`);
            const innerEl1 = el.querySelector('.caseDown');
            innerEl1.classList.remove('hidden');
            const innerEl2 = el.querySelector('.caseUp');
            innerEl2.classList.add('hidden');
            const innerEl3 = el.querySelector('.rus .caseDown');
            innerEl3.classList.add('hidden');
            const innerEl4 = el.querySelector('.rus .caseUp');
            innerEl4.classList.add('hidden');
          }
        }
        if (language === 'rus') {
          for (let i = 0; i < keys.rus.capsLockKeys.length; i += 1) {
            const el = document.querySelector(`.${keys.rus.capsLockKeys[i]}`);
            const innerEl1 = el.querySelector('.caseDown');
            innerEl1.classList.add('hidden');
            const innerEl2 = el.querySelector('.caseUp');
            innerEl2.classList.add('hidden');
            const innerEl3 = el.querySelector('.rus .caseDown');
            innerEl3.classList.remove('hidden');
            const innerEl4 = el.querySelector('.rus .caseUp');
            innerEl4.classList.add('hidden');
          }
        }
      }
    }
  }

  static shiftHandler(e) {
    if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
      const language = localStorage.getItem('language');
      if (e.shiftKey === true) {
        if (language === 'eng') {
          for (let i = 0; i < keys.eng.shiftKeys.length; i += 1) {
            const el = document.querySelector(`.${keys.eng.shiftKeys[i]}`);
            const innerEl1 = el.querySelector('.caseDown');
            innerEl1.classList.add('hidden');
            const innerEl2 = el.querySelector('.caseUp');
            innerEl2.classList.remove('hidden');
            const innerEl3 = el.querySelector('.rus .caseDown');
            innerEl3.classList.add('hidden');
            const innerEl4 = el.querySelector('.rus .caseUp');
            innerEl4.classList.add('hidden');
          }
        }
        if (language === 'rus') {
          for (let i = 0; i < keys.rus.shiftKeys.length; i += 1) {
            const el = document.querySelector(`.${keys.rus.shiftKeys[i]}`);
            const innerEl1 = el.querySelector('.caseDown');
            innerEl1.classList.add('hidden');
            const innerEl2 = el.querySelector('.caseUp');
            innerEl2.classList.add('hidden');
            const innerEl3 = el.querySelector('.rus .caseDown');
            innerEl3.classList.add('hidden');
            const innerEl4 = el.querySelector('.rus .caseUp');
            innerEl4.classList.remove('hidden');
          }
        }
      } else {
        if (language === 'eng') {
          for (let i = 0; i < keys.eng.shiftKeys.length; i += 1) {
            const el = document.querySelector(`.${keys.eng.shiftKeys[i]}`);
            const innerEl1 = el.querySelector('.caseDown');
            innerEl1.classList.remove('hidden');
            const innerEl2 = el.querySelector('.caseUp');
            innerEl2.classList.add('hidden');
            const innerEl3 = el.querySelector('.rus .caseDown');
            innerEl3.classList.add('hidden');
            const innerEl4 = el.querySelector('.rus .caseUp');
            innerEl4.classList.add('hidden');
          }
        }
        if (language === 'rus') {
          for (let i = 0; i < keys.rus.shiftKeys.length; i += 1) {
            const el = document.querySelector(`.${keys.rus.shiftKeys[i]}`);
            const innerEl1 = el.querySelector('.caseDown');
            innerEl1.classList.add('hidden');
            const innerEl2 = el.querySelector('.caseUp');
            innerEl2.classList.add('hidden');
            const innerEl3 = el.querySelector('.rus .caseDown');
            innerEl3.classList.remove('hidden');
            const innerEl4 = el.querySelector('.rus .caseUp');
            innerEl4.classList.add('hidden');
          }
        }
      }
    }
  }
}
