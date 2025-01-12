import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LOGO from '../assets/logo/main.svg?url';
// import LOGO from './assets/logo/main.svg?url';
function App() {
  useEffect(() => {
    // Đặt tiêu đề trang web khi component App được render
    // const favicon = document.querySelector(LOGO);
    // document.title = "Parking Management"; // Thay đổi tên trang web ở đây
  }, []); // Dùng [] để chỉ chạy lần đầu khi App được render

  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;