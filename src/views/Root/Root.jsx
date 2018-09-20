import React, { Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism, tomorrow } from 'react-syntax-highlighter/styles/prism';
import {
  H1,
  H2,
  Content,
  InfoText,
} from 'components/styles';

const code = `\
  // O primeiro de muitos
  console.log('Hello world!');
`;

const Root = () => (
  <Fragment>
    <H1>minicurso-js</H1>
    <Content>
      <SyntaxHighlighter language="js" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="js" style={prism}>
        {code}
      </SyntaxHighlighter>
      <H2>Referências</H2>
      <InfoText>
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
      </InfoText>
    </Content>
  </Fragment>
);

export default Root;
