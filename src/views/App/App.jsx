import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from 'assets/imgs/js.png';
import './App.css';
import {
  Header,
  Logo,
  Page,
  LinkLogo,
  LogoText,
} from './styles';

import Root from '../Root';
import WtfIsJs from '../WtfIsJs';

const App = () => (
  <Fragment>
    <Header>
      <LinkLogo to="/">
        <Logo src={logo} />
      </LinkLogo>
      <LogoText>Minicurso JS</LogoText>
    </Header>
    <Page>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/1-wtf-is-js" component={WtfIsJs} />
      </Switch>
    </Page>
  </Fragment>
);

export default App;
