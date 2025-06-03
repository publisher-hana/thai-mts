import { Link, useLocation } from 'react-router-dom'
import "./layoutCommon.scss"
import { LuSearch } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";

export const Header = () => {
  const location = useLocation();
  return (
    <div className='header'>
      <div className ='header-top'>
        <h1 className='logo'><Link to=""></Link></h1>
        <div className='top-display'>
          SET
          <span className='val'>1,458.78 +2.00</span>
        </div>
        <div className='r-icons'>
          <Link to=""><LuSearch /></Link>
          <Link to="" className='alarm'><IoMdNotificationsOutline /></Link>
          <Link to="" className='member'></Link>
        </div>
      </div>
      <div className='nav'>
        <div className='inner'>
          <Link to="" className='home'><span className='blind'>home</span><AiFillHome /></Link>
          <ul className='nav-list'>
            <li><Link to="/domestic" className={`${location.pathname.startsWith("/domestic") ? "on" : ""}`}>หุ้นไทย</Link></li>
            <li><Link to="/overseas" className={`${location.pathname.startsWith("/overseas") ? "on" : ""}`}>หุ้นต่างประเทศ</Link></li>
            <li><Link to="">TFEX</Link></li>
            <li><Link to="">กองทุน</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
