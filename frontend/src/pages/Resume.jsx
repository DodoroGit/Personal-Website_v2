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
              <strong>聯發科技 ( MediaTek ) — Web Backend Engineer ( 2024/10 ~ )</strong>
              <ul>
                <li>
                  <strong>生成式 AI 平台「達哥」開發與維運（企業內外部使用）</strong>
                  <ul>
                    <li>初期於 QA Team，負責功能驗證、手動測試流程設計、測試腳本撰寫、產品文件撰寫</li>
                    <li>後續轉至 Backend Team，負責內部使用者 Search 功能 API 開發，使用 gRPC 串接微服務</li>
                    <li>撰寫單元測試 (Unit Test)，並操作 Gitea / Gitea Action 完成 CI/CD 流程</li>
                  </ul>
                </li>
                <li>
                  <strong>晶片設計數據模擬分析平台（跨部門合作）</strong>
                  <ul>
                    <li>資料 Migration 流程開發：接收使用者 Excel，進行資料清理、上傳至 MinIO，並導入 PostgreSQL</li>
                    <li>資料上線後於 Web 系統呈現，支援設計部門業務需求</li>
                    <li>API 開發與除錯：使用 RESTful API 與 GraphQL 串接，處理權限控管、資料查詢、篩選邏輯</li>
                    <li>撰寫單元測試，維護系統穩定度</li>
                    <li>技術環境：Golang (Gin)、PostgreSQL、MinIO、Grafana、TablePlus</li>
                  </ul>
                </li>
                <li>
                  <strong>其他經驗與技術</strong>
                  <ul>
                    <li>熟悉 Docker、Docker Compose 部署流程</li>
                    <li>測試環境：Kubernetes (K8S)，正式環境：部門內部機器 + Docker Compose</li>
                    <li>熟悉部署流程，主要透過 CI/CD Pipeline 部署（偶爾透過跳板機操作）</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

      </div>
    </div>
  )
}

export default Resume
