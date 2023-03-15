import HeaderComp from "./Component";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../store/thema";
import { useState, useEffect } from "react";

const HeaderCont = () => {
  const dispatch = useDispatch();
  const thema = useSelector((state: any) => state.thema.type);
  const chageThema = () => {
    dispatch(action.change());
    setScreenThema(thema);
  };
  const [screenThema, setScreenThema] = useState("");
  useEffect(() => {}, [screenThema]);
  return (
    <HeaderComp screenThema={screenThema} chageThema={chageThema}></HeaderComp>
  );
};

export default HeaderCont;
