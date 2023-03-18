import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import BaseIndex from "./component/base";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { action } from "./store/thema";
import { lightTheme, darkTheme, Theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import SignCont from "./component/base/Sign/Container";
interface GetTheme {
  data: any;
}
function App() {
  const dispatch = useDispatch<any>();
  const theme = useSelector((state: any) => state.thema.type);
  const getTheme = async () => {
    const data = (await axios.get("http://localhost:8080/theme")).data;
    dispatch(action.setting({ type: data.theme }));
  };
  useEffect(() => {
    getTheme();
  }, []);

  return (
    <div>
      <GlobalStyle
        theme={theme == "dark" ? darkTheme : lightTheme}></GlobalStyle>
      <Routes>
        <Route path="/" element={<BaseIndex></BaseIndex>}></Route>
        <Route path="/:params" element={<BaseIndex></BaseIndex>}></Route>
        <Route path="/SignIn" element={<SignCont></SignCont>}></Route>
        {/* <Route path="/admin" element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
