import { useState, useEffect } from "react"

function Admin() {
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        setMessage("請先登入")
        return
      }
      try {
        const res = await fetch("http://localhost:8000/admin/users", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        })
        if (!res.ok) throw new Error("沒有權限或請重新登入")
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        setMessage(err.message)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="page-wrapper">
      <h2>管理後台</h2>
      {message && <p>{message}</p>}
      <table className="page-content">
        <thead>
          <tr>
            <th>ID</th>
            <th>暱稱</th>
            <th>Email</th>
            <th>角色</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nickname}</td>
              <td>{u.email}</td>
              <td>{u.is_admin ? "Admin" : "User"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admin
