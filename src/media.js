import { css } from 'styled-components';

const sizes = {
    mobile: 768,
    tablet: 992,
    desktop: 1200,
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
    return acc;
}, {});

export default media;
