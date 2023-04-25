import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.scss'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'

import user from '../../assets/images/user.png'
import friends from '../../assets/images/friends.png'
import bag from '../../assets/images/shopping-bag.png'
import groups from '../../assets/images/community.png'
import videos from '../../assets/images/video-camera.png'
import events from '../../assets/images/calendar.png'
import games from '../../assets/images/console.png'
import ModeToggler from '../../components/darkmode/ModeToggler'



function Dashboard() {

    const logout=()=> {
        localStorage.removeItem('signUp')
        window.location.reload()
    }

    const deleteAccount=()=> {
      localStorage.clear();
      window.location.reload()
    }

  return (
    <section className="dashCont">
      <section className="dashboard">
        <h2>The Mom Hive Dashboard - where homeschooling comes to life!</h2>
        <div className="buttons">
          <button onClick={logout} className="logout">
            LOG OUT
          </button>

          <button onClick={deleteAccount} className="logout">
            Delete Account
          </button>
        </div>
      </section>
      <ModeToggler>
      <section className="topDash">
        <aside className="profile">
          <ul>
            <Link to="/profile" className="iconName">
              Username
              <img src={user} className="icon" alt="user" />
            </Link>
            <Link to="/friends" className="iconName">
              Friends
              <img src={friends} className="icon" alt="friends" />
            </Link>
            <Link to="/shop" className="iconName">
              Shop
              <img src={bag} className="icon" alt="bag" />
            </Link>
            <Link to="/groups" className="iconName">
              Groups
              <img src={groups} className="icon" alt="groups" />
            </Link>
            <Link to="/vides" className="iconName">
              Saved 
              <img src={videos} className="icon" alt="videos" />
            </Link>
            <Link to="/events" className="iconName">
              Events
              <img src={events} className="icon" alt="events" />
            </Link>
            <Link to="/games" className="iconName">
              Games
              <img src={games} className="icon" alt="games" />
            </Link>
          </ul>
        </aside>
        <section className="feed">
          <div>
            <h3>Today:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, porro, unde culpa doloremque veritatis maiores
              aspernatur ipsam ullam quibusdam nemo doloribus qui illo quis
              debitis voluptates dolores aliquam cum itaque!
            </p>
          </div>
 
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, quibusdam architecto accusamus reprehenderit
              reiciendis delectus tenetur alias, eligendi obcaecati, ab amet
              velit ut accusantium vero ullam voluptas doloremque. Amet,
              similique.
            </p>
          </div>
        </section>
 
      </section>
   
   </ModeToggler>
    </section>
     

  );
}

export default Dashboard