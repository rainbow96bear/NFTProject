import React from "react";
import "./App.css";
import BaseIndex from "./component/base";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseIndex></BaseIndex>}></Route>
        {/* <Route path="/admin" element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
