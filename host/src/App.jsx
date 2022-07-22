import React from "react";
import ReactDOM from "react-dom";
import Counter from "remote/Counter";
import Footer from "remote/Footer";
import Header from "remote/Header";
import sortByName from "remote/sortByName";
import "./index.scss";

const callRemoveFun = () => {
  const sortedData = sortByName([
    { name: "Yash", age: 24 },
    { name: "Prakash Dudhat", age: 24 },
    { name: "Maulik Shah", age: 34 },
    { name: "Shubham Jayswal", age: 24 },
    { name: "Abdulmaliq", age: 34 },
    { name: "Meet Odedara", age: 22 },
    { name: "Samjot Singh", age: 30 },
    { name: "Piyush Kanani", age: 22 },
  ]);
  console.log({ sortedData });
};

const App = () => (
  <>
    <Header />
    <div className="mt-10 text-xl mx-auto max-w-6xl">
      <div className="text-2xl">Host Application (with React Js)</div>
      <Counter />
    </div>
    <br />
    <button onClick={callRemoveFun}>Print Sorted Array</button>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
