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
  border-radius: 10px;
`;
