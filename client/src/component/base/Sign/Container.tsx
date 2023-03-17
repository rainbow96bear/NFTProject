import SignComp from "./Component";
import KakaoLogin from "react-kakao-login";

const SignCont = () => {
  const responseKaKao = (response: any) => {
    console.log(response);
  };

  const handleLogout = () => {
    window.Kakao.Auth.logout(() => {
      console.log("로그아웃 완료");
    });
  };
  return (
    <SignComp
      responseKaKao={responseKaKao}
      handleLogout={handleLogout}></SignComp>
  );
};

export default SignCont;
