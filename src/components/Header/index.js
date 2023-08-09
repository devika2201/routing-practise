import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="list">
      <li>
        <Link className="element" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="element" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="element" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
