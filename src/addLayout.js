import keys from './keys';

export default function addLayout() {
  const outerWrapper = document.createElement('div');
  outerWrapper.className = 'wrapper';

  const title = document.createElement('p');
  title.textContent = 'Virtual Keyboard';
  title.className = 'title';
  outerWrapper.appendChild(title);

  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  outerWrapper.appendChild(textArea);

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  for (let i = 0; i < keys.keyboard.length; i += 1) {
    const row = document.createElement('div');
    row.className = 'keyboard-row';
    for (let j = 0; j < keys.keyboard[i].length; j += 1) {
      const key = document.createElement('div');
      key.className = `key ${keys.keyboard[i][j].className}`;

      // start eng

      const character = document.createElement('span');
      character.className = 'eng';

      const cDown = document.createElement('span');
      cDown.textContent = keys.keyboard[i][j].eng.caseDown;
      cDown.className = 'caseDown';
      character.appendChild(cDown);

      const cUp = document.createElement('span');
      cUp.textContent = keys.keyboard[i][j].eng.caseUp;
      cUp.className = 'caseUp hidden';
      character.appendChild(cUp);

      const cLock = document.createElement('span');
      if (keys.keyboard[i][j].eng.caps) {
        cLock.textContent = keys.keyboard[i][j].eng.caps;
      } else {
        cLock.textContent = keys.keyboard[i][j].eng.caseUp;
      }
      cLock.className = 'caps hidden';
      character.appendChild(cLock);

      const cCapsShift = document.createElement('span');
      if (keys.keyboard[i][j].eng.shiftCaps) {
        cCapsShift.textContent = keys.keyboard[i][j].eng.shiftCaps;
      } else {
        cCapsShift.textContent = keys.keyboard[i][j].eng.caseDown;
      }
      cCapsShift.className = 'shiftCaps hidden';
      character.appendChild(cCapsShift);

      key.appendChild(character);

      // end eng, start other

      const characterOther = document.createElement('span');
      characterOther.className = 'rus';

      const cDownOther = document.createElement('span');
      cDownOther.textContent = keys.keyboard[i][j].rus.caseDown;
      cDownOther.className = 'caseDown hidden';
      characterOther.appendChild(cDownOther);

      const cUpOther = document.createElement('span');
      cUpOther.textContent = keys.keyboard[i][j].rus.caseUp;
      cUpOther.className = 'caseUp hidden';
      characterOther.appendChild(cUpOther);

      const cLockOther = document.createElement('span');
      if (keys.keyboard[i][j].rus.caps) {
        cLockOther.textContent = keys.keyboard[i][j].rus.caps;
      } else {
        cLockOther.textContent = keys.keyboard[i][j].rus.caseUp;
      }
      cLockOther.className = 'caps hidden';
      characterOther.appendChild(cLockOther);

      const cCapsShiftOther = document.createElement('span');
      if (keys.keyboard[i][j].rus.shiftCaps) {
        cCapsShiftOther.textContent = keys.keyboard[i][j].rus.shiftCaps;
      } else {
        cCapsShiftOther.textContent = keys.keyboard[i][j].rus.caseDown;
      }
      cCapsShiftOther.className = 'shiftCaps hidden';
      characterOther.appendChild(cCapsShiftOther);

      key.appendChild(characterOther);

      // end other

      row.appendChild(key);
    }
    keyboard.appendChild(row);
  }
  outerWrapper.appendChild(keyboard);

  const os = document.createElement('p');
  os.textContent = 'The keyboard was created in the Windows operating system';
  os.className = 'os';
  outerWrapper.appendChild(os);

  const lang = document.createElement('p');
  lang.textContent = 'To switch the language press combination: left shift + alt';
  lang.className = 'lang';
  outerWrapper.appendChild(lang);

  document.body.appendChild(outerWrapper);
}
