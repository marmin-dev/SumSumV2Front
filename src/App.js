import { keyframes } from 'styled-components';
import './App.css';
import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';
import NotFound from './page/NotFound';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
