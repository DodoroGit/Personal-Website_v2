import { useState } from "react"

function Register() {
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [registerCode, setRegisterCode] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname,
          email,
          password,
          verify_code: registerCode,
        }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.detail || "註冊失敗")
      }
      setMessage("註冊成功 ✅")
      setNickname("")
      setEmail("")
      setPassword("")
      setRegisterCode("")
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <div className="page-wrapper">
      <h2>註冊帳號</h2>
      <form 
        onSubmit={handleRegister} 
        className="register-form" 
        autoComplete="off"
      >
        <div className="form-group">
          <label>暱稱：</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
            autoComplete="off"
            name="registerNickname"
          />
        </div>

        <div className="form-group">
          <label>Email：</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="new-email"
            name="registerEmail"
          />
        </div>

        <div className="form-group">
          <label>密碼：</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            name="registerPassword"
          />
        </div>

        <div className="form-group">
          <label>註冊密碼：</label>
          <input
            type="text"
            value={registerCode}
            onChange={(e) => setRegisterCode(e.target.value)}
            required
            autoComplete="off"
            name="registerCode"
          />
          <p className="note">
            ※ 請向管理員索取註冊密碼以完成註冊<br />
            聯絡信箱：<a href="mailto:dokebi871218@gmail.com">dokebi871218@gmail.com</a>
          </p>
        </div>

        <button type="submit" className="register-btn">送出註冊</button>
      </form>
      <p className="register-message">{message}</p>
    </div>
  )
}

export default Register
