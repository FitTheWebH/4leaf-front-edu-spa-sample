import React from "react";
import Header from "./Header";
import Section from "./Section";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Section isNomal={true} />
      <Section isNomal={false} />
    </div>
  );
};

export default App;
