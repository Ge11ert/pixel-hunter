export const GameSettings = Object.freeze({
  maxLives: 3,
  questions: 10,
  maxTime: 30,
  bonuses: {
    fast: 50,
    slow: -50,
    correct: 100,
    savedLife: 50
  }
});

/**
 * @typedef {Object} Question
 * @property {string} type
 * @property {Array.<Object>} images
 */

/**
 * @typedef {Object} GameState
 * @property {number} lives
 * @property {number} currentQuestion
 * @property {number} time
 * @property {Array.<string>} answers
 * @property {Array.<Question>} questions
 */
export const GameState = Object.freeze({
  lives: 3,
  currentQuestion: 0,
  time: 0,
  answers: [],
  questions: [
    {
      type: `one-image`,
      images: [
        {
          type: `paint`,
          src: `https://k42.kn3.net/D2F0370D6.jpg`
        }
      ]
    },
    {
      type: `two-images`,
      images: [
        {
          type: `paint`,
          src: `https://k42.kn3.net/D2F0370D6.jpg`
        },
        {
          type: `photo`,
          src: `https://i.imgur.com/DiHM5Zb.jpg`
        }
      ]
    },
    {
      type: `three-images`,
      images: [
        {
          type: `paint`,
          src: `https://k42.kn3.net/D2F0370D6.jpg`
        },
        {
          type: `photo`,
          src: `https://i.imgur.com/DiHM5Zb.jpg`
        },
        {
          type: `photo`,
          src: `http://i.imgur.com/DKR1HtB.jpg`
        }
      ]
    }
  ]
});
