import {clearNode} from "./utils";

const mainScreen = document.querySelector(`.central`);

/**
 * Displays a game screen with given order number. The screen picks up from
 * the array, in which all modules are stored.
 * @param {DocumentFragment} screen
 */
const showScreen = function (screen) {
  clearNode(mainScreen);
  mainScreen.appendChild(screen);
  // currentScreen = screenNumber;
};

export default showScreen;
