import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Modules from "./pages/Modules"
import "./App.css"

function App() {
  return (
    <Router>
      {/* 標題 */}
      <h1 className="site-title">我的個人網站</h1>

      {/* 導覽列 */}
      <nav>
        <Link to="/">首頁</Link>
        <Link to="/resume">歷年履歷</Link>
        <Link to="/portfolio">作品集介紹</Link>
        <Link to="/modules">模組功能</Link>
        <Link to="/contact">聯絡資料</Link>
      </nav>

      {/* 主內容 */}
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
