import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="snabbtech"
        className="logo"
        src="https://res.cloudinary.com/dzkou1nhs/image/upload/v1709459289/Screenshot_2024-03-03_150906_okghvr.png"
      />
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Login
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/home">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/register">
          Register
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
