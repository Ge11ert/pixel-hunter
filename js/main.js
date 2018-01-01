const templates = document.querySelectorAll(`template`);
const mainScreen = document.querySelector(`.central`);
const screens = Array.from(templates).map((template) => template.content);

const KeyCode = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

let currentScreen = 0;

/**
 * Accepts a DOM node and removes its child nodes
 * @param {Node} node
 */
const clearNode = function (node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
};

/**
 * Displays a game screen with given order number. The screen picks up from
 * the array, in which all screens are stored.
 * @param {number} screenNumber
 */
const showScreen = function (screenNumber) {
  screenNumber = Math.min(Math.max(screenNumber, 0), screens.length - 1);
  clearNode(mainScreen);
  mainScreen.appendChild(screens[screenNumber].cloneNode(true));
  currentScreen = screenNumber;
};

/**
 * Switches current game screen, when user presses 'ALT + →' or
 * 'ALT + ←' keys combination
 * @param {Event} evt
 */
const documentKeydownHandler = function (evt) {
  if (evt.keyCode === KeyCode.LEFT_ARROW && evt.altKey) {
    showScreen(--currentScreen);
  }
  if (evt.keyCode === KeyCode.RIGHT_ARROW && evt.altKey) {
    showScreen(++currentScreen);
  }
};

document.addEventListener(`keydown`, documentKeydownHandler);

showScreen(0);
