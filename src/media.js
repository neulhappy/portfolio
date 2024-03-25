// media.js
import { css } from 'styled-components';

const sizes = {
    mobile: 768, // 예: 768px 이하를 모바일로 간주
    tablet: 992, // 예: 992px 이하를 태블릿으로 간주
    desktop: 1200, // 예: 1200px 이하를 데스크탑으로 간주
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
    return acc;
}, {});

export default media; // default export
