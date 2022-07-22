import React from "react";
import ReactDOM from "react-dom";
import Counter from "remote/Counter";
import Footer from "remote/Footer";
import Header from "remote/Header";
import sortByName from "remote/sortByName";
import "./index.scss";

const App = () => (
  <>
    <Header />
    <div className="mt-10 text-xl mx-auto max-w-6xl">
      <div className="text-2xl">Host Application (with React Js)</div>
      <Counter />
    </div>
    {JSON.stringify(
      sortByName([
        { name: "Yash", age: 24 },
        { name: "Prakash", age: 24 },
        { name: "Maulik", age: 34 },
      ])
    )}
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
