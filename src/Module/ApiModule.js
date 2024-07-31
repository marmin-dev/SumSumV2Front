import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// 메시지 전송 함수
export const chatToHer = async (message) => {
  const response = axios.post(`${apiUrl}/message`, { message: message });
  return response;
};

// 유저 이름
export const postUsername = async (username) => {
  const response = axios.post(`${apiUrl}/user`, { username: username });
  return response;
};
