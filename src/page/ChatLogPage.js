import { useEffect, useRef, useState } from "react";
import ChatList from "../component/ChatList";
import { LogFrameDiv } from "../Module/ChatLogModule";
import { ParkDiv } from "../Module/ChatModule";
import { postMessages } from "../Module/ApiModule";

const ChatLogPage = () => {
  const [messages, setMessages] = useState([]);
  const logFrameRef = useRef(null);
  let page = 1;

  const handleScroll = async () => {
    const chatListElem = logFrameRef.current;
    if (chatListElem.scrollTop === 0) {
      await loadMoreMessages();
    }
  };

  const loadMoreMessages = async () => {
    page += 1;
    let msg = await postMessages(page);
    const newMessages = msg.data.reverse();
    if (newMessages.length == 0) {
      const chatListElem = logFrameRef.current;
      chatListElem.removeEventListener("scroll", handleScroll);
    } else {
      setMessages((prevMessages) => [...newMessages, ...prevMessages]);
    }
  };

  useEffect(() => {
    if (page === 1) {
      if (logFrameRef.current) {
        logFrameRef.current.scrollTop = logFrameRef.current.scrollHeight;
      }
    }
  }, [messages]);

  // 스크롤 이벤트 감지
  useEffect(() => {
    if (!localStorage.getItem("sumsum_username")) {
      alert("너 이름이 뭔지 안알려준거같아");
      window.location.href = "/username";
    }
    const getNewMessage = async () => {
      const newMsg = await postMessages(page);
      setMessages(newMsg.data.reverse());
    };
    getNewMessage();

    const chatListElem = logFrameRef.current;

    if (!chatListElem) return;

    chatListElem.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <ParkDiv>
      <LogFrameDiv ref={logFrameRef}>
        {messages.map((message) => (
          <ChatList data={message} key={message.message_id} />
        ))}
      </LogFrameDiv>
    </ParkDiv>
  );
};

export default ChatLogPage;
