/**
 * Description
 * @param {string} tagname
 * @param {object} attributes
 * @returns {HTMLElement}
 */
export const createElement = (tagname, attributes) => {
  const element = document.createElement(tagname);
  for (const [attribute, value] of Object.entries(attributes)) {
    if (value !== null) {
      element.setAttribute(attribute, value);
    }
  }
  return element;
};
