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
                                strings: ['프론트앤드를<br/><br/>꿈꾸는 주니어 개발자,<br/><br/>김하늘입니다!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <div className={`second ${showSecond ? 'show' : ''}`}>
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
