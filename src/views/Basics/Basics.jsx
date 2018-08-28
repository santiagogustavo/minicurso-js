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
          height="100%"
          src="//jsfiddle.net/uz2ryax3/1/embedded/js,result/dark/"
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
          title="basics/1_hello.js"
          width="100%"
          height="100%"
          src="//jsfiddle.net/kdLpyua4/1/embedded/js,result/dark/"
          frameBorder="0"
        />
      </CodeArea>
    </Content>
  </Fragment>
);

export default Basics;
