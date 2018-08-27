import styled from 'styled-components';

export const Header = styled.header`
  background-color: #212121;
  height: 150px;
  padding: 20px;
  color: #fafafa;
  font-family: Roboto, sans-serif;
  text-align: center;
`;

export const Logo = styled.img`
  height: 80px;
  width: 80px;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Page = styled.div`
  padding: 5% 15%;
`;
