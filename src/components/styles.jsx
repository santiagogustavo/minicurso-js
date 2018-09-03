import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  color: #424242;
  font-size: 46px;
  font-weight: 700;
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  color: #424242;
  margin-top: 42px;
  font-size: 38px;
  font-weight: 700;
`;

export const H3 = styled.h3`
  display: flex;
  align-items: center;
  color: #4e4e4e;
  margin-top: 28px;
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 700;
`;

export const InfoText = styled.p`
  font-size: 16px;
  line-height: 1.5em;
`;

export const Content = styled.div`
  padding-left: 25px;
`;

export const CodeArea = styled.div`
  display: flex;
`;

export const CodeComment = styled.div`
  flex: 1;
  padding: 20px;
  padding-right: 25px;
`;

export const CodeBlock = styled(SyntaxHighlighter)`
  flex: 1;
  border-radius: 10px;
`;

export const CodeFrame = styled.iframe`
  flex: 1;
  border-radius: 10px;
`;

export const Chevron = styled.div`
  border-right: 5px solid;
  border-bottom: 5px solid;
  height: 10px;
  width: 10px;
`;
