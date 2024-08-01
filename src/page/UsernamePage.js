import styled from "styled-components";
import {
  TextFaster,
  UsernameGirlDiv,
  UsernameInput,
  UserNameSubmit,
} from "../Module/MainModule";
import { useState } from "react";
import { postUsername } from "../Module/ApiModule";

const UsernamePage = () => {
  const [username, setUserName] = useState("");

  // 유저 이름 변경
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key == "Enter") {
      postUserNameAndGetIn();
    }
  };

  // 유저네임 입력 후 채팅방으로
  const postUserNameAndGetIn = async () => {
    let response = await postUsername(username);
    localStorage.setItem("sumsum_username", username);
    window.location.href = "/suhee";
  };

  return (
    <UsernameGirlDiv>
      <TextFaster>너 이름이 뭐야?</TextFaster>
      <UsernameInput
        type="text"
        placeholder="내 이름은 무엇일까?"
        value={username}
        onChange={handleUserName}
        onKeyDown={handleEnter}
      />
      <UserNameSubmit onClick={postUserNameAndGetIn}>입력</UserNameSubmit>
    </UsernameGirlDiv>
  );
};

export default UsernamePage;
