import {clearNode} from "./utils";

const mainScreen = document.querySelector(`.central`);

/**
 * Displays certain game screen, given as a parameter
 * @param {Node} screen
 */
const showScreen = function (screen) {
  clearNode(mainScreen);
  mainScreen.appendChild(screen);
};

export default showScreen;
