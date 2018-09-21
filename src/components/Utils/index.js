import { css } from 'styled-components';

export const sizes = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
