import React, { Fragment } from 'react';
import {
  H1,
  H3,
  Content,
  InfoText,
} from 'components/styles';
import Accordion from 'components/Accordion';
import { NavLinks, PrevLink } from 'components/Links';

const Tools = () => (
  <Fragment>
    <H1>5. Ferramentas</H1>
    <Content>
      <InfoText>
        Apêndice e literatura complementar. Algumas ferramentas que uso no dia a dia e que ajudam ou possibilitam o
        desenvolvimento usando frameworks e afins.
      </InfoText>
      <Accordion title="5.1. Node">
        5.1. Node
      </Accordion>
      <Accordion title="5.2. NPM">
        5.2. NPM
        <H3>Yarn</H3>
      </Accordion>
      <Accordion title="5.3. Babel">
        5.3. Babel
        <H3>preset-env</H3>
        <H3>babel-cli</H3>
      </Accordion>
      <Accordion title="5.4. ESLint">
        5.4. ESLint
        <H3>Padrão Airbnb</H3>
      </Accordion>
      <Accordion title="5.5. Webpack">
        5.5. Webpack
        <H3>Configurações</H3>
        <H3>Dev Server</H3>
      </Accordion>
      <Accordion title="5.6. Visual Studio Code">
        5.6. Visual Studio Code
        <H3>Plugins</H3>
      </Accordion>
      <NavLinks>
        <PrevLink to="/4-advanced">4. Avançado</PrevLink>
      </NavLinks>
    </Content>
  </Fragment>
);

export default Tools;
