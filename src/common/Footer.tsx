import { Link, useLocation } from 'react-router-dom'
import "./layoutCommon.scss"

const Footer = () => {
  const location = useLocation();
  return (
    <footer className='footer'>
      <ul>
        <li>
          <Link to="/domestic/market" className={`${
            location.pathname === "/domestic/market" || location.pathname === "/overseas/market"
              ? "on"
              : ""
            }`}>
            <span>Market</span>
          </Link>
        </li>
        <li>
          <Link to="/domestic/buysell" className={`${location.pathname.startsWith("/domestic/buysell") ? "on" : ""}`}>
            <span>Buy/Sell</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>Scan</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>Chart</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>Menu</span>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer