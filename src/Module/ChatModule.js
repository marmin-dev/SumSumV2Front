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

export const FrameDiv = styled.div`
  background-image: url(${(props) => `/imgs/girl_chat/${props.framesrc}`});
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

export const ButtonDiv = styled.div`
  width: 100%;
  height: 5%;
  align-items: center;
`;

export const ChatDiv = styled.div`
  width: 100%;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatItemDiv = styled.div`
  width: 100%;
`;

export const ChatButton = styled.button`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  width: 20%;
`;

export const ChatH2 = styled.h3`
  color: white;
  margin: 0.8rem;
`;

export const ChatReply = styled.div`
  font-size: 1em;
  width: 94%;
  height: 60%;
  color: white;
`;

export const ChatInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-size: 1em;
  width: 70%;
  margin-left: 1rem;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
