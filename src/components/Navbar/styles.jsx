import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { GitLogo as GitLogoRaw } from 'components/Icons';

export const Shine = keyframes`
  0% { transform: skewX(-15deg) translateX(0); }
  100% { transform: skewX(-15deg) translateX(120px); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const LinkLogo = styled(Link)`
  display: block;
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

export const GitLogo = styled(GitLogoRaw)`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  fill: #e4e4e4;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25px;
  font-size: 35px;
  font-weight: 700;
  & > a {
    color: #e4e4e4;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-top: 10px;
    &:hover {
      color: #fafafa;
      & > ${GitLogo} { fill: #fafafa; }
    }
    &:focus { outline: none; }
    &::-moz-focus-inner { outline: none; }
  }
`;

export const Chapters = styled.div`
  display: flex;
  background-color: #424242;
`;

export const ChapterLink = styled(Link)`
  color: #fafafa;
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
  padding: 10px 50px;
  transition: all 0.2s ease;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    background: #FDD835;
    color: #fafafa;
    text-shadow: #322b0a 0 3px 50px;
  }
  &:focus { outline: none; }
  &::-moz-focus-inner { outline: none; }  
`;
