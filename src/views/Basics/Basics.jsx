import React, { Fragment } from 'react';
import {
  H1,
  H3,
  Content,
  InfoText,
  CodeArea,
  CodeComment,
  CodeFrame,
} from 'components/styles';
import Accordion from 'components/Accordion';
import { NavLinks, NextLink, PrevLink } from 'components/Links';

const Basics = () => (
  <Fragment>
    <H1>2. <span>Básico</span></H1>
    <Content>
      <InfoText>
        Os códigos começam por aqui! Nesse capítulo, mostro conceitos básicos e fundamentais ao JavaScript. Note que
        os exemplos estão no padrão &quot;antigo&quot; <strong>(pré-ES6)</strong>, as diferenças serão explicadas
        depois. Para aqueles que não estão familiarizados, a linguagem passou por&nbsp;
        <strong>evoluções técnicas e sintáticas</strong> que flexibilizaram e limitaram problemas que eram causados por
        diferenças semânticas entre JS e outras linguagens de programação.
        <br /><br />
        Aqui, são exemplificadas&nbsp;
        <strong>operações, atribuições, tipos de dados, estruturas e características de interpretação</strong>&nbsp;
        que são essenciais para entender o funcionamento e o comportamento dos códigos. Aproveitei para enfatizar,
        também, alguns pontos que são considerados <strong>legado ou antipadrão</strong>, e como eles são contornados
        pelo ES6 em diante.
      </InfoText>
      <Accordion title="2.1 Hello World">
        <CodeArea>
          <CodeComment>
            Reza a lenda que se você aprender uma linguagem sem fazer um <strong>&quot;Hello World!&quot;</strong> uma
            maldição é passada para sua vida. Felizmente, é tão simples quanto chamar o método&nbsp;
            <strong>console.log();</strong>
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
      <Accordion title="2.2 Operadores">
        <CodeArea>
          <CodeComment>
            As operações <strong>algébricas e booleanas</strong> funcionam como esperado (e com sintaxe muito familiar).
            No exemplo, as operações são aplicadas em valores <strong>number e boolean</strong>, mas será mostrado
            adiante que é possível fazer entre diversos tipos de dados.
            <H3>== vs ===</H3>
            Observe que nas comparação ao lado há o uso de <strong>===</strong>. Este operador pode parecer um pouco
            estranho, mas sua utilidade é muito grande. Além de comparar os valores, como o operador&nbsp;
            <strong>==</strong> tradicionalmente faz, o <strong>=== (também chamado de eqeqeq)</strong>&nbsp;
            compara os tipos de dados dos operandos.
            <br /><br />
            <strong>
              De fato, a utilidade do === é tão grande que ele se tornou padrão na linguagem e deve ser utilizado sempre
              que for necessário comparar dois valores.
            </strong>
          </CodeComment>
          <CodeFrame
            title="basics/2_operators.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/gq0uwamt/1/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="2.3. Comentários">
        <CodeArea>
          <CodeComment>
            Assim como nas demais linguagens, é possível <strong>(e recomendado)</strong> colocar comentários nos
            códigos. Novamente, a sintaxe é muito familiar e funciona como esperado, onde os comentários podem ser
            colocados <strong>após as expressões em uma linha, em uma linha separada ou ocupar várias linhas</strong>.
          </CodeComment>
          <CodeFrame
            title="basics/3_comments.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/fhse2br5/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="2.4. Tipos de dados">
        <CodeArea>
          <CodeComment>
            Existem duas &quot;classes&quot; de tipos de dados:
            <ul>
              <li>
                Os tipos <strong>primitivos</strong> são tratados como entidades <strong>imutáveis e básicas</strong>,
                nas quais os valores já estão definidos previamente e não podem ser modificados.
              </li>
              <li>
                O tipo <strong>Object</strong> é utilizado para definir outras &quot;macros&quot; na linguagem, tanto a
                nível de implementação <strong>(estruturas presentes na linguagem)</strong> quanto a nível de usuário
                <strong>(objetos, classes e entidades criadas em código).</strong>
              </li>
            </ul>
            No exemplo, são verificados os tipos de alguns valores <strong>primitivos e Object</strong>, sendo eles:
            <ul>
              <li>
                <strong>String:</strong> valores textuais
              </li>
              <li>
                <strong>Number:</strong> valores numéricos reais
              </li>
              <li>
                <strong>Boolean:</strong> true/false
              </li>
              <li>
                <strong>Object:</strong> estruturas de objeto, instâncias de classe, macros, entre outros
              </li>
              <li>
                <strong>Function:</strong> funções
              </li>
              <li>
                <strong>Null:</strong> valor nulo (diferente de undefined)
              </li>
              <li>
                <strong>Undefined:</strong> entidade indefinida (sem valor)
              </li>
            </ul>
            Observe que <strong>Array</strong> é um valor do tipo <strong>Object</strong>. Esta é uma macro da
            linguagem!
            <H3>typeof e instanceof</H3>
            Estes operadores são utilizados para indicar <strong>tipo ou instância de classe</strong> para valores e
            variáveis. Use-os sempre que estiver na dúvida, também são úteis para verificar&nbsp;
            <strong>valores indefinidos, objetos vazios e outras condições &quot;tipadas&quot;.</strong>
            <H3>Concatenação entre tipos</H3>
            Aqui as coisas ficam um tanto confusas: alguns tipos podem ser concatenados para gerar novos valores, mas
            não é recomendado, porém, que isso seja feito intuitivamente pelo operador&nbsp;
            <strong>&quot;+&quot;. Para ilustrar ainda melhor: </strong>
            <br /><br />
            <iframe
              title="destroyallsoftware wat"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/BrB0oaSz8Nk"
              frameBorder="0"
            />
          </CodeComment>
          <CodeFrame
            title="basics/4_datatypes.js"
            width="100%"
            height="600"
            src="//jsfiddle.net/santiagogustavo/hyemn3fo/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="2.5. Variáveis">
        <CodeArea>
          <CodeComment>
            Novamente a sintaxe é familiar: para instanciar uma variável,&nbsp;
            <strong>declara-se ela com um nome e atribui-se um valor (não necessariamente na declaração).</strong>&nbsp;
            Todos os operadores definidos até agora podem ser utilizados e o resultado pode ser armazenado.
            <br /><br />
            <strong>
              É importante mencionar que nestes exemplos foi propositalmente utilizada a sintaxe &quot;var&quot; para
              fins didáticos.&nbsp;
            </strong>
            A partir do ES6 (que é explicado no próximo capítulo), <strong>&quot;vars&quot;</strong> se tornaram
            obsoletas e foram substituídas por outras estruturas.
            <H3>Tipagem dinâmica</H3>
            As variáveis em JS são <strong>fracamente tipadas</strong>. Isso significa que, uma vez que uma variável
            é instanciada, ela <strong>pode receber valores de qualquer tipo de dado</strong> e o&nbsp;
            <strong>valor/tipo pode ser modificado em qualquer instante.</strong>
            <br /><br />
            É uma boa prática, porém,&nbsp;
            <strong>documentar e manter as variáveis em seus tipos &quot;originais&quot;</strong> para evitar
            problemas de execução. Frameworks, bibliotecas e extensões da linguagem, como exemplo&nbsp;
            <a href="https://www.typescriptlang.org/">Typescript</a> e&nbsp;
            <a href="https://www.npmjs.com/package/prop-types">PropTypes</a>, exigem que os tipos sejam definidos e
            fazem a comparação com os valores recebidos.
            <H3>Backtick</H3>
            O operador <strong>`` (também chamado de backtick)</strong> é muito utilizado para exibir valores de
            variáveis dentro de uma <strong>String</strong>. É, inclusive, recomendado utilizar backticks no lugar
            de <strong>&quot;+&quot;</strong> quando for necessário concatenar&nbsp;
            <strong>Strings!</strong>
          </CodeComment>
          <CodeFrame
            title="basics/5_variables.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/xh84zLjo/1/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="2.6. Condicionais">
        <CodeArea>
          <CodeComment>
            Assim como nas demais linguagens, as estruturas condicionais são definidas e funcionam como esperado:
            <ul>
              <li>
                <strong>if/else, if/else if/else:</strong> avaliam o resultado de uma comparação ou expressão e
                executam determinados blocos de código.
              </li>
              <li>
                <strong>switch/case:</strong> compara o valor de uma variável e encaminha para casos específicos&nbsp;
                <strong>(ou para um caso &quot;default&quot;)</strong>
              </li>
            </ul>
            <H3>Comparador ternário</H3>
            A comparação por&nbsp;
            <strong>
              [condição] ? [fluxo verdadeiro] : [fluxo falso] (também chamada de comparador ternário)&nbsp;
            </strong>
            é um <a href="https://en.wikipedia.org/wiki/Syntactic_sugar">syntax sugar</a> em JS.
            Ela substitui diretamente condições <strong>if/else</strong>, e é muito utilizada para fazer atribuições
            condicionais e renderizar blocos dinâmicos em <a href="https://reactjs.org/">React</a>.
          </CodeComment>
          <CodeFrame
            title="basics/6_conditionals.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/4Lvy9w0g/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="2.7. Laços e Iteradores">
        <CodeArea>
          <CodeComment>
            Laços, também chamados de <strong>estruturas de repetição</strong>, são definidos para blocos de código que
            devem ser executados repetidamente. A repetição ocorre com a declaração de um&nbsp;
            <strong>iterador (em um intervalo de valores) ou uma condição (enquanto ela for satisfeita)</strong>.
            <br /><br />
            Existem diversas formas de se escrever um laço, conforme pode ser visto nos exemplos através das
            estruturas <strong>for, while e do/while</strong>. Note que em alguns deles há o uso de um&nbsp;
            <strong>iterador</strong>, que é atualizado a cada execução do bloco. No caso&nbsp;
            <strong>while(true)</strong> o código é executado indeterminadamente (condição sempre é verdadeira) e sai
            da repetição através de uma condição em <strong>if</strong> e o operador <strong>break.</strong>
            <H3>Iteradores declarativos</H3>
            JS implementa, para valores do tipo <strong>Array</strong>,&nbsp;
            <a href="https://medium.com/opensanca/imperativo-ou-declarativo-3e6dffbf301c">funções declarativas</a> que
            permitem percorrer laços sem a necessidade de especificar um domínio de valores. É o caso dos laços&nbsp;
            <strong>for/in e for/of:</strong>
            <ul>
              <li>
                Não há a necessidade de especificar valores inicial e final para iterar
              </li>
              <li>
                <strong>Em for/in,</strong> a variável iteradora assume o <strong>índice</strong> atual
                (posição no Array)
              </li>
              <li>
                <strong>Em for/of,</strong> a variável iteradora assume o <strong>valor</strong> da posição atual
              </li>
            </ul>
            <H3>Programação funcional</H3>
            A partir do <strong>ES6</strong>, foram implementadas funções baseadas em&nbsp;
            <a href="https://tableless.com.br/entendendo-programacao-funcional-em-javascript/">
              programação funcional
            </a>.
            No capítulo <a href="/4-advanced">4. Avançado</a>, há uma explicação detalhada sobre como eles funcionam e
            facilitam muitos fluxos recursivos.
            <br /><br />
            <strong>
              A estrutura &quot;for&quot; com iterador explícito (primeiro exemplo) caiu em desuso e é considerado
              antipadrão em algumas configurações do <a href="https://eslint.org/">ESLint</a>.
            </strong>
          </CodeComment>
          <CodeFrame
            title="basics/7_loops.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/co9wj8sf/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="2.8. Funções">
        <CodeArea>
          <CodeComment>
            Funções definem blocos de código que são <strong>chamados e executados</strong> em qualquer ponto da
            aplicação. As funções podem <strong>receber parâmetros</strong> e <strong>retornar valores</strong> de
            quaisquer tipos de dados. <strong>É possível até receber e retornar outras funções!</strong>
            <ul>
              <li>
                Os valores de retornos podem ser <strong>armazenados em variáveis</strong> ou&nbsp;
                <strong>usados em expressões</strong>. As funções são <strong>executadas</strong> e retornam
                seus valores <strong>antes</strong> que qualquer operação ou expressão seja calculada, como pode ser
                visto ao usar <strong>console.log()</strong> no exemplo
              </li>
              <li>
                Passar <strong>objetos como parâmetro</strong> é uma boa prática para simplificar e flexibilizar os
                dados necessários para executar uma função
              </li>
              <li>
                Funções <strong>anônimas</strong> podem ser definidas, armazenadas e executadas através de variáveis,
                como uma forma de&nbsp;
                <a href="https://medium.com/@ahlechandre/lambda-calculus-com-javascript-5db88c3b45a">
                  expressão lambda
                </a>
              </li>
            </ul>
          </CodeComment>
          <CodeFrame
            title="basics/8_functions.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/4nfg9qcz/2/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="2.9. Escopo e hoisting">
        <CodeArea>
          <CodeComment>
            Este é um dos pontos mais interessantes e complexos da linguagem. Por definição, variáveis possuem um&nbsp;
            <strong>escopo</strong>, algo que pode ser explicado como sua <strong>localização relativa</strong> no
            código. Existem dois tipos de escopo:
            <ul>
              <li>
                <strong>Global:</strong> &quot;raiz&quot; do código, escopo mais externo e final
              </li>
              <li>
                <strong>Local:</strong> definido por funções <strong>(usando var)</strong> ou por blocos de código&nbsp;
                <strong>(em ES6)</strong>, podem ser aninhados
              </li>
            </ul>
            <H3>Hoisting</H3>
            Traduzindo literalmente:
            <br /><br />
            <strong>&ensp;&ensp;&ensp;&ensp;to hoist {'{v.}'}:</strong> içar, alçar
            <br /><br />
            Traduzindo em termos técnicos, é uma característica <strong>muito importante</strong> do Javascript: as
            variáveis declaradas no código são <strong>&quot;jogadas para cima&quot;</strong>, como se tivessem sido
            declaradas no topo de cada escopo.
            <br /><br />
            Esse processo é feito devido a um mecanismo de procura pelas variáveis sempre que elas são referenciadas
            em expressões. Chamado de <strong>Go-Fish</strong>, ele funciona da seguinte forma:
            <ul>
              <li>
                Variável referenciada é <strong>procurada no escopo atual</strong>
              </li>
              <li>
                <strong>Se encontrou,</strong> a variável é recuperada e utilizada sem problemas
              </li>
              <li>
                <strong>Se não encontrou,</strong> existem dois cenários:
              </li>
              <ul>
                <li>
                  <strong>Se o escopo atual é local,</strong> a busca continua e prossegue da mesma forma
                </li>
                <li>
                  <strong>Se o escopo atual é o global e a variável não foi encontrada,</strong> ela é então declarada e
                  inicializada sem valor <strong>(undefined)</strong>
                </li>
              </ul>
            </ul>
            Note que é possível <strong>redefinir e mascarar variáveis de mesmo nome</strong> ao defini-las novamente
            em um escopo mais &quot;interno&quot;. Essa prática é chamada de <strong>shadowing</strong> e&nbsp;
            <strong>deve ser usada com muito cuidado.</strong>
            <H3>Contexto e binding</H3>
            Até agora, foi falado sobre <strong>escopos locais e globais</strong> relativos a organização do código.
            Por padrão, o <strong>contexto</strong> para as funções é definido automaticamente como o escopo de
            maior precedência <strong>(pode ser o global ou o local imediatamente após o atual)</strong>.
            Podemos ir além e definir <strong>&quot;contextos manuais&quot;</strong>, aonde funções podem obedecer
            escopos além do definido originalmente.
            <br /><br />
            Essa mudança de contexto é chamada de <strong>binding</strong>, e é muito utilizada em&nbsp;
            <strong>orientação a objetos e funções executadas em diferentes pontos de uma aplicação.</strong>
            <H3>Strict Mode</H3>
            No ES5, foi criado o <strong>Strict Mode</strong>, responsável por&nbsp;
            <strong>
              impor limitações sintáticas e exibir erros que normalmente seriam ignorados e corrigidos
              pelo interpretador.&nbsp;
            </strong>
            Conforme visto no <strong>Go-Fish</strong>, se uma variável referenciada não é encontrada, ela é então
            &quot;criada&quot; pelo interpretador e recebe o valor <strong>undefined</strong>.&nbsp;
            O Strict Mode é comumente usado para &quot;cancelar&quot; esse procedimento,
            retornando erros de variáveis indefinidas.
            <br /><br />
            Devido a problemas de compatibilidade e limitações técnicas, esse modo é considerado&nbsp;
            <strong>antipadrão e deve ser evitado</strong>. Em versões posteriores do ES, foram adicionadas&nbsp;
            <strong>novas estruturas e sintaxes</strong> que se comportam de maneira similar a esse modo.
          </CodeComment>
          <CodeFrame
            title="basics/9_scope.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/16qd5nsw/embedded/js,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <Accordion title="2.10. Manipulação do DOM">
        <CodeArea>
          <CodeComment>
            DOM
          </CodeComment>
          <CodeFrame
            title="basics/10_dom.js"
            width="100%"
            height="auto"
            src="//jsfiddle.net/santiagogustavo/qpakmz0c/3/embedded/js,html,result/dark/"
            frameBorder="0"
          />
        </CodeArea>
      </Accordion>
      <NavLinks>
        <PrevLink to="/1-wtf-is-js">1. WTF is JS</PrevLink>
        <NextLink to="/3-es6">3. ES6</NextLink>
      </NavLinks>
    </Content>
  </Fragment>
);

export default Basics;
