function Home() {
  return (
    <div className="page-wrapper">
      <h2>首頁</h2>
      <div className="page-content home-content">
        {/* Hero 自我介紹 */}
        <section className="intro">
          <p>
            👋 嗨，我是 <strong>Rick</strong>，一名專注於 <strong>Web 全端開發</strong> 的軟體工程師。  
            這是我的個人網站，內容包含我畢業後的歷年履歷、作品集，以及目前正在開發實驗的模組功能，並能透過這個平台連接到外部服務。  
            本系統會持續更新，如果您對我有興趣或有合作邀約，歡迎透過「聯絡資料」頁面與我聯繫。
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home
