import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeThunk } from "../store/thema";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeBtn = ({
  innerText,
  size,
}: {
  innerText?: string;
  size: string;
}) => {
  const thema = useSelector((state: any) => state.thema.type);
  const dispatch = useDispatch<any>();
  const chageThema = () => {
    dispatch(changeThunk());
  };

  return (
    <Btn
      onClick={() => {
        chageThema();
      }}>
      {thema == "dark" ? (
        <BiMoon size={size}></BiMoon>
      ) : (
        <BiSun size={size}></BiSun>
      )}
      <p>{innerText}</p>
    </Btn>
  );
};
const Btn = styled.div`
  display: flex;
  align-items: center;
  > p {
    padding-left: 10px;
  }
`;
export default ThemeBtn;
