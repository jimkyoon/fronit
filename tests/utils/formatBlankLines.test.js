const formatBlankLines = require('../../utils/formatBlankLines');

describe('formatBlankLines', () => {
  // simple test case
  const before =
`
hello
world




testing
1
2
3`;

  const after =
`
hello
world

testing
1
2
3
`;

  // unformatted class
  const classBefore =
`import React from 'react';


class Hello extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        {/* Insert elements and/or components */}
      </div>
    );

  }



export default Hello;`;

  // what it should look like after format
  const classAfter =
`import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {/* Insert elements and/or components */}
      </div>
    );

  }

export default Hello;
`;

  // unformatted func
  const funcBefore =
`import React from 'react';


const Hello = (props) => {


  return (
    <div>
      {/* Insert elements and/or components */}
    </div>
  );


};



export default Hello;`;

  // what it should look like after format
  const funcAfter =
`import React from 'react';

const Hello = (props) => {

  return (
    <div>
      {/* Insert elements and/or components */}
    </div>
  );

};

export default Hello;
`;

  test('formats simple template to remove all unnecessary blank lines', () => {
    expect(formatBlankLines(before)).toEqual(after);
  });

  test('formats class template to remove all unnecessary blank lines', () => {
    expect(formatBlankLines(classBefore)).toEqual(classAfter);
  });

  test('formats functional template to remove all unnecessary blank lines', () => {
    expect(formatBlankLines(funcBefore)).toEqual(funcAfter);
  });
});
