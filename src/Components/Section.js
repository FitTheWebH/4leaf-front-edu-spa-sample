import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const App = ({ tab }) => {
  return (
    <div>
      <div className="Section">
        {tab === 0 && (
          <>
            <Flip>
              <div className="Section__img img1"></div>
            </Flip>
            <div className="Section__text">
              <ul>
                <Fade right delay={0}>
                  <li>안녕하세요</li>
                </Fade>
                <Fade right delay={100}>
                  <li>행복의도시</li>
                </Fade>
                <Fade right delay={200}>
                  <li>공주입니다</li>
                </Fade>
                <Fade right delay={300}>
                  <li>공기좋고 물 좋은곳에 오신것을</li>
                </Fade>
                <Fade right delay={400}>
                  <li>환영합니다</li>
                </Fade>
              </ul>
            </div>
          </>
        )}
        {tab === 1 && (
          <>
            <div className="Section__text">
              <ul>
                <Fade left delay={500}>
                  <li>안녕하십니까</li>
                </Fade>
                <Fade left delay={600}>
                  <li>여기는 공주의 명물</li>
                </Fade>
                <Fade left delay={700}>
                  <li>전통가옥 한옥입니다</li>
                </Fade>
                <Fade left delay={800}>
                  <li>동서양의 조화로운 분위기로</li>
                </Fade>
                <Fade left delay={900}>
                  <li>리모델링 했습니다</li>
                </Fade>
              </ul>
            </div>
            <Flip bottom delay={500}>
              <div className="Section__img img2"></div>
            </Flip>
          </>
        )}
        {tab === 2 && (
          <>
            <div className="Section__text">
              <ul>
                <Fade left delay={500}>
                  <li>공주에</li>
                </Fade>
                <Fade left delay={600}>
                  <li>오신것을</li>
                </Fade>
                <Fade left delay={700}>
                  <li>정말 진심으로</li>
                </Fade>
                <Fade left delay={800}>
                  <li>환영합니다</li>
                </Fade>
                <Fade left delay={900}>
                  <li>잘놀다가세요</li>
                </Fade>
              </ul>
            </div>
            <Flip bottom right delay={500}>
              <div className="Section__img img3"></div>
            </Flip>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
