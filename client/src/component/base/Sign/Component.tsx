import styled from "styled-components";
import KakaoLogin from "react-kakao-login";

const SignComp = ({
  responseKaKao,
  handleLogout,
}: {
  responseKaKao: any;
  handleLogout: any;
}) => {
  return (
    <SignArea>
      <input></input>
      <input></input>
      <KakaoLogin
        token={String(process.env.PUBLIC_KAKAO_APP_KEY)}
        onSuccess={
          responseKaKao
          //성공하면 쿠키?
        }
        onFail={responseKaKao}
        onLogout={handleLogout}>
        <div>카카오 로그인</div>
      </KakaoLogin>
    </SignArea>
  );
};
export default SignComp;
const SignArea = styled.div``;
