import createFragmentFromString from '../modules/html-string-parser';
import showScreen from '../modules/show-screen';

import footer from './footer';

/**
 * @return {Node} - Rendered module
 */
export default () => {
  const introTemplate = `
<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${footer}
`;

  const introScreen = createFragmentFromString(introTemplate);
  const asterisk = introScreen.querySelector(`.intro__asterisk`);

  asterisk.addEventListener(`click`, () => showScreen(`greeting`, {}));

  return introScreen;
};
