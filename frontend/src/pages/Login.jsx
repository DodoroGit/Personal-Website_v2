import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          username: email,
          password: password,
        }),
      })
      if (!res.ok) throw new Error("登入失敗")
      const data = await res.json()

      // 儲存 token
      localStorage.setItem("token", data.access_token)
      setMessage("登入成功 ✅")

      // 延遲 1 秒後回首頁並重新整理
      setTimeout(() => {
        navigate("/")          // 導回首頁
        window.location.reload() // 強制刷新頁面讓狀態更新
      }, 1000)

    } catch (err) {
      console.error(err)
      setMessage("登入失敗 ❌")
    }
  }

  return (
    <div className="page-wrapper">
      <h2>登入帳號</h2>
      <form onSubmit={handleLogin} className="register-form" autoComplete="off">
        <div className="form-group">
          <label>Email：</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label>密碼：</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
          />
        </div>

        <button type="submit" className="register-btn">登入</button>
      </form>
      <p className="register-message">{message}</p>
    </div>
  )
}

export default Login
