/**
 * Accepts a DOM node and removes its child nodes
 * @param {Node} node
 */
const clearNode = function (node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
};

export {clearNode};
