/**
 * Returns a React Class Component template to fill a fsFileWrite
 * @param {Object} compData - an object filled with all options a class component might need
 * @returns {String} React Class Component template
 */

const classComponent = (compData) => {
  const {
    name,
    type,
    state,
    getDerivedStateFromProps,
    componentDidMount,
    shouldComponentUpdate,
    getSnapshotBeforeUpdate,
    componentDidUpdate,
    componentWillUnmount,
    getDerivedStateFromError,
    componentDidCatch,
    propTypes,
    defaultProps,
    fragment,
    fileType,
  } = compData;

  let importJSorTS;
  if (fileType === 'js') importJSorTS = `import React from 'react';`;
  if (fileType === 'ts') importJSorTS = `import * as React from 'react';`;

  const template =
`${importJSorTS}
${propTypes ? `import PropTypes from 'prop-types';` : ''}

class ${name} extends React.${type === 'class' ? 'Component' : 'PureComponent'}${fileType === 'ts' ? '<P,S>' : ''} {
  constructor(props) {
    super(props);
${state ? `    this.state: {
      // add your state here
    },` : ''}
  }
${getDerivedStateFromProps ? `  static getDerivedStateFromProps(props, state) {
    // return object to update state
    return null;
  }` : ''}
${componentDidMount ? `  componentDidMount() {
    // invoked immediately after component is mounted
  }` : ''}
${shouldComponentUpdate ? `  shouldComponentUpdate(nextProps, nextState) {
    // invoked before rendering when new props or state being received
    // defaults to true, return false to skip update
  }` : ''}
${getSnapshotBeforeUpdate ? `  getSnapshotBeforeUpdate(prevProps, prevState) {
    // enables component to capture information from DOM before changes
    // values returned by getSnapshotBeforeUpdate will be passed as parameter to componentDidUpdate
  }` : ''}
${componentDidUpdate ? `  componentDidUpdate(prevProps, prevState, snapshot) {
    // fill in info later
  }` : ''}
${componentWillUnmount ? `  componentWillUnmount() {
    // clean up component before unmounting
  }` : ''}
${getDerivedStateFromError ? `  static getDerivedStateFromError(error) {
    // fill in info later
  }` : ''}
${componentDidCatch ? `  componentDidCatch(error, info) {
    // fill in info later
  }` : ''}
  render() {
    return (
      ${fragment ? '<>' : '<div>'}
        {/* Insert elements and/or components */}
      ${fragment ? '</>' : '</div>'}
    );
  }
${propTypes ? `  ${name}.propTypes = {
    // insert type checks here
  };` : ''}
${defaultProps ? `  ${name}.defaultProps = {
    // insert default props here
  };` : ''}
}
export default ${name};`;

  return template;
};

module.exports = classComponent;
