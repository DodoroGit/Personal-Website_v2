import { useState } from "react"

function Register() {
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verifyCode, setVerifyCode] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname,
          email,
          password,
          verify_code: verifyCode,
        }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.detail || "註冊失敗")
      }
      setMessage("註冊成功 ✅")
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <div className="page-wrapper">
      <h2>註冊</h2>
      <form onSubmit={handleRegister} className="page-content">
        <input type="text" placeholder="暱稱" value={nickname}
          onChange={(e) => setNickname(e.target.value)} required />
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" placeholder="驗證碼 (ex:1234)" value={verifyCode}
          onChange={(e) => setVerifyCode(e.target.value)} required />
        <button type="submit">註冊</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default Register
