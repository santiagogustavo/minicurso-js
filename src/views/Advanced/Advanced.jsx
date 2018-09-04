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

const Advanced = () => (
  <Fragment>
    <H1>4. Avançado</H1>
    <Content>
      <InfoText>
        <strong>Bruxarias, mas no geral truques e estruturas otimizadas.</strong> Continuando o processo de
        aprendizado, trago alguns&nbsp;
        <strong>
          <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/">Design Patterns</a>, métodos e
          técnicas de&nbsp;
          <a href="https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536">
            programação funcional
          </a>
        </strong>&nbsp;
        que muitas vezes ajudam a implementar códigos mais legíveis e eficientes. Muito do que é passado aqui depende
        das mudanças feitas no <strong>ES6</strong> e serve como leitura complementar deste capítulo. Como lembrete, a
        compatibilidade dos métodos passados aqui <strong>ainda é pequena</strong>, então é extremamente recomendado
        usar um <strong>compilador</strong> se for usá-los em algum código de produção!
        <br /><br />
        Alguns tópicos citados aqui se tornaram <strong>padrão ou são muito utilizados</strong> em versões pós-ES6, dei
        uma ênfase maior neles! <strong>Novas funcionalidades</strong> foram implementadas sobre&nbsp;
        <strong>expressões regulares e iteradores assíncronos</strong> no&nbsp;
        <strong>
          <a href="https://medium.com/front-end-hacking/javascript-whats-new-in-ecmascript-2018-es2018-17ede97f36d5">
            ES2018
          </a> (de fato já existe até o <a href="https://tc39.github.io/ecma262/">ES2019</a>!)
        </strong>, mas não cobri elas aqui devido a falta de suporte e uso.
        <br /><br />
        <strong>Vamos nessa!</strong>
        <CentralizedImg
          alt="wizardry"
          src="https://media.giphy.com/media/ms4x9Ipgego8g/giphy.gif"
          style={{
            marginTop: '1em',
            height: 200,
          }}
        />
      </InfoText>
      <Accordion title="4.1. IIFE">
        <CodeArea>
          <CodeComment>
            <strong>Immediately Invoked Function Expression</strong>, ou simplesmente <strong>IIFE</strong>, é um
            padrão de código que possui duas funcionalidades:
            <ul>
              <li>
                Declarar uma função <strong>nomeada ou anônima</strong> no contexto local
              </li>
              <li>
                <strong>Executá-la logo em seguida</strong>, removendo qualquer referência após sua execução
              </li>
            </ul>
            Estruturas desse tipo são muito úteis quando se tem a necessidade de realizar operações num&nbsp;
            <strong>escopo separado e temporário</strong>.
            <br /><br />
            <strong>IIFEs podem retornar valores normalmente!</strong>
          </CodeComment>
          <CodeFrame
            title="advanced/1_iife.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/s5cq3xv9/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="4.2. Closures">
        <CodeArea>
          <CodeComment>
            <strong>Closures (fechamento)</strong> são um mecanismo da linguagem utilizado para &quot;privatizar&quot;
            atributos dentro de escopos locais. Devem ser utilizados quando se deseja que&nbsp;
            <strong>variáveis, funções e objetos</strong> não sejam acessados fora de uma função ou objeto.
            <br /><br />
            Observe nos exemplos que os atributos modificados são&nbsp;
            <strong>atualizados normalmente dentro do escopo</strong>, mas para obtê-los é necessário que&nbsp;
            <strong>métodos &quot;públicos&quot; retornem seus valores</strong> explicitamente.
            <br /><br />
            <strong>Esse mecanismo deriva do conceito de encapsulamento na Orientação a Objetos!</strong>
          </CodeComment>
          <CodeFrame
            title="advanced/2_closures.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/kpny0hdx/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="4.3. Currying">
        <CodeArea>
          <CodeComment>
            Nomeada pelo seu criador, o matemático&nbsp;
            <a href="https://en.wikipedia.org/wiki/Haskell_Curry">Haskell Curry</a>, essa técnica combinatória
            envolve <strong>reduzir o número de argumentos (ordem)</strong> de uma função de acordo com seu uso e
            valores que são comumente passados. É, também, uma forma de&nbsp;
            <a href="https://pt.wikipedia.org/wiki/C%C3%A1lculo_lambda">cálculo lambda</a>, aonde as operações são
            feitas <strong>implicitamente ou de forma encadeada</strong>.
            <br /><br />
            Uma visão matemática pode simplificar como esse processo funciona:
            <ul>
              <li>
                Uma função <strong>f(x, y)</strong> será executada muitas vezes para um mesmo valor de&nbsp;
                <strong>x</strong>
              </li>
              <li>
                Faz sentido, então, gerar uma outra função <strong>g(y)</strong> que já recebe o valor de x
                implicitamente
              </li>
              <li>
                Então, podemos quebrar a função <strong>f(x, y)</strong> em <strong>f&apos;(x)(y)</strong> e
                declarar <strong>g(y) = f(valor)(y)</strong>
              </li>
              <li>
                <strong>Isso é currying!</strong>
              </li>
            </ul>
            <strong>
              Uma vez que uma função passou pelo processo de currying, é possível revertê-la ao seu &quot;estado&quot;
              original, tornando essa uma estrutura muito flexível e utilizada em Javascript e outras linguagens!
            </strong>
          </CodeComment>
          <CodeFrame
            title="advanced/3_currying.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/aLnztq6u/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="4.4. forEach(), map(), filter() e reduce()">
        <CodeArea>
          <CodeComment>
            Aproveitando ao máximo a&nbsp;
            <a href="https://medium.com/opensanca/imperativo-ou-declarativo-3e6dffbf301c">programação declarativa</a>,
            foram definidos novos mecanismos para trabalhar com <strong>Arrays e objetos</strong>. As funções&nbsp;
            <strong>forEach(), map(), filter() e reduce()</strong> vieram para&nbsp;
            <strong>simplificar e otimizar</strong> operações frequentes.
            <br /><br />
            Em todas, o <a href="https://pt.wikipedia.org/wiki/Modus_operandi">modus operandi</a> é o mesmo: um&nbsp;
            <strong>iterador declarativo</strong> assume os valores de elementos em uma lista.
            <ul>
              <li>
                <strong>forEach():</strong> intuitivamente itera sobre <strong>todos os elementos</strong>, um a um.
                Seu funcionamento é <strong>idêntico</strong> ao laço <strong>for-of</strong>;
              </li>
              <li>
                <strong>map():</strong> permite aplicar transformações em <strong>todos os elementos</strong>. Pode ser
                utilizado para <strong>inserir, remover ou selecionar atributos</strong> em alguns casos;
              </li>
              <li>
                <strong>filter():</strong> recupera elementos de acordo com o resultado de uma função. É a forma
                mais <strong>simples e não-recursiva</strong> de gerar novos Arrays condicionalmente!
              </li>
              <li>
                <strong>reduce():</strong> itera sobre <strong>todos os elementos</strong> e mantém um resultado
                através de um acumulador. Pode receber um <strong>valor inicial</strong> e percorrer&nbsp;
                <strong>objetos.</strong>
              </li>
            </ul>
            <strong>
              forEach(), apesar de sua simplicidade, é considerado antipadrão por alguns frameworks.
              Mas não tem problema: map() tem a mesma funcionalidade se os elementos não forem modificados!
            </strong>
          </CodeComment>
          <CodeFrame
            title="advanced/4_iterators.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/mu9rjhdx/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="4.5. Funções assíncronas">
        <CodeArea>
          <CodeComment>
            Aplicações <strong>&quot;do mundo real&quot;</strong> quase sempre ocorrem de maneira&nbsp;
            <strong>assíncrona</strong>, onde o tempo de chamada ou resposta&nbsp;
            <strong>não é instantâneo ou previsível</strong>. Seja uma requisição a um servidor ou até uma interação do
            usuário numa interface, é necessario que a execução seja <strong>não-bloqueante</strong> e retorne ações
            de <strong>sucesso ou erro</strong> através de&nbsp;
            <a href="https://tableless.com.br/fluxo-de-execucao-assincrono-em-javascript-callbacks/">callbacks</a>.
            <br /><br />
            As funções <strong>setTimeout e setInterval</strong> são assíncronas do tipo <strong>timer</strong>, e
            executam callbacks <strong>uma vez após um timeout ou repetidamente em um intervalo definido</strong>,
            respectivamente. <strong>Elas são canceláveis!</strong>
            <H3>Callback Hell</H3>
            <strong>Aninhar várias funções</strong> é um erro muito comum quando se programa com fluxos assíncronos!
            De fato, é intuitivo que o tratamento das respostas seja feito com&nbsp;
            <strong>blocos e lógicas diferentes</strong>, mas se isso é feito progressivamente através de callbacks
            temos o fenômeno do <a href="http://callbackhell.com/">Callback Hell</a>.
            <br /><br />
            <strong>Os principais sintomas são ilegibilidade de código e dificuldade na manutenção!</strong>
          </CodeComment>
          <CodeFrame
            title="advanced/5_asyncs.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/zfyaw2qk/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="4.6. Promises">
        <CodeArea>
          <CodeComment>
            ASDF
          </CodeComment>
          <CodeFrame
            title="advanced/6_promises.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/4wzbeqd8/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="4.7. Generators">
        <CodeArea>
          <CodeComment>
            ASDF
          </CodeComment>
          <CodeFrame
            title="advanced/7_generators.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/g7qp4omx/1/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <NavLinks>
        <PrevLink to="/3-es6">3. ES6</PrevLink>
        <NextLink to="/5-tools">5. Ferramentas</NextLink>
      </NavLinks>
    </Content>
  </Fragment>
);

export default Advanced;
