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
            5.1. Node
          </CodeComment>
          <CodeComment>
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
            próprio nome sugere, é um gerenciador de pacotes Javascript baseado no <strong>Node</strong>. É responsável
            por armazenar <strong>metadados</strong> sobre projetos, publicar em <strong>repositórios online</strong>
            &nbsp;e gerenciar <strong>dependências</strong>.
            <br /><br />
            É muito utilizado por <strong>bibliotecas e frameworks</strong> por ser uma plataforma simples de se manter
            e possuir um <strong>portal de buscas</strong>. Permite, também, a definição de <strong>scripts</strong>
            &nbsp;pré-definidos, facilitando muito o processo de <strong>desenvolvimento e build</strong> de projetos
            mais elaborados.
          </CodeComment>
          <CodeComment>
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
          <CodeComment>
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
          <CodeComment>
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
          <CodeComment>
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
          <CodeComment>
            5.4. ESLint
            <H3>Padrão Airbnb</H3>
          </CodeComment>
          <CodeComment>
            <CentralizedImg
              alt="eslint"
              src="https://cdn.freebiesupply.com/logos/large/2x/eslint-logo-png-transparent.png"
              style={{
                borderRadius: 0,
                height: 100,
              }}
            />
            <CentralizedImg
              alt="airbnb"
              src="https://eslint.org/img/logos/airbnb.png"
              style={{
                borderRadius: 0,
                height: 50,
                marginTop: '2em',
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="5.5. Webpack">
        <CodeArea>
          <CodeComment>
            5.5. Webpack
            <H3>Configurações</H3>
            <H3>Dev Server</H3>
          </CodeComment>
          <CodeComment>
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
