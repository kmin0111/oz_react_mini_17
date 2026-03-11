import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const LayOutContainer = styled.section`
  display: flex;
  margin: auto;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  background-color: #202020;
  position: relative;
`;
const Logo = styled.div`
  padding: 18px;
  font-size: 30px;
  color: white;
  font-weight: 600;
  text-decoration: none;
`;
const SearchInput = styled.input`
  padding: 5px;
  border-radius: 33px;
  width: 500px;
  height: 30px;
  margin: 15px;
`;
const LoginButton = styled.button`
  height: 30px;
  width: 60px;
  background-color: #6600cc;
  margin: 0 20px 0 0;
  border-radius: 4px;
  color: white;
  border: none;
`;
const SignUpButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: #6600cc;
  border-radius: 4px;
  color: white;
  border: none;
`;
const ButtenContainer = styled.div`
  padding: 20px;
`;
const MainContent = styled.main`
  background-color: #141414;
  min-height: calc(100vh - 80px);
  padding: 40px;
  color: white;
  display: flex;
  justify-content: center;
`;
export default function LayOut() {
  return (
    <>
      <LayOutContainer>
        <Logo>
          <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
            OZ무비
          </Link>
        </Logo>
        <SearchInput
          type="text"
        />
        <ButtenContainer>
          <LoginButton
          >
            로그인
          </LoginButton>
          <SignUpButton
          >
            회원가입
          </SignUpButton>
        </ButtenContainer>
      </LayOutContainer>

      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}
