import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Profile from './profile.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
        <img className="header__logo" src= {Logo} alt="logo" />
        </Link>
      </div>

      <div className='header__input'> 
          <input type="text" placeholder='Search...' />
        <Link to='/search'>
          <SearchIcon className="search" />
        </Link>
      </div>
        
      <div className='header__icons'> 
        <NotificationsIcon />
        <img className="profile" src= {Profile} alt="profile" />
      </div> 
    
    </div>
  );
}

export default Header;
