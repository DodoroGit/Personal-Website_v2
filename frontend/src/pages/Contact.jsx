function Contact() {
  return (
    <div className="page-wrapper">
      <h2>聯絡資料</h2>
      <div className="page-content">
        <ul className="contact-list">
          <li>
            <span className="label">Email：</span>
            <a href="mailto:dokebi871218@gmail.com">dokebi871218@gmail.com</a>
          </li>
          <li>
            <span className="label">GitHub：</span>
            <a href="https://github.com/DodoroGit" target="_blank" rel="noopener noreferrer">
              https://github.com/DodoroGit
            </a>
          </li>
          <li>
            <span className="label">LinkedIn：</span>
            <a href="https://www.linkedin.com/in/wei-jen-wang-75283a333/" target="_blank" rel="noopener noreferrer">
              https://www.linkedin.com/in/wei-jen-wang-75283a333/
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
