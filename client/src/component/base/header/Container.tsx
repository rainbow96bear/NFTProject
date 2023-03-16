import HeaderComp from "./Component";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { changeThunk } from "../../../store/thema";
import { action } from "../../../store/thema";
import { useState, useEffect } from "react";

const HeaderCont = () => {
  const thema = useSelector((state: any) => state.thema.type);
  const dispatch = useDispatch<any>();
  const chageThema = () => {
    dispatch(changeThunk());
  };

  return <HeaderComp thema={thema} chageThema={chageThema}></HeaderComp>;
};

export default HeaderCont;
