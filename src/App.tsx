import React, { FunctionComponent } from 'react';
import ButtonWithStylesheet from '../src/components/button-with-stylesheet';
import ButtonWithInlineCss from '../src/components/button-with-inline-css';
import ButtonWithStyledComponents from '../src/components/button-with-styled-component';
import ButtonWithStyledSystem from '../src/components/button-with-styled-system';

const App: FunctionComponent = () => (
  <div className="App">
    <ButtonWithStylesheet />
    <br />
    <ButtonWithInlineCss />
    <br />
    <ButtonWithStyledComponents />
    <br />
    <ButtonWithStyledSystem />
  </div>
);

export default App;
