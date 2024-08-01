import { useEffect, useState } from "react";
import { ButtonDiv, ChatDiv, getFramdiv, ParkDiv } from "../Module/ChatModule";

const ChatPage = () => {
  const [FrameDiv, setFrameDiv] = useState(getFramdiv("girl1.png"));

  return (
    <ParkDiv>
      <FrameDiv>
        <ButtonDiv></ButtonDiv>
        <ChatDiv></ChatDiv>
      </FrameDiv>
    </ParkDiv>
  );
};

export default ChatPage;
