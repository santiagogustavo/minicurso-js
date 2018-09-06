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
          <CodeComment>
            5.2. NPM
            <H3>Yarn</H3>
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
            <CentralizedImg
              alt="yarn"
              src="https://yarnpkg.com/assets/og_image.png"
              style={{
                borderRadius: 0,
                height: 100,
                marginTop: '2em',
              }}
            />
          </CodeComment>
        </CodeArea>
      </Accordion>
      <Accordion title="5.3. Babel">
        <CodeArea>
          <CodeComment>
            5.3. Babel
            <H3>preset-env</H3>
            <H3>babel-cli</H3>
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
