import styled from "styled-components";
import SideBarCont from "./Sidebar/Container";

const HomeComp = ({ isDesktop }: { isDesktop: boolean }) => {
  return (
    <HomeArea>
      {isDesktop && <SideBarCont></SideBarCont>}
      <Main></Main>
    </HomeArea>
  );
};
export default HomeComp;

const HomeArea = styled.div``;

const Main = styled.div``;
