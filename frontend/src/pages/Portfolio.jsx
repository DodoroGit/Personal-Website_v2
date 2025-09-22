function Portfolio() {
  return (
    <div className="page-wrapper">
      <h2>作品集介紹</h2>

      <div className="portfolio-list">
        {/* 個人全端專案｜2025 */}
        <div className="portfolio-card">
          <h3>多巴胺甜點工作室 – Dopamine Cake Store</h3>
          <p className="project-intro">
            自行開發的線上蛋糕訂購系統，提供商品瀏覽、購物車、會員系統、後台訂單管理等功能，實作完整的電商購物流程。  
            採用前後端分離架構，並將系統完整部署至 AWS EC2 + Route 53 + HTTPS 憑證。
          </p>

          <h4>技術亮點</h4>
          <ul>
            <li><strong>後端：</strong>Golang Gin、GraphQL（自行撰寫 Schema/Resolver）、JWT 角色驗證、Excel 匯出、PostgreSQL</li>
            <li><strong>前端：</strong>HTML / CSS / JavaScript，支援 RWD 響應式</li>
            <li><strong>部署：</strong>AWS EC2、Docker / Docker Compose、Nginx、Route 53、Let's Encrypt</li>
            <li><strong>CI/CD：</strong>GitHub Actions 自動化部署</li>
          </ul>

          <h4>系統功能</h4>
          <ul>
            <li><strong>前台：</strong>商品瀏覽、購物車、宅配/面交、會員登入/註冊、歷史訂單</li>
            <li><strong>後台：</strong>訂單狀態管理、新增商品、Excel 訂單匯出（支援月份篩選）</li>
          </ul>

          <h4>架構特色</h4>
          <ul>
            <li>全站 GraphQL API 串接</li>
            <li>完整電商流程＋營運邏輯</li>
            <li>雲端部署＋自有網域＋HTTPS 加密</li>
            <li>前後端完全分離，三層容器化（Backend / Frontend / DB）</li>
          </ul>

          <p>
            <strong>網站：</strong>
            <a href="https://dopamineforu.com" target="_blank" rel="noreferrer">dopamineforu.com</a><br />
            <strong>原始碼：</strong>
            <a href="https://github.com/DodoroGit/Cake_Store" target="_blank" rel="noreferrer">GitHub Repo</a>
          </p>
        </div>

        <div className="portfolio-card">
          <h3>微積分學習輔助系統 – LINE Bot 整合教學平台</h3>
          <p className="project-intro">
            自行開發的微積分學習輔助平台，以 Python Flask 為後端、LINE Bot 作為互動介面，搭配 PostgreSQL 資料庫。
            學生可透過 LINE 即時互動學習，並完整記錄學習歷程與測驗資料，支援學習成效分析與教育研究。
          </p>

          <h4>技術亮點</h4>
          <ul>
            <li><strong>後端：</strong>Python Flask RESTful API、LINE Messaging API（QuickReply、TemplateMessage、LIFF）、Webhook 即時互動、Flask-SQLAlchemy</li>
            <li><strong>前端：</strong>HTML / CSS / JavaScript + Bootstrap、jQuery 強化互動</li>
            <li><strong>資料庫：</strong>PostgreSQL + pgAdmin，資料表包含 register_user、test_record、important_record</li>
            <li><strong>部署：</strong>Heroku + Heroku PostgreSQL，與 LINE 平台 Webhook 整合</li>
          </ul>

          <h4>系統功能</h4>
          <ul>
            <li><strong>課程單元：</strong>極限、連續、微分 I、微分 II、微分應用（含重點整理與測驗）</li>
            <li><strong>登入驗證：</strong>LINE ID 綁定，避免重複註冊，登入包含班級、姓名、學號</li>
            <li><strong>學習紀錄：</strong>完整記錄作答、章節閱讀、學習時間，支援學習行為研究</li>
          </ul>

          <h4>學術應用</h4>
          <p>
            此系統作為碩士論文研究平台，協助教育研究者進行學習行為分析與教學設計優化，亦能作為後續學術發表與成效實證的依據。
          </p>

          <p>
            <strong>原始碼：</strong>
            <a href="https://github.com/DodoroGit/Calculus_LineBot" target="_blank" rel="noreferrer">GitHub Repo</a><br />
            <strong>論文連結：</strong>
            <a href="https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dnclcdr&s=id=%22112CYCU0507010%22.&searchmode=basic"
              target="_blank" rel="noreferrer">國圖論文全文</a>
          </p>
        </div>

        <div className="portfolio-card">
          <h3>個人作品集系統 – Version 1</h3>
          <p className="project-intro">
            部署於 AWS EC2 的個人作品集與應用展示系統，後端以 Golang Gin 為核心，整合
            RESTful API、GraphQL、WebSocket，並搭配 HTML/CSS/JavaScript 前端介面，
            展現完整的全端技術與部署能力。
          </p>

          <h4>技術架構</h4>
          <ul>
            <li><strong>前端：</strong>純 HTML / CSS / JavaScript，MPA 架構 (index.html / about.html / projects.html 等)</li>
            <li><strong>後端：</strong>Golang Gin + JWT 驗證、REST API (記帳/股票/使用者管理)、GraphQL (飲食紀錄)、WebSocket (聊天室/台股即時)</li>
            <li><strong>資料庫：</strong>PostgreSQL</li>
            <li><strong>部署：</strong>Docker / docker-compose、AWS EC2、Route 53 網域、Nginx 反向代理、Let's Encrypt HTTPS</li>
          </ul>

          <h4>系統功能</h4>
          <ul>
            <li><strong>使用者管理：</strong>註冊 / 登入 / 權限控管 (使用者、管理員)、審核新註冊</li>
            <li><strong>記帳系統：</strong>新增支出、Excel 匯入匯出</li>
            <li><strong>台股追蹤：</strong>股票追蹤、即時報價 (WebSocket)、損益計算、30 日趨勢圖</li>
            <li><strong>飲食紀錄：</strong>新增 / 編輯 / 刪除每日營養紀錄 (GraphQL)</li>
            <li><strong>即時聊天室：</strong>多人即時聊天、進出提示、管理員清除訊息</li>
          </ul>

          <h4>架構特色</h4>
          <ul>
            <li>全端整合：REST + GraphQL + WebSocket 同時應用</li>
            <li>完整 DevOps 流程：Docker、Nginx、HTTPS、EC2 部署</li>
            <li>功能模組化：多頁式系統，涵蓋使用者、金融、飲食、聊天等場景</li>
          </ul>

          <p>
            <strong>原始碼：</strong>
            <a href="https://github.com/DodoroGit/My_Portfolio" target="_blank" rel="noreferrer">GitHub Profile</a><br />
          </p>
        </div>

        <div className="portfolio-card">
          <h3>小型專案展示｜2023–2025</h3>
          <div className="mini-projects">
            
            {/* 資料結構輔助學習 Line Bot */}
            <div className="mini-card">
              <h4>資料結構輔助學習 Line Bot</h4>
              <p>
                利用 OpenAI GPT 模型建構的互動式學習機器人，協助學生解答資料結構課程中的常見問題。
              </p>
              <ul>
                <li>LINE Messaging API 建立聊天介面</li>
                <li>串接 OpenAI GPT API 即時解答程式問題</li>
                <li>設計符合資料結構課程的互動流程</li>
                <li>Ngrok 臨時伺服器測試部署</li>
              </ul>
              <p>
                <strong>原始碼：</strong>
                <a href="https://github.com/DodoroGit/DataStucture_LineBot" target="_blank" rel="noreferrer">GitHub Repo</a>
              </p>
            </div>

            {/* ChatGPT GUI 應用程式 */}
            <div className="mini-card">
              <h4>ChatGPT GUI 應用程式</h4>
              <p>
                使用 Python Tkinter 開發的 ChatGPT 小型應用程式，結合 GPT API 與外部文本，進行摘要與問答。
              </p>
              <ul>
                <li>Tkinter 建立 GUI 操作介面</li>
                <li>匯入外部 .txt 文件作為背景知識</li>
                <li>限制 GPT 回應字數（200 字內）</li>
                <li>pyinstaller 打包成桌面應用程式</li>
              </ul>
              <p>
                <strong>原始碼：</strong>
                <a href="https://github.com/DodoroGit/TKinter_Demo" target="_blank" rel="noreferrer">GitHub Repo</a>
              </p>
            </div>

            {/* 智能助理平台 */}
            <div className="mini-card">
              <h4>智能助理平台</h4>
              <p>
                自行開發的智能助理平台，整合 AI 模型與履歷全文檢索功能，提供登入驗證、即時對話、快捷提問等功能。
                展現快速整合多種技術的能力。
              </p>
              <ul>
                <li>FastAPI RESTful API 串接 GPT-4o</li>
                <li>Postgres 儲存帳號、MongoDB 儲存聊天紀錄</li>
                <li>React.js 前端 SPA，深色主題設計</li>
                <li>快捷按鈕支援常見問題快速提問</li>
              </ul>
              <p><em>本專案於本地完成測試，未正式上線部署</em></p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
