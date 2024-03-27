import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typewriter from 'typewriter-effect';
import emailjs from 'emailjs-com';
import { css } from 'styled-components';
import styled from 'styled-components';
import media from './media';
import './App.css';




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
    const ref = useRef(null);
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);


    const scrollToRef = (ref) => {
        let offset = 0;
        if (ref === aboutMeRef) {
            offset = 70;
        } else {
            offset = -100;
        }
        const topPos = ref.current.offsetTop + offset;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300) setShowMe(true);
            else setShowMe(false);

            if (scrollPosition > 800) setShowSkills(true);
            else setShowSkills(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <div className="App">
        <header id="App_header">
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
        </header>
        <main ref={homeRef}  id="App_main">
            <div id="inner">
                <div id="sec1">
                    <div className="home">
                        <div className="event">
                            <div className="bg"></div>
                            <div className="bg2"></div>
                            <div className="cloud6"></div>
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
                            <img id="me" src="/Me.JPG"/>
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
                            <p> 저는 원래 간호사로 일을 해왔습니다. 사람들을 돕고 함께하는 것을 좋아하는 저에게는 좋은 직업이었습니다. <br/>하지만 남을 위하는 일을 하다 보니 저에 대해서도 생각할
                                시간이 필요하다 느꼈고, <br/>그
                                과정에서 고등학교 시절 제가 가고 싶었던 과는 컴퓨터공학이었다는 것이 떠올랐습니다.<br/> 수포자였던 저에게 그 벽이 크다 느껴 도전하지 못하였지만, 더 늦기
                                전에 꿈에 도전해 보고 싶었습니다.<br/>
                                프로그래밍을 알아가면서 점점 흥미를 느끼게 되었고,<br/> 그 결과 간호사를 관두고 개발자가 되기 위해 모든 시간을 투자하기로 하였습니다.<br/> 29살에 늦게 시작한
                                개발자인 만큼 남들보다 더 열심히 노력하고 발전해가는
                                개발자가 되겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div ref={skillsRef} id="sec2" className={showSkills ? 'show' : ''}>
                    <h2>Skills</h2>
                    <div className="sec2-img">
                        <h3>Language/Framework/Library</h3>
                        <p className="title">편해요👍</p>
                        <div className="easy">
                            <div><img src="/html.png"/><p>HTML5</p></div>
                            <div><img src="/css.png"/><p>CSS3</p></div>
                            <div><img src="/js.png"/><p>JavaScript</p></div>
                            <div><img src="/bootstrap.png"/><p>Bootstrap</p></div>
                            <div><img src="/react.png"/><p>React.js</p></div>
                        </div>
                        <p className="title">어느 정도 사용할 줄 알아요👌</p>
                        <div className="normal">
                            <div><img src="/oracle.png"/><p>Oracle</p></div>
                            <div><img src="/mariadb.png"/><p>MariaDB</p></div>
                            <div><img src="/markdown.png"/><p>Markdown</p></div>
                            <div><img src="/git.png"/><p>Git</p></div>
                        </div>
                        <p className="title">사용해 봤습니다✍</p>
                        <div className="hard">
                            <div><img src="/java.png"/><p>Java</p></div>
                            <div><img src="/jsp.png"/><p>JSP</p></div>
                            <div><img src="/kotlin.png"/><p>Kotlin</p></div>
                            <div><img src="/python.png"/><p>Python</p></div>
                            <div><img src="/spring.png"/><p>Spring</p></div>
                        </div>
                        <h3>Tools</h3>
                        <p className="title">편해요👍</p>
                        <div className="tools">
                            <div><img src="/figma.png"/><p>figma</p></div>
                            <div><img src="/notion.png"/><p>Notion</p></div>
                            <div><img src="/intellij.png"/><p>IntelliJ</p></div>
                            <div><img src="/vscode.png"/><p>Visual Studio</p></div>
                        </div>
                        <p className="title">사용해 봤습니다✍</p>
                        <div className="tools">
                            <div><img src="/android.png"/><p>Android Studio</p></div>
                            <div><img src="/dbever.png"/><p>DBever</p></div>
                        </div>
                    </div>
                </div>
                <div ref={projectsRef} id="sec3">
                    <h2>Project</h2>
                    <div className="project">
                        <div className="project1">
                            <div className="portImg">
                                <img src="/portfolio.png"/>
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
                                <p>React,node.js</p>
                            </div>
                        </div>
                        <div className="project2">
                            <div className="portImg">
                                <img src="/project2.png"/>
                                <p className="click"><a href="https://github.com/neulhappy/breadGame.git" target="_blank">더보기</a></p>
                            </div>
                            <div className="portName">
                                <p>빵이름맞추기</p>
                                <p>solo project</p>
                            </div>
                            <div className="portTxt">
                                <p>2024.03.06 ~ ing</p>
                                <p>간단한 빵 이름 맞추기 게임입니다. 사진을 보고 글자 수에 맞는 빵 이름을 입력하면 빵 이름이 나타나는 게임입니다.</p>
                                <p>stack</p>
                                <p>React,node.js</p>
                            </div>
                        </div>
                        <div className="project3">
                            <div className="portImg">
                                <img src="/project3.png"/>
                                <p className="click"><a href="https://github.com/Sonnet-Songbird/night-factory.git" target="_blank">더보기</a></p>
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
                        </div>
                    </div>
                </div>
                <div ref={contactRef} id="sec4">
                    <ContactForm />
                    <ToastContainer />
                </div>
            </div>
        </main>

        <footer id="App_footer">
            <div id="inner">
                <p>
                    Copyright 2024. 김하늘. All rights reserved.
                </p>
                <a href="https://github.com/neulhappy"  target="_blank">
                    <img src="/github.png"/>
                </a>
            </div>
        </footer>
    </div>
    );
}


export default App;
