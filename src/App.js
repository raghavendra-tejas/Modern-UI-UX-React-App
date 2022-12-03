import React from "react";

import {
  Blog,
  Footer,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers/export";

import { Cta, Brand, Navbar } from "./components/export";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
