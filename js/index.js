import keys from './keys';

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

for (let i = 0; i < keys.length; i += 1) {
  const row = document.createElement('div');
  row.className = 'keyboard-row';
  for (let j = 0; j < keys[i].length; j += 1) {
    const key = document.createElement('div');
    key.className = 'key';
    const character = document.createElement('span');
    character.textContent = keys[i][j].eng.caseUp;
    key.appendChild(character);
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
lang.textContent = 'To switch the language combination: left ctrl + alt';
lang.className = 'lang';
outerWrapper.appendChild(lang);

document.body.appendChild(outerWrapper);
