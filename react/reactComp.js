const program = require('commander');
const chalk = require('chalk');

const reactColor = '#00d8ff';

const reactComp = (args) => {
  program
    .option('R, React [type]', 'Create a new React component')
    .option('-c, --class', 'Class Component')
    .option('-f, --functional', 'Functional Component')
    .option('-p, --pure', 'Pure Component')
    .option('-s, --state', 'State')
    .option('-gdsfp, --getDerivedStateFromProps', 'getDerivedStateFromProps')
    .option('-cdm, --componentDidMount', 'componentDidMount')
    .option('-scu, --shouldComponentUpdate', 'shouldComponentUpdate')
    .option('-gsbu, --getSnapshotBeforeUpdate', 'getSnapshotBeforeUpdate')
    .option('-cdu, --componentDidUpdate', 'componentDidUpdate')
    .option('-cwu, --componentWillUnmount', 'componentWillUnmount')
    .option('-gdsfe, --getDerivedStateFromError', 'getDerivedStateFromError')
    .option('-cdc, --componentDidCatch', 'componentDidCatch')
    .option('-dprops, --defaultProps', 'defaultProps')
    .option('-frag, --fragment', 'fragments')
    .option('.js, -js', 'JS file type')
    .option('.jsx, -jsx', 'JSX file type')
    .option('.ts, -ts', 'TypeScript file type');
    // more options coming soon
    // todo: hooks, customFunc (bind or arrow), context?, HOC?, propTypes

  program.parse(args);

  // object to hold options and to be passed onto the file maker
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
    defaultProps: false,
    fragment: false,
    fileType: '',
  };

  // reassign compData properties with commander option results
  if (typeof program.React === 'string') {
    compData.name = program.React;
    console.log(chalk.bold.hex(reactColor)('Working!'), `${compData.name}`);
  }
};

module.exports = reactComp;
