import React, { Fragment } from 'react';
import {
  H1,
  H3,
  Content,
  InfoText,
} from 'components/styles';
import Accordion from 'components/Accordion';
import { NavLinks, NextLink } from 'components/Links';

const WtfIsJs = () => (
  <Fragment>
    <H1>1. WTF is JS</H1>
    <Content>
      <InfoText>
        Este é o capítulo inicial do minicurso de JavaScript, abordei a seguir algumas informações e curiosidades sobre
        a linguagem.
      </InfoText>
      <Accordion title="1.1. Origem">
        1.1. Origem
      </Accordion>
      <Accordion title="1.2. Evolução">
        1.2. Evolução
      </Accordion>
      <Accordion title="1.3. Aplicações">
        1.3. Aplicações
      </Accordion>
      <Accordion title="1.4. Vanilla X Frameworks">
        1.4. Vanilla X Frameworks
        <H3>jQuery</H3>
        <H3>Node</H3>
      </Accordion>
      <NavLinks>
        <NextLink to="/2-basics">2. Básico</NextLink>
      </NavLinks>
    </Content>
  </Fragment>
);

export default WtfIsJs;