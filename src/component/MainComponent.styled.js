import styled from 'styled-components';
import media from '../media';

const baseSectionStyles = `
  display: flex;
  opacity: 0;
  flex-direction: column;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  visibility: hidden;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1800px;
  border-bottom: 1.5px solid #000000;
  position: relative;
  width: 100%;


  .home {
    text-align: center;
    top: 350px;
    position: absolute;
    left: 49%;
    transform: translateX(-50%);
    font-size: 2.8rem;
    height: 500px;
    width: 700px;
    font-weight: 600;
    font-family: 'PyeongChangPeace-Bold', serif;
  }

  h2 {
    text-align: left;
    margin-left: -170px;
    font-size: 2.3rem;
  }

  .img {
    margin-left: 190px;
    border-bottom: 1px solid #000000;
    height: 200px;
    padding-top: 700px;
    width: 1000px;
    position: relative;
  }

  #meImg {
    position: absolute;
    left: 550;
    bottom: 20px;
    width: 200px;
    height: 200px;
    border-radius: 10%;
  }

  .profile {
    position: absolute;
    left: 170px;
    bottom: 20px;
  }

  .profile p {
    text-align: left;
    margin: 0;
  }

  .phone,
  .email,
  .major {
    font-weight: bold;
    border: 1px solid #000000;
    border-radius: 5px;
    margin: 0;
    padding: 0 5px;
    height: 30px;
  }

  .name {
    font-size: 1.3rem;
    padding: 10px 0 0 50px;
    font-weight: bold;
  }

  .birth {
    font-size: 1.1rem;
    padding: 10px 0 0 50px;
    font-weight: bold;
  }

  .intro {
    padding: 30px 0 0 50px;
  }

  .profile div {
    display: flex;
    gap: 10px;
    height: 12px;
    padding: 25px 0 5px 50px;
  }

  .Me {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    visibility: hidden;
    line-height: 2;
    width: 1200px;
    height: 500px;
    margin-top: -300px;
  }

  .Me.show {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  .txt span {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .txt {
    font-size: 1rem;
    margin: 20px 0 0 190px;
    text-align: left;
    padding-top: 20px;
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

export const Section2 = styled.div`
  ${baseSectionStyles};
  width: 100%;
  height: 1350px;
  border-bottom: 1px solid #000000;


  &.show {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }


  Section2.div {
    width: 1200px;
  }

  h2 {
    margin-left: -700px;
    text-align: left;
    margin-bottom: -30px;
    font-size: 2.5rem;
  }

  h3 {
    text-align: left;
    padding-left: 50px;
    font-size: 1.6rem;
  }

  .sec2-img > h3:nth-child(1) {
    padding-top: 50px;
  }

  .title,
  .sec2-img .easy,
  .normal,
  .hard,
  .tools {
    padding-left: 50px;
    text-align: left;
  }

  .skill {
    display: flex;
  }

  .content {
    margin: 2px 0 0 5px;
  }

  .skill_name {
    background-color: #ffffff;
    border: 1.5px solid black;
    margin: 0 0 10px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 30px;
    width: 110px;
    padding-left: 5px;
    justify-content: flex-start;
    position: relative;
  }
  
  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
    margin-right: auto;
  }
  
  .skill_name p {
    flex-grow: 1;
    text-align: center;
    margin: 0;
  }

  p {
    padding: 0 8px 0 3px;
    font-size: 0.9rem;
    font-weight: 400;
  }

  ${media.desktop`
    width: 100%;
    height: auto;
  `}

  ${media.tablet`
    padding: 0 20px;
  `}

  :${media.mobile`
    display: flex;
    flex-direction column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0;
    margin: 0 auto;
 
  `}
`;

export const Section3 = styled.div`
  ${baseSectionStyles};
  width: 100%;
  height: 1700px;
  border-bottom: 1px solid #000000;

  &.show {
    opacity: 1;
    transform: translateY(0px);
    visibility: visible;
  }

  h2 {
    margin-left: -660px;
    font-size: 2.3rem;
    text-align: left;
    padding: 0 0 50px 0;
  }

  .project {
    display: flex;
    gap: 50px;

    flex-wrap: wrap;
    width: calc((100% - 50px) / 2);
    justify-content: center;
  }

  .project1,
  .project2,
  .project3,
  .project4 {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    border: 1px solid black;
  }

  .project1,
  .project2 {
    height: 450px;
    width: 350px;
  }
  
  .project3,
  .project4 {
    width: 350px;
    height: 725px;
  }

  .project1:hover,
  .project2:hover,
  .project3:hover,
  .project4:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }

  .portName {
    display: flex;
    gap: 10px;
    justify-content: left;
    margin-left: 8px;
    height: 50px;
    margin-top: -15px;
  }

  .portName > p:first-child {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .portName > p:last-child, .participation > p:nth-child(2) {
    padding-top: 11px;
  }

  .portTxt, .participation {
    text-align: left;
    padding: 0 10px;
  }

  .portTxt > p:first-child{
    margin-top: 7px;
  }

  .portTxt > p:nth-child(2) {
    margin: -10px 0 20px 0;
  }

  .portTxt > p:nth-child(3), .participation > p:first-child {
    text-align: center;
    background-color: #dce0ec;
    height: 30px;
    width: 60px;
    border-radius: 30px;
    margin: -10px 0 -10px 0;
  }
  
  .portTxt > p:last-child {
    padding-bottom: 10px;
  }

  .participation > p:last-child {
    font-size: 0.9rem;
    white-space: normal;
    word-break: keep-all;;
  }

  video {
    width: 350px;
    height: 200px;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
  }

  .click {
    position: absolute;
    background-color: #dce0ec;
    z-index: 15;
    padding: 5px 10px;
    border-radius: 15px;
    left: 41%;
    top: 80px;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s, opacity 0.5s linear;
  }

  .portImg:hover .click {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }

  .portImg:hover video {
    opacity: 0.2;
  }

  .typewriter span {
  }

  .typewriter-cursor {
    display: none;
  }

  ${media.desktop`
    width: 100%;
  `}

  ${media.tablet`
    height: auto;
    padding: 0 20px;
  `}

  ${media.mobile`
    font-size: 0.8rem;
    margin-left: -20px;
    height: 2200px;
     margin: 0 auto;
    
    .project {
      padding: 0 15px;
    }
    
    h2 {
      padding: 0;
      text-align : center;
      margin-left: -10px;
    }
    
    .project1, .project2, .project3, .project4 {
      width: calc(100% - 30px);
      margin: 0 auto;
      box-sizing: border-box;
    }

    .portName > p:first-child {
      font-size : 1rem;
      padding-top : 5px;
    }

    
    video {
      width: 100%;
    }
  `}
`;

export const Section4 = styled.div`
  width: 1200px;
  height: 800px;
  margin: 0 auto;

  form {
    text-align: left;
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background: #fff;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 2.3rem;
    text-align: left;
    padding: 30px 0 0 190px;
  }

  form h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  form label {
    font-size: 16px;
    margin-bottom: 5px;
  }

  form input[type="text"],
  form input[type="email"],
  form textarea {
    padding: 12px;
    border: 1.5px solid black;
    border-radius: 4px;
    margin-bottom: 20px;
  }

  form textarea {
    height: 150px;
    overflow-y: auto;
    resize: none;
  }

  form input:focus,
  textarea:focus {
    outline: none;
    border: 2px solid #000000;
  }

  form button[type="submit"] {
    padding: 10px 20px;
    background-color: #ffffff;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  form button[type="submit"]:hover {
    background-color: #000000;
    color: white;
  }

  form input[type="text"],
  form input[type="email"],
  form textarea,
  form button[type="submit"] {
    width: 100%;
    box-sizing: border-box;
    outline: none;
  }

  form textarea {
    height: 150px;
  }

  ${media.desktop`
   margin: 0 auto;
    width: 100%;
    height: auto;
  `}

  ${media.tablet`
    padding: 0 20px;
  `}

  ${media.mobile`
    padding: 0 10px;
    
    
    h2 {
      margin-left:-150px;
    }
  `}
`;
