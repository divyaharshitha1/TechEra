import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => (
  <div className="navbar-container">
    <Link to="/" className="link-item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="website-image"
      />
    </Link>
  </div>
)

export default Navbar
