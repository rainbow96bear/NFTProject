import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import BaseIndex from "./component/base";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { action } from "./store/thema";
import { lightTheme, darkTheme, Theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
interface GetTheme {
  data: any;
}
function App() {
  const dispatch = useDispatch<any>();
  const themeR = useSelector((state: any) => state.thema.type);
  const getTheme = async () => {
    const data = (await axios.get("http://localhost:8080/theme")).data;
    dispatch(action.setting({ type: data.theme }));
  };
  useEffect(() => {
    getTheme();
  }, [themeR]);

  return (
    <div>
      <GlobalStyle
        theme={themeR == "dark" ? darkTheme : lightTheme}></GlobalStyle>
      <Routes>
        <Route path="/" element={<BaseIndex></BaseIndex>}></Route>
        {/* <Route path="/admin" element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
