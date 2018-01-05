import createFragmentFromString from '../modules/html-string-parser';
import showScreen from '../modules/show-screen';

import statsScreen from './stats';
import greetingScreen from './greeting';
import footer from './footer';
import header from './header';

const templateString = `
  ${header}
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
  ${footer}
  `;

const game3Screen = createFragmentFromString(templateString);
const backButton = game3Screen.querySelector(`.header__back`);
const gameOptions = game3Screen.querySelectorAll(`.game__option`);

gameOptions.forEach((option) => {
  option.addEventListener(`click`, () => showScreen(statsScreen));
});

backButton.addEventListener(`click`, () => showScreen(greetingScreen));

export default game3Screen;
