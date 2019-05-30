const formatPascal = require('../../utils/formatPascal');

/**
 * Returns a React Functional Component template to fill a fsFileWrite
 * @param {Object} compData - an object filled with all options a functional component might need
 * @returns {String} React Functional Component template
 */

const functionalComponent = (compData) => {
  const {
    name,
    propTypes,
    defaultProps,
    fragment,
    fileType,
  } = compData;

  const pascalName = formatPascal(name);
  let importJSorTS;
  if (fileType === 'js') importJSorTS = `import React from 'react';`;
  if (fileType === 'ts') importJSorTS = `import * as React from 'react';`;

  const template =
`${importJSorTS}
${propTypes && `import PropTypes from 'prop-types';`}

const ${pascalName} = (props${fileType === 'ts' && ': any'}) => {

  return (
    ${fragment ? '<>' : '<div>'}
      {/* Insert elements and/or components */}
    ${fragment ? '</>' : '</div>'}
  );
};

${propTypes && `${pascalName}.propTypes = {
  // insert type checks here
};`}

${defaultProps && `${pascalName}.defaultProps = {
  // insert default props here
};`}

export default ${pascalName};
`;

  return template;
};

module.exports = functionalComponent;
