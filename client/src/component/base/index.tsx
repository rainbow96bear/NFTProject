import HeaderCont from "./header/Container";
import { useMediaQuery } from "react-responsive";
import HomeCont from "./home/Container";

const BaseIndex = () => {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:1264px)",
  });
  const isTablet: boolean = useMediaQuery({
    query: "(min-width:768px) and (max-width:1263px)",
  });
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <div>
      {(isTablet || isMobile) && <HeaderCont></HeaderCont>}
      <HomeCont isDesktop={isDesktop}></HomeCont>
    </div>
  );
};
export default BaseIndex;
