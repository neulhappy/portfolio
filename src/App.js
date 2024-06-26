import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typewriter from 'typewriter-effect';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import media from './media';
import { GlobalStyles } from './assets/GlobalStyles.js';
import { Section1, Section2, Section3, Section4 } from './component/MainComponent.styled.js';
import { Header } from './component/HeaderComponent.Styled.js';
import { Background, Bubble } from './component/BubbleComponent.styled.js';
import { Footer } from './component/FooterComponent.styled.js';


function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            emailjs.sendForm('service_mnu0zoh', 'template_l0rrhyw', e.target, '1Jf3_0HvKGY2fJfWM')
                .then((result) => {
                    toast.success("메일을 보냈습니다!");
                }, (error) => {
                    toast.error("메일을 보내는데 실패했습니다..");
                });
        } else {
            toast.error("내용을 입력해주세요.");
        }
    };

    return (
        <div id="sec4">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Message
                        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                    </label>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}


function App() {
    const [showMe, setShowMe] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const ref = useRef(null);
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);


    const scrollToRef = (ref) => {
        let offset = 0;
        if (ref === aboutMeRef) {
            offset = 350;
        } else {
            offset = -100;
        }
        const topPos = ref.current.offsetTop + offset;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 520) setShowMe(true);
            else setShowMe(false);

            if (scrollPosition > 1150) setShowSkills(true);
            else setShowSkills(false);

            if (scrollPosition > 2700) setShowProjects(true);
            else setShowProjects(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <div className="App">
        <GlobalStyles />
        <Header id="App_header">
            <h1>Haneul's Portfolio</h1>
            <nav>
                <ul id="gnb">
                    <li onClick={() => scrollToRef(homeRef)}>Home</li>
                    <li onClick={() => scrollToRef(aboutMeRef)}>About Me</li>
                    <li onClick={() => scrollToRef(skillsRef)}>Skills</li>
                    <li onClick={() => scrollToRef(projectsRef)}>Project</li>
                    <li onClick={() => scrollToRef(contactRef)}>Contact</li>
                </ul>
            </nav>
        </Header>
        <main ref={homeRef}  id="App_main">
            <div id="inner">
                <Section1 id="sec1">
                    <div className="home">
                        <div className="event">
                            <Background>
                                <div className="bg"></div>
                                <div className="bg2"></div>
                            </Background>
                            <Bubble>
                                <div className="bubble1"></div>
                                <div className="bubble2"></div>
                                <div className="bubble3"></div>
                                <div className="bubble4"></div>
                                <div className="bubble5"></div>
                                <div className="bubble6"></div>
                                <div className="bubble7"></div>
                                <div className="bubble8"></div>
                                <div className="bubble9"></div>
                                <div className="bubble10"></div>
                                <div className="bubble11"></div>
                                <div className="bubble12"></div>
                                <div className="bubble13"></div>
                                <div className="bubble14"></div>
                                <div className="bubble15"></div>
                            </Bubble>
                        </div>
                        <Typewriter
                            options={{
                                strings: ['HANEUL KIM<br/>Front-end ' +
                                'Developer<br/><br/><br/><span>⭣</span>'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 100,
                                delay: 95,
                                cursorClassName:'typewriter-cursor'
                            }}
                        />
                    </div>
                    <div  className={`Me ${showMe ? 'show' : ''}`}>
                        <div className="img">
                            <img id="meImg" src="/images/Me.jpg"/>
                            <div ref={aboutMeRef} className="profile">
                                <h2>About Me</h2>
                                <p className="name">김하늘</p>
                                <p className="birth">1996.08.29</p>
                                <div>
                                    <p className="phone">010-7529-9281</p>
                                    <p className="email">is2eula@naver.com</p>
                                    <p className="major">부산가톨릭대 간호학과</p>
                                </div>
                                <p className="intro">끊임없이 발전을 즐기는 프론트앤드 개발자 김하늘입니다.</p>
                            </div>
                        </div>
                        <div className='txt'>
                            <span>안녕하세요👋</span>
                            <p> 저는 간호사로서 근무하며 단순 컴퓨터 업무를 다뤄왔습니다.<br/>
                                현대사회는 대부분이 온라인화 되어 가고 있으며 급격하게 발전하고 있습니다.<br/>
                                새로운 것이 나왔을 때 습득력이 늦어지는 저를 느끼며, 동떨어져있다는 느낌을 많이 받았습니다. <br/>
                                저도 그 속에서 같이 온라인화 하는 시대를 이끌어가는 사람이 되고 싶었고, 공부를 하기 위해 국비학원을 다니게 되었습니다. <br/>
                                프로그래밍을 알아가면서 점점 흥미를 느끼게 되었고,<br/>
                                첫 프로젝트로 로그인과 회원가입을 구현한 결과물을 보고 이 길로 나아가야겠다 결심했습니다.<br/>
                                그 결과 간호사를 관두고 개발자가 되기 위해 모든 시간을 투자하기로 하였습니다.<br/>
                            </p>
                        </div>
                    </div>
                </Section1>
                <Section2 ref={skillsRef} id="sec2" className={showSkills ? 'show' : ''}>
                    <h2>Skills</h2>
                    <div className="sec2-img">
                        <h3>Language/Framework/Library</h3>
                        <p className="title">편해요👍</p>

                        <div className="easy">
                            <div className="skill">
                                <div className="skill_name"><img src="/images/html.png"/><p>HTML5</p></div>
                                <p className="content">⁚ 웹 표준을 지키며 구현</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/css.png"/><p>CSS3</p></div>
                                <p className="content">⁚ @keyframes를 이용하여 애니메이션 효과 구현 </p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/js.png"/><p>JavaScript</p></div>
                                <p className="content">⁚ ES6 자바스크립트 문법을 사용 / 유효성 검사 및 이벤트 처리와 API를 이용하여 날짜 필터링 구현 경험</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/bootstrap.png"/><p>Bootstrap</p></div>
                                <p className="content">⁚ 부트스트랩을 이용하여 디자인 구성 가능</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/react.png"/><p>React.js</p></div>
                                <p className="content">⁚ 상태 관리를 할 수 있습니다. / 라이브러리를 활용하여 효과</p>
                            </div>
                        </div>
                        <p className="title">어느 정도 사용할 줄 알아요👌</p>
                        <div className="normal">
                            <div className="skill">
                                <div className="skill_name"><img src="/images/oracle.png"/><p>Oracle</p></div>  <p className="content">⁚ 회원가입 및 로그인 구현 데이터를 관리한 경험</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/mariadb.png"/><p>MariaDB</p></div>
                                <p className="content">⁚ 방 탈출 예약 정보 데이터를 관리한 경험</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/markdown.png"/><p>Markdown</p></div>
                                <p className="content">⁚ 마크다운 문법을 이용하여 글을 작성 가능</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/git.png"/><p>Git</p></div>
                                <p className="content">⁚ 협업이 가능 / 프로젝트 관리 가능</p>
                            </div>
                        </div>
                        <p className="title">사용해 봤습니다✍</p>
                        <div className="hard">
                            <div className="skill">
                                <div className="skill_name"><img src="/images/java.png"/><p>Java</p></div>
                                <p className="content">⁚ 로그인과 회원가입을 위한 컨트롤러와 DTO, DAO 구현 가능</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/jsp.png"/><p>JSP</p></div>
                                <p className="content">⁚ MVC 패턴을 이용하여 게시판 CRUD 구현 가능</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/spring.png"/><p>Spring</p></div>
                                <p className="content">⁚ 스프링 MVC를 이용하여 블로그 구현 가능</p>
                            </div>
                        </div>
                        <h3>Tools</h3>
                        <div className="tools">
                            <div className="skill">
                                <div className="skill_name"><img src="/images/figma.png"/><p>figma</p></div>
                                <p className="content">⁚ 간단한 디자인이 가능하며, 피그마를 이용하여 화면 설계서 작성 가능</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/notion.png"/><p>Notion</p></div>
                                <p className="content">⁚ 노션을 이용하여 일정관리 및 기록 관리</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/intellij.png"/><p>IntelliJ</p></div>
                                <p className="content">⁚ IntelliJ 이용하여 프로젝트 구현</p>
                            </div>
                            <div className="skill">
                                <div className="skill_name"><img src="/images/vscode.png"/><p>VS Code</p></div>
                                <p className="content">⁚ VS Code를 이용하여 프로젝트 구현</p>
                            </div>
                        </div>
                        <div className="tools">
                            <div className="skill">
                                <div className="skill_name"><img src="/images/dbever.png"/><p>DBever</p></div>
                                <p className="content">⁚ DBever를 이용하여 데이터베이스를 관리 </p>
                            </div>
                        </div>
                    </div>
                </Section2>
                <Section3 ref={projectsRef} id="sec3" className={showProjects ? 'show' : ''}>
                    <h2>Project</h2>
                    <div className="project">
                        <div className="project1">
                            <div className="portImg">
                                <video autoPlay loop muted className="videoSize">
                                    <source src="/videos/portfolio.mp4" type="video/mp4" />
                                </video>
                                <p className="click"><a href="https://github.com/neulhappy/portfolio.git" target="_blank">더보기</a></p>
                            </div>
                            <div className="portName">
                                <p>포트폴리오</p>
                                <p>solo project</p>
                            </div>
                            <div className="portTxt">
                                <p>2024.03.20 ~ ing</p>
                                <p>프론트앤드 취업을 위해 만든 포트폴리오입니다. typewriter-effect, 스크롤 이벤트를 사용하여 페이지를 꾸몄습니다.</p>
                                <p>stack</p>
                                <p>React, node.js, Styled-Component</p>
                            </div>
                        </div>
                        <div className="project2">
                            <div className="portImg">
                                <video autoPlay loop muted className="videoSize">
                                    <source src="/videos/bread.mp4" type="video/mp4" />
                                </video>
                                <p className="click"><a href="https://github.com/neulhappy/breadGame.git" target="_blank">더보기</a></p>
                            </div>
                            <div className="portName">
                                <p>빵이름맞추기</p>
                                <p>solo project</p>
                            </div>
                            <div className="portTxt">
                                <p>2024.03.06 ~ 04.01</p>
                                <p>간단한 빵 이름 맞추기 게임입니다. 사진을 보고 글자 수에 맞는 빵 이름을 입력하면 빵 이름이 나타나는 게임입니다.</p>
                                <p>stack</p>
                                <p>React, node.js, Styled-Component</p>
                            </div>
                        </div>
                        <div className="project3">
                            <div className="portImg">
                                <video autoPlay loop muted className="videoSize">
                                    <source src="/videos/night-factory.mp4" type="video/mp4" />
                                </video>
                                <p className="click"><a href="https://github.com/neulhappy/night-factory.git" target="_blank">더보기</a></p>
                            </div>
                            <div className="portName">
                                <p>방탈출게임 예약사이트</p>
                                <p>team project</p>
                            </div>
                            <div className="portTxt">
                                <p>2024.01.23 ~ ing</p>
                                <p>공포를 주제로 하는 방 탈출 게임 예약사이트입니다. 예약 모듈(예약안내, 예약하기, 예약확인) 파트를 구현하였습니다.</p>
                                <p>stack</p>
                                <p>Java, Springboot, Hibernate ,MariaDB</p>
                            </div>
                            <div className="participation">
                                <p>기여도</p>
                                <p>기획(70%), 디자인(70%), 개발(30%)</p>
                                <p>• 화면설계를 하고 화면설계서를 작성하였습니다.<br/>
                                    • 방탈출 예약 사이트의 예약 모듈 구현하였습니다.<br/>
                                    • API를 이용하여 날짜 정보 처리 후, 테마정보 및 시간을 AJAX를 이용하여 데이터 처리 후, 웹페이지에 동적으로 구현하였습니다.
                                </p>
                            </div>
                        </div>
                    <div className="project4">
                        <div className="portImg">
                            <video autoPlay loop muted className="videoSize">
                                <source src="/videos/superhero-landing.mp4" type="video/mp4" />
                            </video>
                            <p className="click"><a href="https://github.com/neulhappy/superhero-landing.git" target="_blank">더보기</a></p>
                        </div>
                        <div className="portName">
                            <p>슈퍼히어로 굿즈쇼핑몰</p>
                            <p>team project</p>
                        </div>
                        <div className="portTxt">
                            <p>2023.12.06 ~ 2023.12.26</p>
                            <p>쇼핑몰, 게시판, 그리고 이용자 관리 서비스를 구현하였으며, 회원 관리 및 암호화 모듈을 구현하였습니다.</p>
                            <p>stack</p>
                            <p>Java, Oracle, Tomcat 10.1.16</p>
                        </div>
                        <div className="participation">
                            <p>기여도</p>
                            <p>기획(70%), 개발(50%)</p>
                            <p> • 화면 설계 및 구성을 계획했습니다. <br/>
                                • 회원가입과 로그인 모듈을 구현하였습니다.<br/>
                                • 실시간 아이디 중복확인 및 유효성 검사와 SHA-256 알고리즘을 사용한 비밀번호 해시화 처리를 하여 회원가입 페이지를 구현하였습니다.<br/>
                                • 클라이언트 측에서 해시화 처리 후 서버로 전송해 보안에 집중해서 구현하였습니다.
                            </p>
                        </div>
                    </div>
                    </div>
                </Section3>
                <Section4 ref={contactRef} id="sec4">
                    <ContactForm />
                    <ToastContainer />
                </Section4>
            </div>
        </main >
        <Footer>
            <footer id="App_footer">
                <div id="inner">
                    <p>
                        Copyright 2024. 김하늘. All rights reserved.
                    </p>
                    <a href="https://github.com/neulhappy"  target="_blank">
                        <img src="/images/github.png"/>
                    </a>
                </div>
            </footer>
        </Footer>
    </div>
    );
}

export default App;
