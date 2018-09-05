import styled, { keyframes } from 'styled-components';

export const Teabag = keyframes`
  0% { transform: translateY(10px); }
  100% { transform: translateY(-10px); }
`;

export const Container = styled.div`
  width: fit-content;
  margin: auto;
  color: #4e4e4e;
  text-align: center;

  & > h1 {
    margin-bottom: 20px;
    color: #212121;
    font-size: 64px;
    font-weight: 700;
  }
`;

export const Img = styled.img`
  height: 125px;
  width: auto;
  color: #4e4e4e;
  margin: 25px;
  animation: ${Teabag} 1s ease-in-out infinite alternate;
`;
