import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

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
      localStorage.setItem("token", data.access_token)
      setMessage("登入成功 ✅")
    } catch (err) {
      setMessage("登入失敗 ❌")
    }
  }

  return (
    <div className="page-wrapper">
      <h2>登入</h2>
      <form onSubmit={handleLogin} className="page-content">
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">登入</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default Login
