import styled, { css } from 'styled-components';
import { H2 } from 'components/styles';

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

export const Chevron = styled.div`
  border-right: 5px solid #424242;
  border-bottom: 5px solid #424242;
  height: 10px;
  width: 10px;
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
      border-right: 5px solid #e3c22f;
      border-bottom: 5px solid #e3c22f;
    }
  }
`;
