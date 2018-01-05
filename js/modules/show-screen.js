import {clearNode} from "./utils";

import introScreen from '../templates/intro';
import greetingScreen from '../templates/greeting';
import rulesScreen from '../templates/rules';
import gameScreen from '../templates/game';
import statsScreen from "../templates/stats";

const mainScreen = document.querySelector(`.central`);

const screens = {
  'intro': introScreen,
  'greeting': greetingScreen,
  'rules': rulesScreen,
  'game': gameScreen,
  'stats': statsScreen
};

/**
 * Displays certain game screen, given as a parameter
 * @param {string} screenName
 * @param {Object} state
 */
const showScreen = function (screenName, state) {
  clearNode(mainScreen);
  mainScreen.appendChild(screens[screenName](state));
};

export default showScreen;
