import { useEffect, useRef, useState } from "react";
import {
  ButtonDiv,
  ChatButton,
  ChatDiv,
  ChatH2,
  ChatInput,
  ChatItemDiv,
  ChatReply,
  ParkDiv,
  FrameDiv,
} from "../Module/ChatModule";
import { chatToHer } from "../Module/ApiModule";

// 사용자와 AI 가 대화하는 페이지
const ChatPage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [frameSrc, setFrameSrc] = useState("girl1.png");
  const [placeHolder, setPlaceHolder] = useState("무슨말을 할까?");
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState("안녕");
  const [chatExport, setChatExport] = useState("");
  const currentIndex = useRef(0);

  // 대화 하는 기분이 들도록 한글자씩 렌더링
  useEffect(() => {
    currentIndex.current = 0;
    setChatExport("");
    const typeWriter = () => {
      if (currentIndex.current < chat.length) {
        var s = chat.slice(0, currentIndex.current + 1);
        setChatExport(s);
        currentIndex.current++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, [chat]);

  // 채팅 내용 변경
  const handleChat = (event) => {
    setQuestion(event.target.value);
  };

  // 엔터
  const handleEnter = (event) => {
    if (event.key == "Enter") {
      postChatToHer();
    }
  };

  // 유저네임 입력 후 채팅방으로
  const postChatToHer = async () => {
    setIsDisabled(true);
    setChat("음...");
    let response = await chatToHer(question);
    setQuestion("");
    setPlaceHolder(question);
    setChat(response.data.reply);
    setFrameSrc("girl1.png");
    setIsDisabled(false);
  };

  const clickChangeImg = () => {
    setFrameSrc("girl_dum.png");
  };

  return (
    <ParkDiv>
      <FrameDiv framesrc={frameSrc}>
        <ButtonDiv>
          <ChatButton onClick={() => (window.location.href = "/")}>
            메인으로
          </ChatButton>
          <ChatButton onClick={() => (window.location.href = "/suhee/log")}>
            대화내역
          </ChatButton>
        </ButtonDiv>
        <ChatDiv>
          <ChatItemDiv>
            <ChatH2>수희</ChatH2>
          </ChatItemDiv>
          <ChatReply>{chatExport}</ChatReply>
          <ChatItemDiv>
            <ChatInput
              onClick={clickChangeImg}
              placeholder={placeHolder}
              onChange={handleChat}
              value={question}
              onKeyDown={handleEnter}
              readOnly={isDisabled}
            />
            <ChatButton onClick={postChatToHer} disabled={isDisabled}>
              말하기
            </ChatButton>
          </ChatItemDiv>
        </ChatDiv>
      </FrameDiv>
    </ParkDiv>
  );
};

export default ChatPage;
