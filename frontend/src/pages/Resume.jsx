function Resume() {
  return (
    <div className="page-wrapper">
      <h2>歷年履歷</h2>
      <div className="page-content resume-content">

        {/* 學歷 */}
        <section className="resume-card">
          <h3>🎓 學歷</h3>
          <ul>
            <li>碩士：中原大學 — 應用數學所資訊組 ( 2022 ~ 2024 )</li>
            <li>學士：中原大學 — 資訊工程學系 ( 2017 ~ 2022 )</li>
          </ul>
        </section>

        {/* 工作經驗 */}
        <section className="resume-card">
          <h3>💼 工作經驗</h3>
          <ul>
            <li>
              聯發科技 ( MediaTek ) — Web Backend Engineer ( 2024/10 ~ 在職中 )
            </li>
          </ul>
        </section>

        {/* 技能分類 */}
        <section className="resume-card">
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

export default Resume
