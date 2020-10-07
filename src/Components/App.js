import React, { useState } from "react";
import Header from "./Header";
import Section from "./Section";

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="App">
      <Header />

      <section className="tabArea">
        <div className="tabArea__tabs">
          <div
            className={currentTab === 0 ? `active` : ``}
            onClick={() => changeTab(0)}
          >
            인사말
          </div>
          <div
            className={currentTab === 1 ? `active` : ``}
            onClick={() => changeTab(1)}
          >
            소개글
          </div>
          <div
            className={currentTab === 2 ? `active` : ``}
            onClick={() => changeTab(2)}
          >
            마침글
          </div>
        </div>
      </section>

      {currentTab === 0 && <Section tab={currentTab} />}
      {currentTab === 1 && <Section tab={currentTab} />}
      {currentTab === 2 && <Section tab={currentTab} />}
    </div>
  );
};

export default App;
