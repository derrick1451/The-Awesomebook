import init from './modules/menu.js';
import Generatebooks from './modules/cards.js';
import { DateTime } from './modules/luxon.js';

init();
const bkGenerate = new Generatebooks();
bkGenerate.displayCards();
bkGenerate.reloadWindow();
const dateTime = document.querySelector('#datetime');
setInterval(() => {
  dateTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}, 1000);
