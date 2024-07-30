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
  background-image: url("/imgs/girl_couch.png"); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  animation: ${fadeIn} 3s ease-in-out;
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

export const GetIn = styled.a`
     background-color: rgba(0, 0, 0, 0.5);
    color: white; 
    text-decoration: none;
    font-size: 1em; 
    text-align: center;
`;

export const UsernameInput = styled.input`


`;