import styled from 'styled-components';
import media from '../media';

export const Footer= styled.footer `
  height: 100px;

  img {
    width: 50px;
  }
  ${media.desktop`
    height: 1100px;
    margin-top: 200px;
  `}

  ${media.tablet`
    height: 900px;
    margin-top: 150px;
  `}

  ${media.mobile`
    height: 700px;
    margin-top: 100px;
  `}
  
`;