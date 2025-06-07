import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '@/style/global.scss';
import '@/style/dark/global.scss'; 
import './components/common/common.scss'
import { Header } from './common/Header';
import { Home } from './pages/home/Home';
import Market from './pages/domestic';
import Overseas from './pages/overseas';
import Footer from './common/Footer';
import BuySell from './pages/domestic/BuySell';
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 변경될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);
  return (
    <div className='wrap'>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div> */}
      <div className='switch-box'>
        <button onClick={() => setIsDarkMode(prev => !prev)}>
          {isDarkMode ? '☀️ 라이트 모드' : '🌙 다크 모드'}
        </button>
      </div>
      <Header />
      <ScrollToTop />
       <Routes>
        <Route path ="/" element={
          <Home />
        } />
        <Route path ="/domestic/market" element={
          <Market />
        } />
        <Route path ="/domestic/buysell" element={
          <BuySell />
        } />
        <Route path ="/overseas/market" element={
          <Overseas />
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
