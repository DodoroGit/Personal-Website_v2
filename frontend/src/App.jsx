import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Modules from "./pages/Modules"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Admin from "./pages/Admin"
import "./App.css"

function App() {
  return (
    <Router>
      {/* 標題 */}
      <h1 className="site-title">我的個人網站</h1>

      {/* 導覽列 */}
      <nav>
        <Link to="/">首頁</Link>
        <Link to="/resume">學歷與經歷</Link>
        <Link to="/portfolio">作品集介紹</Link>
        <Link to="/modules">模組功能</Link>
        <Link to="/contact">聯絡資料</Link>
        <Link to="/login">登入</Link>
        <Link to="/register">註冊</Link>
        <Link to="/admin">管理後台</Link>
      </nav>

      {/* 主內容 */}
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
