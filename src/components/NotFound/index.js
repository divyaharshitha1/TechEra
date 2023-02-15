import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <div className="notfound-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        className="notfound-image"
      />
      <h1 className="notfound-head">Page Not Found</h1>
      <p className="notfound-para">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
