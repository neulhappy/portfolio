import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
    const [showSecond, setShowSecond] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 200) setShowSecond(true); // sec1 나타남
            else setShowSecond(false);

            if (scrollPosition > 800) setShowSkills(true); // sec2 나타남, 500은 예시값, 필요에 따라 조정
            else setShowSkills(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <div className="App">
      <header id="App_header">
        <h1>KimHaNeul</h1>
        <nav>
          <ul id="gnb">
            <li>Home</li>
            <li>Skills</li>
            <li>Project</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <main id="App_main">
        <div id="inner">
            <div id="sec1">
                <div className="first">
                    <div className="img">
                        <img id="me" src="/Me.JPG"/>
                        <p>김하늘</p>
                        <p>1996.08.29</p>
                        <p>101-7529-9281</p>
                        <p>is2eula@naver.com</p>
                    </div>
                    <div className="txt">
                        <Typewriter
                            options={{
                                strings: ['안녕하세요.<br/><br/>프론트앤드를 꿈꾸는<br/><br/>주니어 개발자 김하늘입니다.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <div className={`second ${showSecond ? 'show' : ''}`}>
                    <p>저는 원래 간호사로 남을 돕는 일을 해왔습니다.
                        <br/>일을 사랑하는 만큼 많은 성취감을 원했습니다.<br/>
                        그러던 도중 어릴 때부터 궁금하던 프로그래밍을 배우게 되었습니다. <br/>
                        프로그래밍을 배우며 많은 흥미를 느꼈고,<br/> 일을 관두고 개발자가 되기 위해 모든 시간을 투자하였습니다.<br/> 늦은만큼 남들보다 더 열심히 발전하는 개발자가 되겠습니다.
                    </p>
                </div>
            </div>
            <div id="sec2" className={showSkills ? 'show' : ''}>
                <h2>Skill</h2>
                <div className="sec2-img">
                    <p>편해요</p>
                    <div className="easy">
                        <a><img src="/html.png"/></a>
                        <a><img src="/css.png"/></a>
                        <a><img src="/js.png"/></a>
                        <a><img src="/bootstrap.png"/></a>
                    </div>
                    <p>사용할줄 알아요</p>
                    <div className="normal">
                        <a><img src="/react.png"/></a>
                        <a><img src="/oracle.png"/></a>
                        <a><img src="/mariadb.png"/></a>
                    </div>
                    <p>사용 해봤습니다</p>
                    <div className="hard">
                        <a><img src="/java.png"/></a>
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
