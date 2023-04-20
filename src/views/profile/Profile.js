import React from "react";
import BodyMod from "../../modols/body/BodyMod";
import Button from "../../modols/button/Button";
import "./profile.scss";

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

export default Profile;
