import { useEffect, useState } from "react"

function Profile() {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) return

    fetch("http://localhost:8000/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error("無法取得使用者資訊")
        return res.json()
      })
      .then(data => setUserInfo(data))
      .catch(err => console.error("Error fetching profile:", err))
  }, [])

  if (!userInfo) {
    return (
      <div className="page-wrapper">
        <h2>個人資訊</h2>
        <div className="page-content">載入中...</div>
      </div>
    )
  }

  return (
    <div className="page-wrapper">
      <h2>個人資訊</h2>
      <div className="profile-card">
        <p><strong>暱稱：</strong>{userInfo.nickname}</p>
        <p><strong>Email：</strong>{userInfo.email}</p>
        <p><strong>角色：</strong>{userInfo.is_admin ? "管理員" : "一般使用者"}</p>
      </div>
    </div>
  )
}

export default Profile
