import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from 'components/Navbar';
import './App.css';

import Root from '../Root';
import WtfIsJs from '../WtfIsJs';

const Page = styled.div`
  padding: 5% 15%;
`;

const App = () => (
  <Fragment>
    <Navbar />
    <Page>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/1-wtf-is-js" component={WtfIsJs} />
      </Switch>
    </Page>
  </Fragment>
);

export default App;
