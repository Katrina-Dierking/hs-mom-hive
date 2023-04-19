import React from 'react'
import BodyMod from '../../components/modules/Body/BodyMod'
import Button from '../../components/modules/button/Button'
import './profile.scss'

function Profile() {
  return (
    <section className="profile">
      <BodyMod title="YOUR PROFILE" body="this is all about you" />
      <div className="buttons">
        <Button title="Change Profile" />
        <Button title="Save Changes" />
      </div>
    </section>
  );
}

export default Profile