/**
 * Returns a React Functional Component template to fill a fsFileWrite
 * @param {Object} compData - an object filled with all options a functional component might need
 * @returns {String} React Functional Component template
 */

const functionalComponent = (compData) => {
  const {
    name,
    hooks,
    useState,
    useEffect,
    useContext,
    useReducer,
    useCallback,
    useMemo,
    useRef,
    useImperativeHandle,
    useLayoutEffect,
    useDebugValue,
    propTypes,
    defaultProps,
    fragment,
    fileType,
  } = compData;

  let importJSorTS;
  if (fileType === 'js') {
    let importString = 'import React';
    if (hooks) {
      importString.concat(', {');
      // add in hooks if used
      if (useState) importString.concat(' useState, ');
      if (useEffect) importString.concat(' useEffect, ');
      if (useContext) importString.concat(' useContext, ');
      if (useReducer) importString.concat(' useReducer, ');
      if (useCallback) importString.concat(' useCallback, ');
      if (useMemo) importString.concat(' useMemo, ');
      if (useRef) importString.concat(' useRef, ');
      if (useImperativeHandle) importString.concat(' useImperativeHandle, ');
      if (useLayoutEffect) importString.concat(' useLayoutEffect, ');
      if (useDebugValue) importString.concat(' useDebugValue, ');
      importString.concat(`} from 'react';`);
      importJSorTS = importString;
    } else {
      importJSorTS = `import React from 'react';`
    }
  }
  if (fileType === 'ts') importJSorTS = `import * as React from 'react';`;
  // need to research more on typescript with functional comp, hooks, import statement

  const template =
`${importJSorTS}
${propTypes ? `import PropTypes from 'prop-types';` : ''}

${fileType === 'ts' ? `type Props = {
  // add prop types here
};` : ''}

const ${name}${fileType === 'ts' ? ': React.FC<Props>' : ''} = (props${fileType === 'ts' ? ': any' : ''}) => {
${useState ? '  const [state, setState] = useState(initialState);' : ''}
${useEffect ? '  useEffect();' : ''}
${useContext ? '  const value = useContext(MyContext);' : ''}
${useReducer ? '  const [state, dispatch] = useReducer(reducer, initialArg, init);' : ''}
${useCallback ? '  const memoizedCallback = useCallback();' : ''}
${useMemo ? '  const memoizedValue = useMemo();' : ''}
${useRef ? '  const refContainer = useRef(initialValue)' : ''}
${useImperativeHandle ? '  useImperativeHandle(ref, createHandle, [deps])' : ''}
${useLayoutEffect ? '  useLayoutEffect();' : ''}
${useDebugValue ? '  useDebugValue(value);' : ''}
  return (
    ${fragment ? '<>' : '<div>'}
      {/* Insert elements and/or components */}
    ${fragment ? '</>' : '</div>'}
  );
};

${propTypes ? `${name}.propTypes = {
  // insert type checks here
};` : ''}

${defaultProps ? `${name}.defaultProps = {
  // insert default props here
};` : ''}

export default ${name};`;

  return template;
};

module.exports = functionalComponent;
