const program = require('commander');
const chalk = require('chalk');

const pascalFormat = require('../utils/formatPascal');

/**
 * Process args through commander and return an object with all user determined options
 * @param {Array} args - process.argv, array of inputs from command line
 * @returns {Object} compData, all options user chose
 */

const reactCompData = (args) => {
  program
    .option('R, React [type]', 'Create a new React component')
    .option('-c, --class', 'Class Component')
    .option('-f, --functional', 'Functional Component')
    .option('-p, --pure', 'Pure Component')
    .option('-s, --state', 'State')
    .option('--gdsfp, --getDerivedStateFromProps', 'getDerivedStateFromProps')
    .option('--cdm, --componentDidMount', 'componentDidMount')
    .option('--scu, --shouldComponentUpdate', 'shouldComponentUpdate')
    .option('--gsbu, --getSnapshotBeforeUpdate', 'getSnapshotBeforeUpdate')
    .option('--cdu, --componentDidUpdate', 'componentDidUpdate')
    .option('--cwu, --componentWillUnmount', 'componentWillUnmount')
    .option('--gdsfe, --getDerivedStateFromError', 'getDerivedStateFromError')
    .option('--cdc, --componentDidCatch', 'componentDidCatch')
    .option('--us, --useState', 'useState hooks')
    .option('--ue, --useEffect', 'useEffect hooks')
    .option('--uc, --useContext', 'useContext hooks')
    .option('--ur, --useReducer', 'useReducer hooks')
    .option('--ucb, --useCallback', 'useCallback hooks')
    .option('--um, --useMemo', 'useMemo hooks')
    .option('--uref, --useRef', 'useRef hooks')
    .option('--uih, --useImperativeHandle', 'useImperativeHandle hooks')
    .option('--ule, --useLayoutEffect', 'useLayoutEffect hooks')
    .option('--udv, --useDebugValue', 'useDebugValue hooks')
    .option('--ptypes, --propTypes', 'propTypes')
    .option('--dprops, --defaultProps', 'defaultProps')
    .option('--frag, --fragment', 'fragments')
    .option('.js, --js', 'JS file type')
    .option('.jsx, --jsx', 'JSX file type')
    .option('.ts, --ts', 'TypeScript file type')
    .option('.tsx, --tsx', 'TypeScript JSX file type');
    // more options coming soon
    /*
    todo:
      - customFunc (bind or arrow)
      - redux/mobx
      - context?
      - HOC?
    */
  program.parse(args);

  // object to hold options and to be passed onto the file maker
  // some defaults included, like type and extension
  const compData = {
    name: '',
    type: '',
    state: false,
    getDerivedStateFromProps: false,
    componentDidMount: false,
    shouldComponentUpdate: false,
    getSnapshotBeforeUpdate: false,
    componentDidUpdate: false,
    componentWillUnmount: false,
    getDerivedStateFromError: false,
    componentDidCatch: false,
    hooks: false,
    useState: false,
    useEffect: false,
    useContext: false,
    useReducer: false,
    useCallback: false,
    useMemo: false,
    useRef: false,
    useImperativeHandle: false,
    useLayoutEffect: false,
    useDebugValue: false,
    propTypes: false,
    defaultProps: false,
    fragment: false,
    fileType: '',
    extension: '',
  };

  // reassign compData properties with commander option results
  if (typeof program.React === 'string') {
    compData.name = pascalFormat(program.React);
  } else if (program.React === true) {
    // if user did have give a component name, then exit
    console.log(chalk.bgRed('Please give your component a name!\n'), 'i.e. fronit React Hello\n will create a component named Hello.\n Please look at docs for all options!');
    return;
  }
  // currently set to default to class if more than 2 options are chosen
  if (program.class) {
    compData.type = 'class';
  } else if (program.functional) {
    compData.type = 'functional';
  } else if (program.pure) {
    compData.type = 'pure';
  }
  if (program.state) compData.state = true;
  if (program.getDerivedStateFromProps) compData.getDerivedStateFromProps = true;
  if (program.componentDidMount) compData.componentDidMount = true;
  if (program.shouldComponentUpdate) compData.shouldComponentUpdate = true;
  if (program.getSnapshotBeforeUpdate) compData.getSnapshotBeforeUpdate = true;
  if (program.componentDidUpdate) compData.componentDidUpdate = true;
  if (program.componentWillUnmount) compData.componentWillUnmount = true;
  if (program.getDerivedStateFromError) compData.getDerivedStateFromError = true;
  if (program.componentDidCatch) compData.componentDidCatch = true;
  if (program.useState) {
    compData.hooks = true;
    compData.useState = true;
  }
  if (program.useEffect) {
    compData.hooks = true;
    compData.useEffect = true;
  }
  if (program.useContext) {
    compData.hooks = true;
    compData.useContext = true;
  }
  if (program.useReducer) {
    compData.hooks = true;
    compData.useReducer = true;
  }
  if (program.useCallback) {
    compData.hooks = true;
    compData.useCallback = true;
  }
  if (program.useMemo) {
    compData.hooks = true;
    compData.useMemo = true;
  }
  if (program.useRef) {
    compData.hooks = true;
    compData.useRef = true;
  }
  if (program.useImperativeHandle) {
    compData.hooks = true;
    compData.useImperativeHandle = true;
  }
  if (program.useLayoutEffect) {
    compData.hooks = true;
    compData.useLayoutEffect = true;
  }
  if (program.useDebugValue) {
    compData.hooks = true;
    compData.useDebugValue = true;
  }
  if (program.propTypes) compData.propTypes = true;
  if (program.defaultProps) compData.defaultProps = true;
  if (program.fragment) compData.fragment = true;
  // currently set jsx to be default file type if more than 2 options are chosen
  if (program.jsx) {
    compData.fileType = 'js';
    compData.extension = 'jsx';
  } else if (program.js) {
    compData.fileType = 'js';
    compData.extension = 'js';
  } else if (program.ts) {
    compData.fileType = 'ts';
    compData.extension = 'ts';
  } else if (program.tsx) {
    compData.fileType = 'ts';
    compData.extension = 'tsx';
  }

  // checks to make sure bare minimum were called
  // if not, defaults here
  // also warnings called here
  if (compData.type === '') {
    compData.type = 'class';
    console.log(chalk.bgRed('Please pick a component type next time!\n'), 'i.e. --class, --functional or --pure\n Component was still created but defaulted to class component!');
  }
  if (compData.fileType === '') {
    compData.fileType = 'js';
    compData.extension = 'jsx';
    console.log(chalk.bgRed('Please pick a file type and extension next time!\n'), 'i.e. extension: .js, .jsx, .ts or .tsx\n Component was still created but defaulted to a js file type and .jsx extension!');
  }

  // return compData to reactProcess
  return compData;
};

module.exports = reactCompData;
