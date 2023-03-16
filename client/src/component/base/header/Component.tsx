import styled from "styled-components";
import { BiSun, BiMoon } from "react-icons/bi";
import { useEffect } from "react";
type Props = {
  thema: string;
  chageThema: () => void;
};
const HeaderComp: React.FC<Props> = ({ thema, chageThema }) => {
  return (
    <HeaderArea>
      <div
        onClick={() => {
          chageThema();
        }}>
        {thema == "dark" ? <BiMoon></BiMoon> : <BiSun></BiSun>}
      </div>
    </HeaderArea>
  );
};

export default HeaderComp;
const HeaderArea = styled.div``;
