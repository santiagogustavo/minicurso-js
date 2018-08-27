import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from 'assets/imgs/js.png';
import './App.css';
import { Header, Logo, Page } from './styles';

import Root from '../Root';

const App = () => (
  <Fragment>
    <Header>
      <Logo src={logo} />
      <h1 className="App-title">Minicurso JS</h1>
    </Header>
    <Page>
      <Switch>
        <Route exact path="/" component={Root} />
      </Switch>
    </Page>
  </Fragment>
);

export default App;
