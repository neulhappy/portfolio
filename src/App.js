import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
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
                <div className="img">
                    <img id="me" src="/Me.JPG"/>
                </div>
                <div className="txt">
                    <Typewriter
                        options={{
                            strings: ['안녕하세요.<br/>개발자,<br/> 김하늘입니다.', '화면을 내려주세요.<br/>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div id="sec2"></div>
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
