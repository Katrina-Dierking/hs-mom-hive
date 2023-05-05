import React from 'react'
import { Link } from 'react-router-dom';
import './nav.scss'
import menu from '../../assets/images/dots-menu.png'
import messenger from '../../assets/images/messenger.png'
import notifications from '../../assets/images/notification.png'
import account from '../../assets/images/account.png'

function Nav() {
  return (
    <section className="topNav">
      <form action="/" method="GET" className="form">
        <input
          className="search"
          type="text"
          name="search"
          placeholder="Search Mom Hive"
        />
      
      </form>

      <div className="midTop">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/resources">Free Resources</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/games">Games</Link>
      </div>

      <div className="rightTop">
        <Link to="/menu">
          <img src={menu} className="icons" alt="menu" />
          <Link to="/menu" className='title'>Menu</Link>
        </Link>
       
        <Link to="/messenger">
          <img src={messenger} className="icons" alt="messenger" />
          <Link to='/messenger' className='title'>Messenger</Link>
        </Link>

        <Link to="/notifications">
          <img src={notifications} className="icons" alt="notifications" />
          <Link to ="notifications" className='title'>Notifications</Link>
        </Link>

        <Link to="/profile">
          <img src={account} className="icons" alt="profile" />
          <Link to="/profile" className="title">Profile</Link>
        </Link>

      </div>
    </section>
  );
}

export default Nav