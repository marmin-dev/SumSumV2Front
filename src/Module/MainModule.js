import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const GirlDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/imgs/girl_original/girl_couch.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 3s ease-in-out;
`;

export const GirlDivWithOutFade = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/imgs/girl_original/girl_couch.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  color: white;
  font-size: 2em;
  text-align: center;
  animation: ${fadeIn} 6s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextFaster = styled.div`
  color: white;
  font-size: 2em;
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GetIn = styled.a`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-decoration: none;
  font-size: 1em;
  text-align: center;
`;

export const UsernameInput = styled.input`
  animation: ${fadeIn} 5s ease-in-out;
  font-size: 1.5em;
  border: none;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 1em;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const UsernameGirlDiv = styled(GirlDivWithOutFade)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserNameSubmit = styled.button`
  animation: ${fadeIn} 5s ease-in-out;
  margin-top: 0.5em;
  font-size: 1em;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;
