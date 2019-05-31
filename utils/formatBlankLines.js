/**
 * Returns a template that has got rid of unnecessary blank lines
 * @param {String} template - finished but unformatted template
 * @returns {String} a formatted template with blank lines removed
 */

const formatBlankLines = (template) => {
  // split based on new lines
  const formattedTemplate = template.split('\n');
  // go through the array and replace empty lines with ***
  for (let i = 1; i < formattedTemplate.length; i += 1) {
    // check if current index is empty string and before is a string
    if (formattedTemplate[i] === '' && formattedTemplate[i - 1] !== '') {
      if (formattedTemplate[i - 1] === '***') {
        formattedTemplate[i] = '***';
      }
    // if both current index and previous are empty, set current to ***
    } else if (formattedTemplate[i] === '' && formattedTemplate[i - 1] === '') {
      formattedTemplate[i] = '***';
    }
  }
  // now filter the array and get rid of all *** and add '\n' to each line
  return formattedTemplate.filter(el => el !== '***').map(el => el.concat('\n')).join('');
};

module.exports = formatBlankLines;
