import { Link } from 'react-router-dom'
import "./common.scss"
import { LuSearch } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";

export const Header = () => {
  return (
    <>
      <div className ='header'>
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
            <li><Link to="">หุ้นไทย</Link></li>
            <li><Link to="">หุ้นต่างประเทศ</Link></li>
            <li><Link to="">TFEX</Link></li>
            <li><Link to="">กองทุน</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
