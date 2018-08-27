import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Shine = keyframes`
  0% { transform: skewX(-15deg) translateX(0); }
  100% { transform: skewX(-15deg) translateX(120px); }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #212121;
  height: auto;
  padding: 20px;
  color: #fafafa;
  font-family: Roboto, sans-serif;
  text-align: center;
`;

export const Logo = styled.img`
  height: 80px;
  width: 80px;
`;

export const Page = styled.div`
  padding: 5% 15%;
`;

export const LinkLogo = styled(Link)`
  position: relative;
  transition: transform 0.2s ease;
  overflow: hidden;
  &:hover {
    transform: translateY(-5px);
    &::after {
      animation: ${Shine} 0.6s ease 1 alternate;
    }
  }

  &:focus { outline: none; }
  &::-moz-focus-inner { outline: none; }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -30px;
    width: 20px;
    height: 80px;
    background: #fafafa;
    opacity: 1;
    transform: skewX(-15deg);
  }
`;

export const LogoText = styled.div`
  margin-left: 25px;
  font-size: 35px;
  font-weight: 700;
`;
