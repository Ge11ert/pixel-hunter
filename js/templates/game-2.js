import createFragmentFromString from '../modules/html-string-parser';
import showScreen from '../modules/show-screen';

import game3Screen from './game-3';
import greetingScreen from './greeting';
import footer from './footer';
import header from './header';


const templateString = `
  ${header}
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
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

const game2Screen = createFragmentFromString(templateString);
const backButton = game2Screen.querySelector(`.header__back`);
const answers = game2Screen.querySelectorAll(`.game__answer`);

answers.forEach((option) => {
  option.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    showScreen(game3Screen);
  });
});

backButton.addEventListener(`click`, () => showScreen(greetingScreen));

export default game2Screen;
