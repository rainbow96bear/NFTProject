import styled from "styled-components";
import ItemBoxCont from "./ItemBox/Container";
import SideBarCont from "./Sidebar/Container";

const HomeComp = ({ isDesktop }: { isDesktop: boolean }) => {
  return (
    <HomeArea>
      {isDesktop && <SideBarCont></SideBarCont>}
      <Main>
        <ItemBoxCont></ItemBoxCont>
        <ItemBoxCont></ItemBoxCont>
        <ItemBoxCont></ItemBoxCont>
        <ItemBoxCont></ItemBoxCont>
      </Main>
    </HomeArea>
  );
};
export default HomeComp;

const HomeArea = styled.div`
  display: flex;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;
