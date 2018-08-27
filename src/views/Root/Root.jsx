import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism, tomorrow } from 'react-syntax-highlighter/styles/prism';

const code = `\
  // O primeiro de muitos
  console.log('Hello world!');
`;

const Root = () => (
  <div>
    <SyntaxHighlighter language="js" style={tomorrow}>
      {code}
    </SyntaxHighlighter>
    <SyntaxHighlighter language="js" style={prism}>
      {code}
    </SyntaxHighlighter>
  </div>
);

export default Root;
