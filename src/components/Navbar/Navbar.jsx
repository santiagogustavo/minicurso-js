import React from 'react';

import SvgLogo from 'assets/imgs/js.png';
import {
  Container,
  Header,
  LinkLogo,
  Logo,
  LogoText,
  GitLogo,
  Chapters,
  ChapterLink,
} from './styles';

const Navbar = () => (
  <Container>
    <Header>
      <LinkLogo to="/">
        <Logo src={SvgLogo} />
      </LinkLogo>
      <LogoText>
        minicurso-js
        <a href="https://github.com/santiagogustavo">
          <GitLogo />
          @santiagogustavo
        </a>
      </LogoText>
    </Header>
    <Chapters>
      <ChapterLink to="/1-wtf-is-js">1. WTF is JS</ChapterLink>
      <ChapterLink to="/2-basics">2. Básico</ChapterLink>
      <ChapterLink to="/3-es6">3. ES6</ChapterLink>
      <ChapterLink to="/4-advanced">4. Avançado</ChapterLink>
      <ChapterLink to="/5-tools">5. Ferramentas</ChapterLink>
    </Chapters>
  </Container>
);

export default Navbar;
