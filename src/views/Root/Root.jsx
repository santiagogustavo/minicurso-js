import React, { Fragment } from 'react';
import Me from 'assets/imgs/me.jpg';
import LogoRaw from 'assets/imgs/js.png';
import {
  H1,
  H2,
  Content,
  InfoText,
  CodeArea,
  CodeComment,
  CentralizedImg,
} from 'components/styles';
import {
  IconLink,
  EnvelopeIcon,
  FacebookIcon,
  GitIcon,
  LinkedInIcon,
  LinksContainer,
  Portrait,
  LogoArea,
  Logo,
  LogoContainer,
} from './styles';

const Root = () => (
  <Fragment>
    <Content>
      <LogoArea>
        <LogoContainer>
          <Logo src={LogoRaw} />
        </LogoContainer>
        <H1>minicurso-js</H1>
      </LogoArea>
      <InfoText>
        <b>Bem vindo, se acomode!</b> Este minicurso irá te ensinar o <b>essencial de JavaScript</b>, esta poderosa e
        controversa linguagem de programação para sistemas Web. Espero que ao fim dele consiga passar o conhecimento
        suficiente para <b>fazer coisas legais e entender melhor a linguagem.</b> Embora não seja&nbsp;
        <b>obrigatório</b> ter conhecimentos sobre <b>lógica de programação</b>, eles são desejáveis e ajudarão ao
        longo do minicurso.
        <br /><br />
        A criação dele foi motivada pela ideia de ensinar <b>React</b> para desenvolvedores e interessados na empresa
        que trabalho, a <a href="https://www.libercapital.com.br/">Liber Capital</a>. Como já tinha em mente preparar um
        artigo ensinando vários tópicos de JS, decidi montar um conteúdo <b>público e bem estruturado</b> para qualquer
        um que queira aprender.
      </InfoText>
      <H2>Sobre o autor</H2>
      <CodeArea>
        <CodeComment>
          <b>Olá, mundo.</b> Sou <b>Gustavo Santiago</b>, mas muitos me chamam apenas de <b>Santiago</b>. Graduando e
          provável formando da turma de 2018 em <b>Bacharelado de Ciências da Computação</b> pela&nbsp;
          <b>USP</b> (Universidade de São Paulo), tenho os computadores como uma forma de vida desde quando era criança.
          O fatídico dia em que meu pai me mostrou um port de&nbsp;
          <a href="https://en.wikipedia.org/wiki/Ms._Pac-Man">Ms. Pacman</a> no <b>MSDOS</b> me fez querer aprender tudo
          sobre programação e arte digital.
          <br /><br />
          Inicialmente focado no desenvolvimento de jogos, mudei meu foco completamente
          com o decorrer do curso. Incentivado por projetos dentro e fora da faculdade, vi que o ambiente Web é um&nbsp;
          <b>universo em constante expansão e com infinitas possibilidades.</b>&nbsp;
          <b>Interfaces elegantes, design responsivo e múltiplas formas de interação</b> foram os pontos que mais
          me atraíram.
          <br /><br />
          Estagio há aproximadamente um ano e meio em desenvolvimento Front-end e nesse período me especializei em&nbsp;
          <b>Javascript, React, CSS e manutenção/gerência de projetos em Git.</b> De fato, tudo isso foi utilizado na
          construção deste curso :)
          <br /><br />
          <b>Sinta-se a vontade para entrar em contato em qualquer uma das redes sociais abaixo:</b>
          <LinksContainer>
            <IconLink href="https://github.com/santiagogustavo"><GitIcon /></IconLink>
            <IconLink href="https://www.linkedin.com/in/santiago-gustavo"><LinkedInIcon /></IconLink>
            <IconLink href="https://www.facebook.com/santiagogustavoo"><FacebookIcon /></IconLink>
            <IconLink href="mailto:santiago.gustavo.mail@gmail.com"><EnvelopeIcon /></IconLink>
          </LinksContainer>
        </CodeComment>
        <CodeComment style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Portrait
            alt="me"
            src={Me}
          />
          <CentralizedImg
            alt="mspacman"
            src="https://thumbs.gfycat.com/RemarkableWeeFieldmouse-small.gif"
            style={{ width: 200 }}
          />
        </CodeComment>
      </CodeArea>
      <H2>Referências</H2>
      <InfoText>
        <b>Textos base, manuais oficiais e links úteis.</b> Muitos tópicos e exemplos foram baseados nessas referências
        que listei a seguir. Algumas referências que não estão listadas aqui foram colocadas&nbsp;
        <b>ao longo do curso na forma de links.</b>
      </InfoText>
      <ul>
        <li> <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">MDN: Javascript</a> </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics">
            MDN: <i>Javascript - Basics</i>
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">
            MDN: <i>Javascript - Data structures</i>
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Lacos_e_iteracoes">
            MDN: <i>Javascript - Laços e Iterações</i>
          </a>
        </li>
        <li>
          <a href="http://loopinfinito.com.br/2014/10/29/hoisting-e-escopo-em-javascript/">
            Loop Infinito: <i>Hoisting e escopo em Javascript</i>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@matheusml/o-guia-do-es6-tudo-que-voc%C3%AA-precisa-saber-8c287876325f">
            Matheus Lima: <i>O guia do ES6 e tudo que você precisa saber</i>
          </a>
        </li>
        <li>
          <a href="https://tableless.com.br/fluxo-de-execucao-assincrono-em-javascript-callbacks/">
            Tableless: <i>Fluxo de execução assíncrono em JavaScript – Callbacks</i>
          </a>
        </li>
        <li>
          <a href="https://tableless.com.br/fluxo-de-execucao-assincrono-em-javascript-callbacks/">
            BrazilJS: <i>Promises no JavaScript</i>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@programadriano/javascript-conhecendo-map-filter-e-reduce-ce072d8f0ec5">
            Thiago S. Adriano: <i>JavaScript - Conhecendo map(), filter() e reduce()</i>
          </a>
        </li>
        <li>
          <a href="https://www.treinaweb.com.br/blog/javascript-generators-e-onde-usa-los/">
            TreinaWeb: <i>JavaScript Generators e onde usá-los</i>
          </a>
        </li>
        <li>
          <a href="https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400">
            Adam Bene: <i>Currying in JavaScript ES6</i>
          </a>
        </li>
        <li>
          <a href="https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e">
            codeburst.io: <i>What are JavaScript Generators and how to use them</i>
          </a>
        </li>
      </ul>
    </Content>
  </Fragment>
);

export default Root;
