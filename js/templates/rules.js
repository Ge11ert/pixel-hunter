import createFragmentFromString from '../modules/html-string-parser';
import showScreen from '../modules/show-screen';

import {GameState} from "../modules/data";
import footer from './footer';

export default () => {
  const templateString = `
<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footer}
  `;

  const rulesScreen = createFragmentFromString(templateString);
  const backButton = rulesScreen.querySelector(`.header__back`);
  const rulesForm = rulesScreen.querySelector(`.rules__form`);
  const nameInput = rulesForm.querySelector(`.rules__input`);
  const submitButton = rulesForm.querySelector(`.rules__button`);

  nameInput.addEventListener(`input`, () => {
    submitButton.disabled = nameInput.value === ``;
  });

  rulesForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    showScreen(`game`, GameState);
  });

  backButton.addEventListener(`click`, () => showScreen(`greeting`, {}));

  return rulesScreen;
};
