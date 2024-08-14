import React from "react";
import styled from "styled-components";

// ChatItem 스타일 컴포넌트 정의
const ChatItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
  justify-content: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${(props) => (props.isSender ? "0" : "10px")};
  margin-left: ${(props) => (props.isSender ? "10px" : "0")};
`;

const ChatBubble = styled.div`
  background-color: ${(props) => (props.isSender ? "#DCF8C6" : "#FFF")};
  border-radius: 10px;
  padding: 10px;
  max-width: 60%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const Message = styled.div`
  font-size: 0.85rem;
`;

const ChatItem = ({ isSender, profileImg, name, message }) => {
  return (
    <ChatItemContainer isSender={isSender}>
      {!isSender && <ProfileImage src={profileImg} alt="profile" />}
      <ChatBubble isSender={isSender}>
        <Name>{name}</Name>
        <Message>{message}</Message>
      </ChatBubble>
      {isSender && <ProfileImage src={profileImg} alt="profile" isSender />}
    </ChatItemContainer>
  );
};

// 예시로 두 개의 ChatItem을 나열
const ChatList = ({ data }) => {
  return (
    <div>
      <ChatItem
        isSender={true}
        profileImg={"/imgs/boy.jpg"}
        name={localStorage.getItem("sumsum_username")}
        message={data.question}
      />
      <ChatItem
        isSender={false}
        profileImg={"/imgs/girl_original/girl_cool.png"}
        name="수희"
        message={data.reply}
      />
    </div>
  );
};

export default ChatList;
