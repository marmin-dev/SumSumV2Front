import styled from "styled-components";

export const LogFrameDiv = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid black;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 500px) {
    height: 90vh;
    width: 500px;
  }

  @media (max-width: 500px) {
    height: 100vh;
    width: 100vw;
  }
`;
