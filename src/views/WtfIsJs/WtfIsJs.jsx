import React, { Fragment } from 'react';
import {
  H1,
  H2,
  Content,
  InfoText,
} from 'components/styles';

const WtfIsJs = () => (
  <Fragment>
    <H1>1. <span>WTF is JS</span></H1>
    <Content>
      <InfoText>
        Este é o capítulo inicial do minicurso de JavaScript, abordei a seguir algumas informações e curiosidades sobre
        a linguagem.
      </InfoText>
      <H2>Origem</H2>
      <H2>Evolução</H2>
      <H2>Aplicações</H2>
      <H2>Vanilla X Frameworks</H2>
      <H2>Node? React? Redux?</H2>
    </Content>
  </Fragment>
);

export default WtfIsJs;
