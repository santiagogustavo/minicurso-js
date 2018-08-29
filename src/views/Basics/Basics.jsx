import React, { Fragment } from 'react';
import {
  H1,
  H2,
  H3,
  Content,
  InfoText,
  CodeArea,
  CodeComment,
  CodeFrame,
} from 'components/styles';

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
      <H2>2.1. Hello World</H2>
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
      <H2>2.2. Operadores</H2>
      <CodeArea>
        <CodeComment>
          As operações <strong>algébricas e booleanas</strong> funcionam como esperado (e com sintaxe muito familiar).
          No exemplo, as operações são aplicadas em valores <strong>number e boolean</strong>, mas será mostrado adiante
          que é possível fazer entre diversos tipos de dados.
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
      <H2>2.3. Comentários</H2>
      <CodeArea>
        <CodeComment>
          Assim como nas demais linguagens, é possível <strong>(e recomendado)</strong> colocar comentários nos códigos.
          Novamente, a sintaxe é muito familiar e funciona como esperado, onde os comentários podem ser colocados&nbsp;
          <strong>após as expressões em uma linha, em uma linha separada ou ocupar várias linhas</strong>.
        </CodeComment>
        <CodeFrame
          title="basics/3_comments.js"
          width="100%"
          height="auto"
          src="//jsfiddle.net/santiagogustavo/fhse2br5/embedded/js,result/dark/"
          frameBorder="0"
        />
      </CodeArea>
      <H2>2.4. Tipos de dados</H2>
      <CodeArea>
        <CodeComment>
          Existem duas &quot;classes&quot; de tipos de dados:
          <ul>
            <li>
              Os tipos <strong>primitivos</strong> são tratados como entidades <strong>imutáveis e básicas</strong>, nas
              quais os valores já estão definidos previamente e não podem ser modificados.
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
          Observe que <strong>Array</strong> é um valor do tipo <strong>Object</strong>. Esta é uma macro da linguagem!
          <H3>typeof e instanceof</H3>
          Estes operadores são utilizados para indicar <strong>tipo ou instância de classe</strong> para valores e
          variáveis. Use-os sempre que estiver na dúvida, também são úteis para verificar&nbsp;
          <strong>valores indefinidos, objetos vazios e outras condições &quot;tipadas&quot;.</strong>
          <H3>Concatenação entre tipos</H3>
          Aqui as coisas ficam um tanto confusas: alguns tipos podem ser concatenados para gerar novos valores, mas não
          é recomendado, porém, que isso seja feito intuitivamente pelo operador <strong>&quot;+&quot;</strong>.&nbsp;
          <strong>Para ilustrar ainda melhor: </strong>
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
          height="auto"
          src="//jsfiddle.net/santiagogustavo/hyemn3fo/embedded/js,result/dark/"
          frameBorder="0"
        />
      </CodeArea>
    </Content>
  </Fragment>
);

export default Basics;