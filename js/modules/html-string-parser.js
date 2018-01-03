/**
 * Creates a div with a fragment of HTML elements, using a raw html string.
 * Wrapping in DIV is necessary to keep the fragment immutable after inserting in DOM tree.
 * @param {string} htmlString
 * @return {Node}
 */
const createFragment = function (htmlString) {
  const div = document.createElement(`div`);
  div.appendChild(document.createRange().createContextualFragment(htmlString));
  return div;
};

export default createFragment;
