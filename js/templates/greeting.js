import createFragmentFromString from '../modules/html-string-parser';
import showScreen from '../modules/show-screen';

import footer from './footer';

export default () => {
  const greetingTemplate = `
<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>
  ${footer}
  `;

  const greetingScreen = createFragmentFromString(greetingTemplate);
  const greetingArrow = greetingScreen.querySelector(`.greeting__continue`);

  greetingArrow.addEventListener(`click`, () => showScreen(`rules`, {}));

  return greetingScreen;
};