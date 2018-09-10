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
import { NavLinks, PrevLink } from 'components/Links';

const Tools = () => (
  <Fragment>
    <H1>5. Ferramentas</H1>
    <Content>
      <InfoText>
        Apêndice e literatura complementar. Algumas ferramentas que uso no dia a dia e que ajudam ou possibilitam o
        desenvolvimento usando frameworks e afins.
      </InfoText>
      <Accordion title="5.1. Node">
        <CodeArea>
          <CodeComment>
            <strong>Node</strong>, popularmente conhecido como <strong>node.js</strong>, é um&nbsp;
            <strong>ambiente de execução</strong> para Javascript, construído sobre a&nbsp;
            <strong>engine <a href="https://developers.google.com/v8/">V8</a> do Google Chrome.</strong> Focado no
            desenvolvimento de servidores, seus principais diferenciais são:
            <ul>
              <li>
                <strong>Entrada/saída orientada a eventos:</strong> código responde a requisições assíncronas de acordo
                com <strong>eventos de usuário</strong> (interações, AJAX, ações síncronas)
              </li>
              <li>
                <strong>Escalabilidade:</strong> ao lidar com eventos, assume-se que&nbsp;
                <strong>não há execuções bloqueantes</strong> e, ao contrário do que acontece com outras
                plataformas, <strong>não cria uma tarefa nova</strong> a cada evento. Dessa forma, o Node lida com cada
                evento utilizando um&nbsp;
                <a href="https://itnext.io/multi-threading-and-multi-process-in-node-js-ffa5bb5cde98">
                  gerenciador próprio
                </a>
              </li>
              <li>
                <strong>Modularidade:</strong> apenas as funcionalidades <strong>básicas</strong> são entregues pelo
                Node. Qualquer extensão da linguagem é feita através de <strong>módulos e frameworks externos</strong>,
                que são gerenciados através de <strong>pacotes e dependências (ver tópico NPM!)</strong>
              </li>
            </ul>
            <strong>
              Os conceitos principais, que viabilizaram o desenvolvimento do Node, são o de&nbsp;
              <a href="https://tableless.com.br/fluxo-de-execucao-assincrono-em-javascript-callbacks/">
                fluxo assíncrono
              </a> e <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/EventLoop">loop de eventos</a>!
            </strong>
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="nodejs"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg"
              style={{
                borderRadius: 0,
                height: 50,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="5.2. NPM">
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0 }}>
            <strong>Node Package Manager (ou simplesmente <a href="https://www.npmjs.com/">NPM</a>)</strong>, como o
            próprio nome sugere, é o gerenciador de pacotes Javascript para o <strong>Node</strong>. É responsável
            por armazenar <strong>metadados</strong> sobre projetos, publicar em <strong>repositórios online</strong>
            &nbsp;e gerenciar <strong>dependências</strong>.
            <br /><br />
            É muito utilizado por <strong>bibliotecas e frameworks</strong> por ser uma plataforma simples de se manter
            e possuir um <strong>portal de buscas</strong>. Permite, também, a definição de <strong>scripts</strong>
            &nbsp;pré-definidos, facilitando muito o processo de <strong>desenvolvimento e build</strong> de projetos
            mais elaborados.
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="npm"
              src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
              style={{
                borderRadius: 0,
                height: 75,
              }}
            />
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingTop: 0 }}>
            <H3>Yarn</H3>
            Considerados pela comunidade como uma <a href="https://tableless.com.br/yarn-evolucao-do-npm/">evolução</a>
            &nbsp;do <strong>NPM</strong>, o <strong>Yarn</strong> é um projeto&nbsp;
            <a href="https://canaltech.com.br/produtos/O-que-e-open-source/">open source</a> desenvolvido pelo&nbsp;
            <strong>Facebook</strong> e mantido por grandes empresas (a principal sendo o <strong>Google</strong>).
            <br /><br />
            Seu principal diferencial é o uso de <strong>cache</strong> para manter repositórios localmente, permitindo
            a <strong>instalação e manutenção offline</strong>. A sintaxe dos comandos é <strong>mais simples</strong>
            &nbsp;que a do NPM e seu <strong>desempenho é muito bom</strong> ao manter projetos de grande escala, se
            tornando uma preferência em muitas empresas.
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="yarn"
              src="https://yarnpkg.com/assets/og_image.png"
              style={{
                borderRadius: 0,
                height: 100,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="5.3. Babel">
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0 }}>
            <strong>Babel</strong>, ou também chamado de <strong>Babel.js</strong>, é um&nbsp;
            <a href="https://pt.wikipedia.org/wiki/Compilador">compilador</a> e&nbsp;
            <a href="https://pt.stackoverflow.com/questions/189894/o-que-%C3%A9-transpila%C3%A7%C3%A3o">transpilador</a>
            &nbsp; para Javascript. É <strong>extremamente popular</strong> devido ao seu suporte contínuo às versões
            do ECMAScript e diversos <a href="https://github.com/babel/awesome-babel">plugins</a>.
            <br /><br />
            Sua principal funcionalidade é converter código <strong>dos padrões atuais para padrões antigos</strong> e
            com maior suporte. Também interpreta a <strong>sintaxe JSX</strong> (muito utilizada em&nbsp;
            <a href="https://reactjs.org/">React</a>) e <strong>tipagem de dados</strong> (utilizada por&nbsp;
            <a href="https://flow.org/">Flow</a> e <a href="https://www.typescriptlang.org/">Typescript</a>).
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="babel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1200px-Babel_Logo.svg.png"
              style={{
                borderRadius: 0,
                height: 100,
              }}
            />
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingTop: 0 }}>
            <H3>preset-env</H3>
            Este <a href="https://babeljs.io/docs/en/next/presets">preset</a> do Babel é responsável por escolher e
            utilizar a <strong>última versão do ECMAScript.</strong> Mantido para versões <strong>ES2015+</strong>, é
            uma configuração muito utilizada por sempre estar a par com a especificação mais recente.
            <br /><br />
            <strong>
                Nos casos onde é necessário ter mais controle sobre a geração de código ou especificar detalhes sobre
                a plataforma-alvo, é recomendado utilizar mais configurações além do padrão!
            </strong>
            <H3>babel-cli</H3>
            Além das configurações, plugins e presets, o Babel disponibiliza uma&nbsp;
            <strong>interface de linha de comando</strong> (ou apenas&nbsp;
            <a href="https://en.wikipedia.org/wiki/Command-line_interface">CLI</a>). Através dela é possível&nbsp;
            <strong>compilar e especificar modificações e regras específicas</strong>, se tornando
            uma ferramenta muito útil para testes e geração de código.
            <br /><br />
            <strong>
              A <a href="https://babeljs.io/docs/en/babel-cli">documentação oficial</a> recomenda instalar o
              &quot;babel-cli&quot; localmente nos repositórios, por questões de compatibilidade e manutenção
              de projeto!
            </strong>
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="es6"
              src="http://www.bobbyberberyan.com/wp-content/uploads/2016/12/ES6LOGO.svg"
              style={{
                borderRadius: 0,
                height: 100,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="5.4. ESLint">
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0 }}>
            <strong>ESLint</strong> é um <a href="https://en.wikipedia.org/wiki/Lint_(software)">linter</a> feito
            especificamente para Javascript. É <strong>muito customizável</strong> e assim como o <strong>Babel</strong>
            &nbsp;possui uma série de plugins e presets. De fato, pode ser utilizado&nbsp;
            <strong>em conjunto com o Babel</strong> como uma forma de pré-compilação. Além de analisar códigos na
            extensão <strong>.js</strong>, pode ser extendido para trabalhar
            com <strong>frameworks, sintaxes híbridas (como é o caso do JSX) e arquivos de teste</strong>.
            <br /><br />
            Os principais motivos para se utilizar um linter são:
            <ul>
              <li>
                <strong>Padronização:</strong> garante que todos os desenvolvedores produzam um código semelhante
              </li>
              <li>
                <strong>Legibilidade:</strong> define estruturas que fazem mais sentido e conseguem ser compreendidas
                por todos
              </li>
              <li>
                <strong>Manutenibilidade:</strong> pelos motivos anteriores, resulta numa identificação mais rápida
                e incisiva de erros
              </li>
            </ul>
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="eslint"
              src="https://cdn.freebiesupply.com/logos/large/2x/eslint-logo-png-transparent.png"
              style={{
                borderRadius: 0,
                height: 100,
              }}
            />
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingTop: 0 }}>
            <H3>Padrão Airbnb</H3>
            A equipe de desenvolvimento da <a href="https://www.airbnb.com.br/">Airbnb</a> especifica uma série de&nbsp;
            <strong>padrões de código</strong> para diversas linguagens.&nbsp;
            <strong>Com o Javascript não é diferente:</strong> o &quot;guia de estilo&quot;
            (<a href="https://github.com/airbnb/javascript">styleguide</a>) define&nbsp;
            <strong>regras sintáticas e semânticas</strong> para a escrita de códigos.
            <br /><br />
            Como é um padrão <strong>robusto e restritivo</strong>, detecta com mais facilidade estruturas&nbsp;
            <strong>legado, antipadrão ou inadequadas</strong>. A mesma equipe que o especificou desenvolveu o
            <a href="https://airbnb.io/enzyme/docs/guides/jest.html">enzyme</a>, ferramenta muito utilizada na
            especificação de testes unitários.
            <br /><br />
            <strong>O plugin da Airbnb com todas as configurações pode ser utilizado no ESLint!</strong>
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="airbnb"
              src="https://eslint.org/img/logos/airbnb.png"
              style={{
                borderRadius: 0,
                height: 50,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="5.5. Webpack">
        <CodeArea>
          <CodeComment style={{ paddingBottom: 0 }}>
            <strong>Webpack</strong> é um <strong>module bundler</strong> (&quot;empacotador&quot; de módulos). Seu
            princípio básico é <strong>juntar</strong> diversos arquivos <strong>.js ou de outras extensões</strong>
            &nbsp;de um projeto em um <strong>conjunto (bundle)</strong> de arquivos finais.
            <br /><br />
            Através de um <strong>grafo de dependências</strong>, o&nbsp;
            <a href="https://medium.com/@gimenete/how-javascript-bundlers-work-1fc0d0caf2da">bundler</a> obtém
            informações sobre <strong>como os arquivos são organizados e se comunicam</strong>. Assim, é determinada a
            melhor forma de <strong>empacotar códigos</strong> de acordo com as configurações passadas.
            <br /><br />
            <strong>
              Os pontos fortes do Webpack são a&nbsp;
              <a href="https://en.wikipedia.org/wiki/Minification_(programming)">minificação</a> e otimização,
              responsáveis por melhorar o desempenho e o tempo de carregamento de recursos.
            </strong>
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="webpack"
              src="https://cdn-images-1.medium.com/max/1600/1*gdoQ1_5OID90wf1eLTFvWw.png"
              style={{
                borderRadius: 0,
                height: 100,
              }}
            />
          </CodeComment>
        </CodeArea>
        <CodeArea>
          <CodeComment style={{ paddingTop: 0 }}>
            <H3>Princípios</H3>
            O Webpack segue alguns <strong>princípios básicos de funcionamento.</strong> Estes precisam ser
            especificados para que o bundle seja gerado corretamente:
            <ul>
              <li>
                <strong>Entry:</strong> define <strong>um ou vários</strong> arquivos de entrada, os quais serão usados
                para gerar o grafo de dependências de acordo com <strong>imports/exports</strong>
              </li>
              <li>
                <strong>Output:</strong> especifica <strong>um ou vários</strong> arquivos de saída, de acordo com os
                <strong>pontos de entrada</strong>
              </li>
              <li>
                <strong>Loaders:</strong> permitem carregar e empacotar arquivos de&nbsp;
                <strong>extensões diferentes</strong>. Por padrão o Webpack interpreta arquivos <strong>.js</strong>,
                então é necessário utilizar <strong>loaders</strong> sempre que há referências para outros formatos
              </li>
              <li>
                <strong>Plugins:</strong> são módulos responsáveis por gerar <strong>builds customizadas</strong> de
                código. Possuem diversas funcionalidades e são aplicadas <strong>durante o processo de bundle</strong>
              </li>
            </ul>
            <H3>Dev Server</H3>
            <strong>Servidor de desenvolvimento em localhost,</strong> configurável com execução e&nbsp;
            recompilação em tempo real <strong>(chamado de &quot;watch mode&quot;).</strong> Permite executar
            requisições a servidores sem problemas e gera <strong>builds de desenvolvimento</strong> que podem ser
            utilizadas para testar o código final.
          </CodeComment>
          <CodeComment style={{ display: 'flex', alignItems: 'center' }}>
            <CentralizedImg
              alt="webpack-schema"
              src="https://cdn-images-1.medium.com/max/800/0*ieedOgpOlC7UQBZM.png"
              style={{
                height: 350,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="5.6. Visual Studio Code">
        <CodeArea>
          <CodeComment>
            5.6. Visual Studio Code
            <H3>Plugins</H3>
          </CodeComment>
          <CodeComment>
            <CentralizedImg
              alt="vscode"
              src="https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png"
              style={{
                borderRadius: 0,
                height: 75,
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <NavLinks>
        <PrevLink to="/4-advanced">4. Avançado</PrevLink>
      </NavLinks>
    </Content>
  </Fragment>
);

export default Tools;
