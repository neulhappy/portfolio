import styled from 'styled-components';
import media from '../media';

export const Header = styled.header`
  background: #ebecf6;
  padding: 20px 0;
  width: 100%;
  z-index: 999;
  display: flex;
  position: fixed;
  justify-content: center;
  border-bottom: 1px solid white;
  top: 0;
  left: 0;
  right: 0;
  
  
  h1 {
    font-size: 1.5rem;
    width: 400px;
    text-align: center;
    transition: all 0.3s;
  }
  h1:hover {
    color: #9872af;
  }

  #gnb {
    display: flex;
    text-align: center;
    justify-content: right;
    width: 500px;
    gap: 20px;
    padding-right: 80px;
  }
  #gnb li{
    padding-top: 2px;
    font-size: 1.2rem;
    transition: all 0.3s;
  }

  #gnb li:hover {
    background: #dec9ec;
    border-radius: 50%;
  }
  
  ${media.desktop``}
  ${media.tablet``}
  ${media.mobile``}
`;
