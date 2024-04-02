import styled from 'styled-components';
import media from '../media';

const baseSectionStyles = `
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  visibility: hidden;
  align-items: center;
  margin: 0 auto;
`;

export const Section1 = styled.div`
  height: 1300px;
  margin-top: 250px;
  border-bottom: 1px solid white;
  position: relative;

  &.show {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  .home {
    top: 100px;
    position: absolute;
    left: 220px;
    font-size: 2.8rem;
    height: 300px;
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
    border-bottom: 1px solid white;
    height: 180px;
    padding-top: 700px;
    width: 1000px;
    position: relative;
  }

  #me {
    position: absolute;
    left: 0;
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

  .name,
  .birth,
  .phone,
  .email,
  .major {
    font-weight: bold;
    background: white;
    border-radius: 5px;
    margin: 0;
    padding: 0 5px;
    height: 30px;
  }

  .name {
    font-size: 1.3rem;
    padding: 10px 0 0 50px;
  }

  .birth {
    font-size: 1.1rem;
    padding: 10px 0 0 50px;
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
  ${baseSectionStyles}
  width: 1200px;
  height: 1500px;
  border-bottom: 1px solid white;

  &.show {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  h2 {
    text-align: left;
    padding: 30px 0 0 190px;
    font-size: 2.5rem;
  }

  h3 {
    text-align: left;
    padding: 0 0 0 190px;
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
    padding-left: 190px;
  }

  .skill {
    display: flex;
  }

  .content {
    margin : 2px 0 0 5px;
  }

  .skill_name {
    background-color: white;
    margin: 0 0 10px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 110px;
    padding-left: 5px;
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
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

  ${media.mobile`
    padding: 0 10px;
  `}
`;

export const Section3 = styled.div`
  ${baseSectionStyles}
  width: 1200px;
  height: 1300px;
  border-bottom: 1px solid white;

  &.show {
    opacity: 1;
    transform: translateY(0px);
    visibility: visible;
  }

  h2 {
    font-size: 2.3rem;
    text-align: left;
    padding: 30px 0 50px 190px;
  }

  .project {
    display: flex;
    gap: 50px;
    padding: 0 0 0 190px;
    flex-wrap: wrap;
  }

  .project1,
  .project2,
  .project3,
  .project4 {
    height: 450px;
    width: 350px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    box-shadow: 5px 5px 10px 0px rgba(115, 115, 115, 0.3);
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

  .portName > p:last-child {
    padding-top: 11px;
  }

  .portTxt {
    text-align: left;
    padding: 0 10px;
  }

  .portTxt > p:first-child {
    margin-top: 7px;
  }

  .portTxt > p:nth-child(2) {
    margin: -10px 0 20px 0;
  }

  .portTxt > p:nth-child(3) {
    text-align: center;
    background-color: #dce0ec;
    height: 30px;
    width: 60px;
    border-radius: 30px;
    margin: -10px 0 -10px 0;
  }

  video {
    width: 340px;
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
    top: 19%;
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
    padding: 0 10px;
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
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
    border: 1px solid #ccc;
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
    outline: none; /* 기본 포커스 테두리 제거 */
    border: 2px solid #cac6ce; /* 파란색 테두리 추가 */
  }

  form button[type="submit"] {
    padding: 10px 20px;
    background-color: #e3e5f6;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  form button[type="submit"]:hover {
    background-color: #c5cbf6;
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
    width: 100%;
    height: auto;
  `}

  ${media.tablet`
    padding: 0 20px;
  `}

  ${media.mobile`
    padding: 0 10px;
  `}
`;
