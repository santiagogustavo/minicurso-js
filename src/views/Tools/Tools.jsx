import React, { Fragment } from 'react';
import {
  H1,
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
        Este é o capítulo inicial do minicurso de JavaScript, abordei a seguir algumas informações e curiosidades sobre
        a linguagem.
      </InfoText>
      <Accordion title="5.1. Node">
        1.1. Origem
      </Accordion>
      <Accordion title="5.2. NPM/Yarn">
        1.2. Evolução
      </Accordion>
      <Accordion title="5.3. Babel">
        1.3. Aplicações
      </Accordion>
      <Accordion title="5.4. ESLint">
        1.4. Vanilla X Frameworks
      </Accordion>
      <Accordion title="5.5. Webpack">
        1.4. Vanilla X Frameworks
      </Accordion>
      <NavLinks>
        <PrevLink to="/4-advanced">4. Avançado</PrevLink>
      </NavLinks>
    </Content>
  </Fragment>
);

export default Tools;
