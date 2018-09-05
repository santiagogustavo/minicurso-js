import React from 'react';
import Ghost from 'assets/imgs/ghost.png';
import { Container, Img } from './styles';

const Route404 = () => (
  <Container>
    <Img src={Ghost} />
    <h1>404</h1>
    Essa página não existe!
  </Container>
);

export default Route404;
