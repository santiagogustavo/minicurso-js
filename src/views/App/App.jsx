import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from 'components/Navbar';
import './App.css';

import Root from '../Root';
import WtfIsJs from '../WtfIsJs';
import Basics from '../Basics';
import ES6 from '../ES6';
import Advanced from '../Advanced';
import Tools from '../Tools';

import Route404 from '../404';

const Page = styled.div`
  padding: 5% 15%;
`;

const App = () => (
  <Fragment>
    <Navbar />
    <Page>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/404" component={Route404} />
        <Route path="/1-wtf-is-js" component={WtfIsJs} />
        <Route path="/2-basics" component={Basics} />
        <Route path="/3-es6" component={ES6} />
        <Route path="/4-advanced" component={Advanced} />
        <Route path="/5-tools" component={Tools} />
        <Redirect to="/404" />
      </Switch>
    </Page>
  </Fragment>
);

export default App;
