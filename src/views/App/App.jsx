import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from 'components/Navbar';
import './App.css';

import Root from '../Root';
import WtfIsJs from '../WtfIsJs';
import Basics from '../Basics';

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
        <Route path="/2-basics" component={Basics} />
      </Switch>
    </Page>
  </Fragment>
);

export default App;
