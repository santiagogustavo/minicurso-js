import React, { Fragment } from 'react';
import {
  H1,
  H3,
  Content,
  InfoText,
  CodeArea,
  CodeComment,
  CodeFrame,
  CentralizedImg,
} from 'components/styles';
import Accordion from 'components/Accordion';
import { NavLinks, NextLink, PrevLink } from 'components/Links';

const ES6 = () => (
  <Fragment>
    <H1>3. ES6</H1>
    <Content>
      <InfoText>
        <strong>Novo. Moderno. Simplificado.</strong> O&nbsp;
        <a href="http://www.ecma-international.org/ecma-262/6.0/">ECMAScript6</a>, ou
        simplesmente <strong>ES6</strong>, foi uma especificação lançada em junho de 2015 pela&nbsp;
        <a href="https://www.ecma-international.org/">ECMA (European Computer Manufacturers Association)</a> responsável
        por <strong>padronizar e flexibilizar</strong> estruturas antigas e trazer&nbsp;
        <strong>novos conceitos</strong> à linguagem. Conforme visto nos capítulos anteriores, muito do que tornava JS
        uma linguagem confusa e limitada foi reduzido ou corrigido nessa versão. Neste capítulo explico as
        principais <strong>mudanças e novidades</strong> junto com exemplos de código e alguns truques.
        <br /><br />
        <strong>
          É importante lembrar que ainda não há suporte em alguns navegadores! (tabela de compatibilidade pode ser
          consultada <a href="http://kangax.github.io/compat-table/es6/">aqui</a>)
        </strong>&nbsp;
        Mas não tem problema! Existem <strong>compiladores</strong> que conseguem converter o código &quot;novo&quot;
        para os padrões antigos e suportados universalmente. O mais conhecido e utilizado é o&nbsp;
        <a href="https://babeljs.io/">Babel</a>, devido a sua praticidade e o suporte para plugins e configurações
        externas.&nbsp;
        <a href="https://blog.tecsinapse.com.br/utilizando-es6-no-node-js-com-babel-js-430346d68794">Aqui</a>&nbsp;
        tem um tutorial que ensina como configurar o Babel com o <strong>preset-env</strong> (sempre atualizado com
        o ECMA!).
        <br /><br />
        <strong>Vamos nessa!</strong>
        <br />
        <CentralizedImg
          alt="programming"
          src="https://imasters.com/wp-content/uploads/sites/24/2016/09/4_Progresso4.gif"
          style={{
            marginTop: '1em',
            height: 200,
          }}
        />
      </InfoText>
      <Accordion title="3.1. Declaração e escopo de variáveis">
        <CodeArea>
          <CodeComment>
            Novos tipos de variáveis foram introduzidos no ES6: <strong>const e let</strong>.
            Elas operam de maneira similar às <strong>vars</strong> em declaração e associação de valores, com a
            diferença fundamental de que elas obedecem ao <strong>escopo de bloco</strong>.&nbsp;
            <br /><br />
            <strong>
              &quot;Consts&quot; recebem apenas um valor inicial e não podem ser reatribuídas como as &quot;lets&quot;.
              No entanto, se um objeto for &quot;const&quot; ele pode ter suas propriedades modificadas normalmente!
            </strong>
            <H3>Escopo de bloco</H3>
            Variáveis do tipo <strong>const e let</strong> obedecem, além dos escopos &quot;normais&quot; de função,
            escopos definidos por blocos. Isso significa que variáveis desses tipos definidas em&nbsp;
            <strong>condições, laços e blocos explícitos (definidos entre {'{ }'})</strong>
            &nbsp;são encapsuladas e só podem ser acessadas <strong>dentro</strong> dessas estruturas.
            Por conta desse detalhe, elas <strong>evitam o instanciamento indevido causado pelo hoisting!</strong>
            <br /><br />
            <strong>Note que os blocos não definem contexto, apenas reservam um espaço para variáveis locais!</strong>
          </CodeComment>
          <CodeFrame
            title="es6/1_variables.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/dnbxcur8/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="3.2. Parâmetros default e rest">
        <CodeArea>
          <CodeComment>
            Novidades para a declaração de funções foram especificadas, trazendo a possibilidade de definir&nbsp;
            <strong>valores-padrão e parâmetros de &quot;lastro&quot; (rest)</strong>.
            <ul>
              <li>
                <strong>Valores-padrão</strong> são utilizados para atribuir valores à parâmetros quando eles não são
                definidos ao chamar uma função
              </li>
              <li>
                <strong>Parâmetros rest</strong> definem valores passados indefinidamente, são tratados como objetos
                ou Arrays pela função
              </li>
            </ul>
            Os parâmetros <strong>rest</strong> são bem úteis quando há <strong>parâmetros opcionais</strong> ou se
            deseja passar <strong>um número indeterminado ou grande de parâmetros</strong>.
            <br /><br />
            <strong>
              Eles são diferentes dos parâmetros&nbsp;
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters">
                arguments
              </a>!
            </strong>
          </CodeComment>
          <CodeFrame
            title="es6/2_params.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/987u2oak/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="3.3. Arrow functions">
        <CodeArea>
          <CodeComment>
            3.3. Arrow functions
          </CodeComment>
          <CodeFrame
            title="basics/1_hello.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/b1an8Lf7/2/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="3.4. Destructuring">
        <CodeArea>
          <CodeComment>
            3.4. Destructuring
          </CodeComment>
          <CodeFrame
            title="basics/1_hello.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/b1an8Lf7/2/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="3.5. “Pseudo” Orientação a Objetos">
        <CodeArea>
          <CodeComment>
            3.5. “Pseudo” Orientação a Objetos
          </CodeComment>
          <CodeFrame
            title="basics/1_hello.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/b1an8Lf7/2/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="3.6. Módulos">
        <CodeArea>
          <CodeComment>
            3.6. Módulos
          </CodeComment>
          <CodeFrame
            title="basics/1_hello.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/b1an8Lf7/2/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <NavLinks>
        <PrevLink to="/2-basics">2. Básico</PrevLink>
        <NextLink to="/4-advanced">4. Avançado</NextLink>
      </NavLinks>
    </Content>
  </Fragment>
);

export default ES6;
