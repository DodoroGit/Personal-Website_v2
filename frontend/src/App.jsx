import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Modules from "./pages/Modules"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Admin from "./pages/Admin"
import Profile from "./pages/Profile"
import "./App.css"

// === 權限保護用元件 ===
function ProtectedRoute({ element: Component, userRole }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!userRole) {
      alert("請先登入以查看此頁面")
      navigate("/login")
    }
  }, [userRole, navigate])

  return userRole ? <Component /> : null
}

function App() {
  const [userRole, setUserRole] = useState(null)
  const [userName, setUserName] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]))
        setUserRole(payload.role || null)
        setUserName(payload.sub || null)
      } catch (e) {
        console.error("Token decode error:", e)
        setUserRole(null)
        setUserName(null)
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setUserRole(null)
    setUserName(null)
    window.location.href = "/"
  }

  return (
    <Router>
      <h1 className="site-title">我的個人網站</h1>

      <nav>
        <Link to="/">首頁</Link>
        <Link to="/resume">學歷與經歷</Link>
        <Link to="/portfolio">作品集介紹</Link>
        <Link to="/modules">模組功能</Link>
        <Link to="/contact">聯絡資料</Link>
      </nav>

      <div className="auth-buttons">
        {!userRole ? (
          <>
            <Link to="/login">登入</Link>
            <Link to="/register">註冊</Link>
          </>
        ) : (
          <>
            <Link to="/profile">個人資訊</Link>
            {userRole === "admin" && <Link to="/admin">後台管理</Link>}
            <button className="logout-btn" onClick={handleLogout}>登出</button>
          </>
        )}
      </div>

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 需要登入的頁面加上 ProtectedRoute */}
          <Route
            path="/resume"
            element={<ProtectedRoute element={Resume} userRole={userRole} />}
          />
          <Route
            path="/portfolio"
            element={<ProtectedRoute element={Portfolio} userRole={userRole} />}
          />
          <Route path="/modules" element={<Modules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
