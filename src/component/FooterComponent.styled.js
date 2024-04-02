import styled from 'styled-components';
import media from '../media';

export const Footer= styled.footer `
  height: 100px;
  text-align: center;

  img {
    width: 50px;
  }
  ${media.desktop`
    height: 90px;
  `}

  ${media.tablet`
    height: 70px;
  `}

  ${media.mobile`
    height: 50px;
  `}
  
`;