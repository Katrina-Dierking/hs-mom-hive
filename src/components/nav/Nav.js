import React from 'react'
import { Link } from 'react-router-dom';
import './nav.scss'
import magnifer from '../../assets/images/magnifier.png'
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
        <button type="submit" className="search-button">
          <img src={magnifer} alt="magnifer" />
        </button>
      </form>

      <div className="midTop">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/resources">Free Resources</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/games">Games</Link>
      </div>

      <div className="rightTop">
        <img src={menu} className="icons" alt="menu" />
        <img src={messenger} className="icons" alt="messenger" />
        <img src={notifications} className="icons" alt="notifications" />
        <img src={account} className="icons" alt="account" />
      </div>
    </section>
  );
}

export default Nav