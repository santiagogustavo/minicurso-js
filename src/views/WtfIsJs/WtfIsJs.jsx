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
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0 }}>
            Pouco tempo após seu lançamento e suporte pela <b>Microsoft</b>, a <b>Netscape</b> enviou o Javascript para
            a <b>ECMA International (European Computer Manufacturers Association)</b> para padronização. A motivação era
            permitir que desenvolvedores de <b>outros navegadores</b> pudessem implementar o suporte de maneira
            similar a da Netscape.
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="ecma_intl"
              src="https://upload.wikimedia.org/wikipedia/de/a/a8/Ecma_international_Logo.png"
              style={{
                height: 75,
              }}
            />
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingTop: 0 }}>
            <H3>ECMAScript</H3>
            O resultado dessa parceria foi a especificação de linguagem de programação&nbsp;
            <b>ECMAScript (ou simplesmente ES).</b> Sua primeira versão foi lançada em 1997, e progressivamente se
            adequou a padrões <b>ISO/IEC</b>.
            <br /><br />
            Alterações são propostas em <b>eventos internacionais</b> e divulgadas pela própria associação. A versão
            mais conhecida e com maiores mudanças é a <b>ES6 (ECMAScript2015)</b>.&nbsp;
            <b>Ela é tão importante que separei um capítulo só para explicá-la!</b>
            <br /><br />
            Apesar de Javascript ser a implementação <b>mais próxima do ES</b>, outras linguagens e interpretadores
            utilizam o padrão proposto pela ECMA.&nbsp;
            <b>
              São exemplos:&nbsp;
              <ul>
                <li>
                  <a href="https://developers.google.com/v8/">Chrome V8</a> (Google)
                </li>
                <li>
                  <a href="https://www.adobe.com/devnet/actionscript/learning.html">ActionScript</a> (Adobe)
                </li>
                <li>
                  <a href="https://msdn.microsoft.com/library/hbxc2t98.aspx">JScript</a> (Microsoft)
                </li>
              </ul>
            </b>
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="jscript"
              src="https://upload.wikimedia.org/wikipedia/en/e/e8/Jscript_icon.gif"
              style={{
                height: 75,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="1.3. Aplicações">
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0 }}>
            <b>Desde sua concepção,</b> a flexibilidade é uma característica fundamental no Javascript.
            A linguagem foi expandida para fazer desde <b>operações aritméticas simples</b> até&nbsp;
            <a href="https://threejs.org/">engines 3D avançadas</a>.&nbsp;
            <b>Existem infinitas aplicações diferentes:</b> para uma visão mais abrangente podemos fazer uma análise
            dos múltiplos <b>paradigmas e plataformas de execução</b>.
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0, paddingTop: 0 }}>
            <H3>Multiparadigma</H3>
            <ul>
              <li>
                <b>Imperativo/Declarativo:</b> permite <b>descrever os fluxos</b> de controle e de execução,
                especificando o uso de operadores e atribuições <b>(imperativo)</b>, assim como&nbsp;
                <b>descrever as lógicas</b> sem precisar lidar com as estruturas internas da linguagem&nbsp;
                <b>(declarativo)</b>;
              </li>
              <li>
                <b>Orientação a objetos:</b> embora o conceito de classes só tenha sido suportado&nbsp;
                <b>a partir do ES6</b>, praticamente tudo em Javascript depende do conceito de orientação a
                objetos. <b>Até os tipos básicos de dados são objetos!</b>
              </li>
              <li>
                <b>Funcional:</b> é um conceito essencial, onde as funções baseiam-se em <b>cálculos matemáticos</b>
                &nbsp;e minimizam o uso de <b>estados compartilhados e dados mutáveis</b>;
              </li>
              <li>
                <b>Concorrente:</b> embora não trate explicitamente acessos através de diretrizes ou semáforos&nbsp;
                <b>(parcialmente concorrente)</b>, é possível realizar operações simultâneas e em regiões críticas
                através de <a href="https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX/Getting_Started">AJAX</a>;
              </li>
              <li>
                <b>Reativo:</b> muito presente em <b>frameworks atuais (Angular, Vue e React)</b>, descreve a capacidade
                do código <b>reagir (ser sensível)</b> a mudanças assíncronas.
              </li>
            </ul>
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="orly_hate"
              src="https://i.redd.it/faihjt65cuez.png"
              style={{
                borderRadius: 0,
                height: 250,
              }}
            />
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingTop: 0 }}>
            <H3>Multiplataforma</H3>
            <ul>
              <li>
                <b>Web:</b> principal <b>&quot;área de atuação&quot;</b> e pioneiro nela! Como exemplo, pode ser
                utilizado na criação de <b>sites estáticos, sites dinâmicos, emails e landing pages</b>;
              </li>
              <li>
                <b>Desktop:</b> através de plataformas como o <a href="https://electronjs.org/">Electron</a>, é possível
                desenvolver aplicações nativas para sistemas operacionais de computadores.&nbsp;
                <b>O processo de geração funciona quase como um navegador abrindo uma página!</b>
              </li>
              <li>
                <b>Mobile:</b> assim como no <b>desktop</b>, existem plataformas para a geração de aplicações nativas
                em sistemas operacionais mobile&nbsp;
                <b>(o mais conhecido sendo o <a href="https://facebook.github.io/react-native/">React Native</a>)</b>.
                Um conceito novo de aplicações, o&nbsp;
                <a href="https://pplware.sapo.pt/software/pwa-mudarao-forma-usamos-dispositivos/">PWA</a>&nbsp;
                <b>(Progressive Web Apps)</b>, une aplicações web e mobile.
              </li>
            </ul>
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="orly_less"
              src="http://images.virtualdesign.pl/images/7777js-tlkp.jpg"
              style={{
                borderRadius: 0,
                height: 250,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="1.4. Vanilla X Frameworks">
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0 }}>
            <a href="http://vanilla-js.com/">Vanilla JS</a> é um poderoso framework de Javascript, que está presente em
            praticamente <b>todas as aplicações web</b>.
            <br /><br />
            <b>Sarcasmos a parte</b>, Vanilla é um termo em computação utilizado para definir uma linguagem de
            programação em seu estado &quot;natural&quot;, sem extensões ou uso de frameworks. No ambiente web, mais
            especificamente no&nbsp;
            <a
              href="https://tableless.com.br/os-dois-tipos-de-front-end-design-e-o-engineer-parte-1-uma-breve-historia/"
            >
              Front-end
            </a>, é muito comum surgirem <b>novas extensões para as linguagens</b>, causando uma obsolescência rápida e
            tornando mais delicada a manutenção de projetos.
            <br /><br />
            Muitas vezes, os frames e bibliotecas fazem <b>operações redundantes e menos eficientes (overhead)</b>.
            Isso ocorre por <b>decisões de implementação</b>, tais como uso de&nbsp;
            <b>sintaxe própria e extensões de operações nativas</b>.
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="vanilla"
              // eslint-disable-next-line
              src={'https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=gEVXNI3DxK1QldV0AsvdTvsxRlI%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oIQY_PTWn8CnL_5aaEFHbrCKaoE8Dr1gYee0gC91MtLq3sGWO9R47vdMy6P7Mo1saycY2nbhUPZxcJ0Tsc04Zua1Z06pH7V7qlOX4chrgIPWmrbrvsc1N5Hng9xMS9Eq3UO3Fc1wGGeczKM8dBZuNXvYRYkHBag-WSDf5q_thA-XtmzVbs'}
              style={{
                height: 100,
              }}
            />
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingTop: 0 }}>
            <H3>jQuery</H3>
            <a href="https://jquery.com/">jQuery</a> é um dos frameworks de Javascript mais conhecidos e utilizados.
            De fato, ele é utilizado até em <b>outros frames igualmente populares</b>, como é o caso do&nbsp;
            <a href="https://getbootstrap.com/">Bootstrap</a>. Suas características principais são:
            <ul>
              <li>
                <b>Sintaxe própria,</b> marcada pelo operador <b>$ e operações declarativas</b>, facilitando a
                recuperação e manipulação de objetos do DOM
              </li>
              <li>
                <b>Compatibilidade <a href="https://pt.wikipedia.org/wiki/Cross-browser">cross-browser</a></b>, é o
                principal atrativo e foi seu diferencial num tempo onde boa parte das operações eram
                implementadas de forma <b>diferente em cada navegador</b>
              </li>
            </ul>
            É um caso bem conhecido de <b>uso excessivo de recursos:</b> por aplicar <b>muitas transformações</b> no
            código e fornecer <b>suporte entre os navegadores em tempo de execução</b>, acaba sendo&nbsp;
            {/* eslint-disable-next-line */}
            <a href="https://medium.com/@trombino.marco/you-might-not-need-jquery-a-2018-performance-case-study-aa6531d0b0c3">
                bem mais lento
            </a>.
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="jquery"
              src="https://logodownload.org/wp-content/uploads/2017/10/jquery-logo.png"
              style={{
                borderRadius: 0,
                height: 50,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <NavLinks>
        <NextLink to="/2-basics">2. Básico</NextLink>
      </NavLinks>
    </Content>
  </Fragment>
);

export default WtfIsJs;
