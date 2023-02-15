import {Link} from 'react-router-dom'
import './index.css'

const HomeItem = props => {
  const {itemDetails} = props
  const {id, logoUrl, name} = itemDetails
  return (
    <Link to={`/courses/${id}`} className="link-item">
      <li className="list-item">
        <div className="logo-item-container">
          <img src={logoUrl} alt={name} className="logo-image" />
          <p className="logo-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default HomeItem
