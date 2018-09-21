import styled, { css, keyframes } from 'styled-components';
import {
  Envelope, Facebook, GitLogo, LinkedIn,
} from 'components/Icons';

export const Floater = keyframes`
  0% { transform: translateY(10px); }
  100% { transform: translateY(-10px); }
`;

const Icon = css`
  height: 32px;
  width: 32px;
  display: block;
  fill: #4e4e4e;
  transition: fill 0.2s ease;
`;

export const IconLink = styled.a`
  height: fit-content;
  width: fit-content;
  &:focus { outline: none; }
  &::-moz-focus-inner { outline: none; }

  margin: 15px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
    & > svg {
      fill: #e3c22f;
    }
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  ${Icon}
`;

export const FacebookIcon = styled(Facebook)`
  ${Icon}
`;

export const GitIcon = styled(GitLogo)`
  ${Icon}
`;

export const LinkedInIcon = styled(LinkedIn)`
  ${Icon}
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Portrait = styled.img`
  height: 200px;
  width: 200px;
  margin: 20px auto;
  border-radius: 10px;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px;
`;

export const ShineBig = keyframes`
  0% { transform: skewX(-15deg) translateX(0); }
  25%, 100% { transform: skewX(-15deg) translateX(175px); }
`;

export const LogoContainer = styled.div`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -40px;
    width: 20px;
    height: 115px;
    background: #fafafa;
    opacity: 1;
    transform: skewX(-15deg);
    animation: ${ShineBig} 3s ease infinite;
  }
`;

export const Logo = styled.img`
  height: 115px;
  width: 115px;
`;
