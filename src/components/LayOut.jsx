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

export default function LayOut() {
  return (
    <>
      <LayOutContainer>
        <div style={{ padding: "18px", fontSize: "30px", fontWeight: "600" }}>
          <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
            OZ무비
          </Link>
        </div>
        <div>
          <input
            style={{
              padding: "5px",
              borderRadius: "33px",
              width: "500px",
              height: "30px",
              margin: "15px",
            }}
          />
        </div>
        <div style={{ padding: "20px" }}>
          <button
            style={{
              height: "30px",
              width: "60px",
              backgroundColor: "#6600CC",
              margin: "0 20px 0 0",
              borderRadius: "4px",
              color: "white",
              border: "none",
            }}
          >
            로그인
          </button>
          <button
            style={{
              height: "30px",
              width: "80px",
              backgroundColor: "#6600CC",
              borderRadius: "4px",
              color: "white",
              border: "none",
            }}
          >
            회원가입
          </button>
        </div>
      </LayOutContainer>

      <main>
        <Outlet />
      </main>
    </>
  );
}
