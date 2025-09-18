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

        {/* 學歷 */}
        <section className="education">
          <h3>🎓 學歷</h3>
          <ul>
            <li>碩士：中原大學 — 應用數學所資訊組 ( 2022 ~ 2024 )</li>
            <li>學士：中原大學 — 資訊工程學系 ( 2017 ~ 2022 )</li>
          </ul>
        </section>

        {/* 工作經驗 */}
        <section className="experience">
          <h3>💼 工作經驗</h3>
          <ul>
            <li>
              聯發科技 ( MediaTek ) — Web Backend Engineer ( 2024/10 ~ 在職中 )
            </li>
          </ul>
        </section>

        {/* 技能分類 */}
        <section className="skills">
          <h3>🛠 技能</h3>

          <h4>後端技能</h4>
          <div className="skill-tags">
            <span>Golang (Gin)</span>
            <span>Python (Flask / Django / FastAPI)</span>
            <span>gRPC</span>
            <span>RESTful API</span>
            <span>GraphQL</span>
            <span>JWT</span>
            <span>Unit Test (Golang)</span>
          </div>

          <h4>前端技能</h4>
          <div className="skill-tags">
            <span>React.js</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>jQuery</span>
          </div>

          <h4>資料庫</h4>
          <div className="skill-tags">
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>PgAadmin</span>
            <span>TablePlus</span>
            <span>MongoDB Compass</span>
          </div>

          <h4>雲端與部署</h4>
          <div className="skill-tags">
            <span>AWS EC2</span>
            <span>AWS Route 53</span>
            <span>Heroku</span>
            <span>Docker</span>
            <span>Docker Compose</span>
            <span>MinIO</span>
            <span>Nginx</span>
          </div>

          <h4>版本控制與 CI/CD</h4>
          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>Gitea</span>
            <span>GitHub Actions</span>
            <span>Gitea Actions</span>
          </div>

          <h4>其他工具</h4>
          <div className="skill-tags">
            <span>Ngrok</span>
            <span>Grafana</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
