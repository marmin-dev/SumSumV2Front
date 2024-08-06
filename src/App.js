import "./App.css";
import Main from "./page/Main";
import { Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import ChatPage from "./page/ChatPage";
import UsernamePage from "./page/UsernamePage";
import ChatLogPage from "./page/ChatLogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/username" element={<UsernamePage />} />
      <Route path="/suhee" element={<ChatPage />} />
      <Route path="/suhee/log" element={<ChatLogPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
