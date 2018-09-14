import React, { Fragment } from 'react';
import {
  H1,
  H3,
  Content,
  CodeArea,
  CodeComment,
  InfoText,
  CentralizedImg,
} from 'components/styles';
import Accordion from 'components/Accordion';
import { NavLinks, NextLink } from 'components/Links';

const WtfIsJs = () => (
  <Fragment>
    <H1>1. WTF is JS</H1>
    <Content>
      <InfoText>
        <b>Ahhh... Javascript.</b> Odiada por uns, amada por outros, é uma das&nbsp;
        <b>linguagens de programação mais importantes e populares</b> em sistemas Web, sobrevivendo bravamente&nbsp;
        <b>após décadas de seu lançamento!</b>&nbsp;
        Está presente desde os <b>primórdios da internet</b>, tendo papel fundamental na sua popularização e na
        história da computação como um todo. Suas características sofreram <b>grandes mudanças</b> com o passar do tempo
        e o surgimento de novas necessidades, mantendo apenas as funcionalidades essenciais entre suas versões.
        <br /><br />
        Neste capítulo introdutório, abordei algumas <b>informações históricas e curiosidades</b> como forma de
        contextualização e descontração. Embora <b>não seja necessário ler ele antes de começar</b> a programar, é
        sempre uma literatura interessante. Explico, também, alguns <b>jargões e termos</b> que são muito populares
        entre os programadores. <b>Alguns pontos importantes serão lembrados adiante no minicurso,</b> então não se
        preocupe se quiser pulá-lo :)
        <br /><br />
        <b>Vamos nessa!</b>
        <CentralizedImg
          alt="js"
          src="https://fsmedia.imgix.net/69/05/d6/3b/4693/4ad7/b469/a8fbf23d5c44/jscript.gif"
          style={{
            marginTop: '1em',
            height: 200,
          }}
        />
      </InfoText>
      <Accordion title="1.1. Origem">
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0 }}>
            <b>Javascript</b>, ou simplesmente <b>JS</b>, é uma linguagem de programação de&nbsp;
            <a href="https://becode.com.br/linguagens-alto-nivel-x-baixo-nivel/">alto nível</a> desenvolvida em meados
            de 1996 pelo programador <strike>Tom Hanks</strike> <b>Brendan Eich</b>, que foi posteriormente um dos
            fundadores da <b>Mozilla Corporation</b>. A linguagem foi desenvolvida no auge da <b>Netscape</b>, como uma
            solução para rodar <b>scripts do lado do cliente</b> e <b>interagir a interações de usuário</b>, eliminando
            a necessidade de pedir requisições para um servidor.
            <br /><br />
            Inicialmente desenvolvida para o <b>Netscape Navigator</b>, teve seu suporte extendido para outras
            plataformas e atualmente é a <b>linguagem mais popular para programação client-side.</b> Assim como o&nbsp;
            <b>
              <a href="https://www.hostinger.com.br/tutoriais/o-que-e-html-conceitos-basicos/">HTML</a> e o&nbsp;
              <a href="https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css/">CSS</a>
            </b>, passou por mudanças cruciais e hoje é utilizada também para&nbsp;
            <b>códigos do lado do servidor</b>.
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="brendan_eich"
              // eslint-disable-next-line
              src="https://cnet4.cbsistatic.com/img/gRItWJMKsaqeAKIOnSbD31qzwew=/570x0/2012/02/26/24cf0440-f0e6-11e2-8c7c-d4ae52e62bcc/20120226_Brendan_Eich_001.jpg"
              style={{
                height: 200,
              }}
            />
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0, paddingTop: 0 }}>
            <H3>Protótipo</H3>
            Para defender a <b>proposta</b> da linguagem em relação com outras já existentes e estreitar as relações
            com a <b>Sun Microsystems (desenvolvedora do Java)</b>, a <b>Netscape</b> encarregou <b>Eich</b> para
            elaborar um protótipo.
            <br /><br />
            O protótipo, originalmente chamado de <b>Mocha</b> e lançado como <b>LiveScript</b> na sua versão Beta,
            foi feito em <b>apenas 10 dias!</b>
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="netscape"
              // eslint-disable-next-line
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Netscape_logo.svg/2000px-Netscape_logo.svg.png"
              style={{
                borderRadius: 0,
                height: 50,
              }}
            />
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingTop: 0 }}>
            <H3>Não é Java!</H3>
            Seu nome pode sugerir uma similaridade a linguagem&nbsp;
            <a href="https://www.java.com/en/download/faq/whatis_java.xml">Java</a>, mas não se engane:&nbsp;
            <b>Javascript não tem nada a ver com Java!</b> De fato a confusão vem desde seu lançamento, já que a&nbsp;
            <b>Netscape</b> também desenvolvia na época o suporte para <b>Java</b>.
            <br /><br />
            Seu nome final foi o resultado de uma <b>campanha de marketing</b> em conjunto com a&nbsp;
            <b>Sun Microsystems</b> para aproveitar a popularidade das linguagens (e lançá-las em conjunto).
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="java"
              src="https://diylogodesigns.com/wp-content/uploads/2017/07/java-logo-vector-768x768.png"
              style={{
                borderRadius: 0,
                height: 150,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="1.2. Evolução">
        1.2. Evolução
        <H3>ECMAScript</H3>
        <H3>Multiparadigma</H3>
      </Accordion>
      <Accordion title="1.3. Aplicações">
        1.3. Aplicações
        <H3>Client-side</H3>
        <H3>Server-side</H3>
      </Accordion>
      <Accordion title="1.4. Vanilla X Frameworks">
        1.4. Vanilla X Frameworks
        <H3>jQuery</H3>
        <H3>Node</H3>
      </Accordion>
      <NavLinks>
        <NextLink to="/2-basics">2. Básico</NextLink>
      </NavLinks>
    </Content>
  </Fragment>
);

export default WtfIsJs;
