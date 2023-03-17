import styled from "styled-components";
import { BiSun, BiMoon } from "react-icons/bi";
import { useEffect } from "react";
import { MoveTo } from "../../../customComp/MoveTo";

type Props = {
  thema: string;
  chageThema: () => void;
};
const HeaderComp: React.FC<Props> = ({ thema, chageThema }) => {
  return (
    <HeaderArea>
      <BtnFrame
        onClick={() => {
          chageThema();
        }}>
        {thema == "dark" ? (
          <BiMoon size="24"></BiMoon>
        ) : (
          <BiSun size="24"></BiSun>
        )}
      </BtnFrame>
      <BtnFrame>
        <MoveTo where={"/SignIn"} InnerText={"Sign In"} />
      </BtnFrame>
    </HeaderArea>
  );
};

export default HeaderComp;
const HeaderArea = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid black;
`;
const BtnFrame = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
  padding: 3px;
  width: fit-content;
`;
