import styled, { css } from 'styled-components';
import { H2, Chevron as ChevronRaw } from 'components/styles';

export const Container = styled.div`
  transition: all 0.3s ease;
  transform-origin: top;
  ${props => (props.open
    ? css`
      max-height: 2000px;
      transform: scaleY(1);
    `
    : css`
      max-height: 0;
      transform: scaleY(0);
    `
  )}
`;

export const Chevron = styled(ChevronRaw)`
  margin-left: 30px;
  transition: all 0.3s ease;
  ${props => (props.open
    ? css`
      transform: rotate(45deg);
    `
    : css`
      transform: rotate(225deg);
    `
  )}
`;

export const ClickableH2 = styled(H2)`
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-5px);
    & > ${Chevron} {
      color: #e3c22f;
    }
  }
`;
