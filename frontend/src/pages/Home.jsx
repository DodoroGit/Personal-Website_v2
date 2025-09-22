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

        <section className="skills-text">
          <h3>🛠 技能</h3>

          <div className="skills-grid">
            {/* 左側 */}
            <div className="skills-col">
              <h4>後端技能</h4>
              <ul>
                <li>Golang (Gin)、Python (Flask / Django / FastAPI)</li>
                <li>RESTful API、GraphQL、gRPC</li>
                <li>JWT、Unit Test (Golang)</li>
              </ul>

              <h4>前端技能</h4>
              <ul>
                <li>React.js</li>
                <li>HTML / CSS / JavaScript</li>
                <li>Bootstrap、jQuery</li>
              </ul>

              <h4>資料庫</h4>
              <ul>
                <li>PostgreSQL、MongoDB</li>
                <li>介面化工具：PgAdmin、TablePlus、MongoDB Compass</li>
              </ul>
            </div>

            {/* 右側 */}
            <div className="skills-col">
              <h4>開發與部署工具</h4>
              <ul>
                <li>雲端平台：AWS EC2、AWS Route 53、Heroku </li>
                <li>容器化技術：Docker / Docker Compose</li>
                <li>物件儲存：MinIO</li>
                <li>反向代理：Nginx</li>
                <li>開發階段工具：Ngrok</li>
                <li>版本控制與協作：Git、GitHub、Gitea</li>
                <li>CI/CD 自動化部署：GitHub Action、Gitea Action</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
