import styled from "styled-components";
type Props = {
  screenThema: string;
  chageThema: () => void;
};
const HeaderComp: React.FC<Props> = ({ screenThema, chageThema }) => {
  return (
    <HeaderArea color={screenThema}>
      <button
        onClick={() => {
          chageThema();
        }}>
        {screenThema == "dark" ? "라이트 모드" : "다크 모드"}
      </button>
    </HeaderArea>
  );
};

export default HeaderComp;
const HeaderArea = styled.div<{ color: string }>`
  background-color: ${(props) =>
    props.color == "dark" ? "lightgray" : "lightblue"};
`;
