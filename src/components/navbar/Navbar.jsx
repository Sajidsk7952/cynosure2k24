import React from 'react'
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import cynosureLogo from '../../assests/ace.png';
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className='navbar'>
        <div className="logo">
            <Link to="/">
                <img src={cynosureLogo} alt="cynosure" style={{width: "50px", transform:"scale(9)"}}/>
            </Link>
        </div>
        <div className="nav_button_container">
            <button className='nav_button' onClick={()=>{navigate('/events/register')}}>
                Register Now
            </button>
        </div>
    </nav>
  )
}

export default Navbar
