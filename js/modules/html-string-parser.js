/**
 * Creates a document fragment of HTML elements,
 * using a raw html string
 * @param {string} htmlString
 * @return {DocumentFragment}
 */
const createFragment = function (htmlString) {
  return document.createRange().createContextualFragment(htmlString);
};

export default createFragment;
