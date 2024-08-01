import styled from "styled-components";
import { fadeIn } from "./MainModule";

export const ParkDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/imgs/background/park.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 2s ease-in-out;
`;

export const getFramdiv = (image_name) => {
  const FrameDiv = styled.div`
    background-image: url(${"/imgs/girl_chat/" + image_name});
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
  return FrameDiv;
};

export const ButtonDiv = styled.div`
  width: 100%;
  height: 5%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ChatDiv = styled.div`
  width: 100%;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.5);
`;
