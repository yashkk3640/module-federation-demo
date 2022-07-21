import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Counter from "./Counter";

import "./index.scss";

const App = () => (
  <>
    <Header />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Counter />
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
