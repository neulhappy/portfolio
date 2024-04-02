import styled, { keyframes } from 'styled-components';
import media from '../media';

const fadeInOut = keyframes`
  0%, 100% { opacity: 0; }
  25%, 75% { opacity: 0.7; }
`;

const bubbleRise = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const Background = styled.div`
  .bg, .bg2 {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    z-index: -1;
    animation: ${fadeInOut} 10s ease-in-out infinite;
  }

  .bg {
    width: 200px;
    height: 200px;
    top: -30%;
    left: 15%;
  }

  .bg2 {
    width: 100px;
    height: 100px;
    top: 30%;
    left: 75%;
  }
`;

export const Bubble = styled.div`
  .bubble1, .bubble2, .bubble3, .bubble4, .bubble5, .bubble6, .bubble7, .bubble8, .bubble9, .bubble10, .bubble11, .bubble12, .bubble13, .bubble14, .bubble15 {
    opacity: 0;
    position: absolute;
    border-radius: 50%;
    z-index: 1;
    animation: ${bubbleRise} 3s ease-out infinite;
    animation-fill-mode: forwards;
  }
  
  .bubble1 { width: 70px; height: 70px; background: #faffcd; top: 27%; left: -50%; animation-delay: 0.5s; }
  .bubble2 { width: 50px; height: 50px; background: #d1c9ff; bottom: 50%; left: -20%; animation-delay: 1s; }
  .bubble3 { width: 60px; height: 60px; background: #ffc8c8; top: 80%; left: 0; animation-delay: 1.5s; }
  .bubble4 { width: 50px; height: 50px; background: #c8fffa; bottom: 20%; right: -30%; animation-delay: 2s; }
  .bubble5 { width: 50px; height: 50px; background: #fff7cb; bottom: 25%; right: -80%; animation-delay: 2.5s; }
  .bubble6 { width: 50px; height: 50px; background: #ffeefb; left: 50%; bottom: 50%; animation-delay: 3s;  }
  .bubble7 { width: 60px; height: 60px; background: #c8c8ff; left: 30%; bottom: 30%; animation-delay: 3.5s; }
  .bubble8 { width: 60px; height: 60px; background: #bdffb0; left: -100%; bottom: 10%; animation-delay: 4s; }
  .bubble9 { width: 60px; height: 60px; background: #fff4b4; left: 140%; bottom: 80%; animation-delay: 4.5s; }
  .bubble10 { width: 60px; height: 60px; background: #c1fae4; right: 0; bottom: 30%; animation-delay: 5s; }
  .bubble11 { width: 70px; height: 70px; background: #ffdada; top: 5%; left: 110%; animation-delay: 5.5s; }
  .bubble12 { width: 50px; height: 50px; background: #add8e6; left: 20%; top: -17%; animation-delay: 2s; }
  .bubble13 { width: 60px; height: 60px; background: #ffdade; left: 75%; top: -5%; animation-delay: 2.5s; }
  .bubble14 { width: 70px; height: 70px; background: #c0efc0; left: 50%; top: -20%; animation-delay: 3s; }
  .bubble15 { width: 80px; height: 80px; background: #fffacd; left: 10%; top: -10%; animation-delay: 3.5s; }
`;