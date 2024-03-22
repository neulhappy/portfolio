import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
    const [showMe, setShowMe] = useState(false);
    const [showSkills, setShowSkills] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300) setShowMe(true); // sec1 나타남
            else setShowMe(false);

            if (scrollPosition > 800) setShowSkills(true); // sec2 나타남, 500은 예시값, 필요에 따라 조정
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
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
        <main id="App_main">
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
                                strings: ['HANEUL KIM<br/>Front-end' +
                                'Developer<br/><br/><br/><span>⭣</span>'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 100,
                                delay: 95,
                                cursorClassName:'typewriter-cursor'
                            }}
                        />
                    </div>
                    <div className={`Me ${showMe ? 'show' : ''}`}>
                        <div className="img">
                            <img id="me" src="/Me.JPG"/>
                            <div className="profile">
                                <h2>About Me</h2>
                                <p className="name">김하늘</p>
                                <p className="birth">1996.08.29</p>
                                <div>
                                    <p className="phone">101-7529-9281</p>
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
                <div id="sec2" className={showSkills ? 'show' : ''}>
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
                        <p className="title">사용할줄 알아요👌</p>
                        <div className="normal">
                            <div><img src="/oracle.png"/><p>Oracle</p></div>
                            <div><img src="/mariadb.png"/><p>MariaDB</p></div>
                            <div><img src="/markdown.png"/><p>Markdown</p></div>
                            <div><img src="/git.png"/><p>Git</p></div>
                        </div>
                        <p className="title">사용 해봤습니다✍</p>
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
                            <div><img src="/dbever.png"/><p>DBever</p></div>

                        </div>
                        <p className="title">사용해봤습니다✍</p>
                        <div className="tools">
                            <div><img src="/android.png"/><p>Android Studio</p></div>
                        </div>
                    </div>
                </div>
                <div id="sec3"></div>
                <div id="sec4"></div>
            </div>
        </main>

        <footer id="App_footer">
            <div id="inner">

            </div>
        </footer>
    </div>
    );
}

export default App;
