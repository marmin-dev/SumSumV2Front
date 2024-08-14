import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// 메시지 전송 함수
export const chatToHer = async (message) => {
  const username = localStorage.getItem("sumsum_username");
  const response = axios.post(`${apiUrl}/message`, {
    message: message,
    username: username,
  });
  return response;
};

// 유저 이름
export const postUsername = async (username) => {
  const response = axios.post(`${apiUrl}/user`, { username: username });
  return response;
};

// 메시지 가져오기
export const postMessages = async (page) => {
  const username = localStorage.getItem("sumsum_username");

  const response = await axios.post(`${apiUrl}/messages`, {
    page: page,
    username: username,
  });

  return response;
};
