import React from "react";
// import BodyMod from "../../modols/body/BodyMod";
import Button from "../../modols/button/Button";
import "./profile.scss";
import MainMod from "../../modols/main/MainMod";
import ModeToggler from "../../components/darkmode/ModeToggler";

function Profile() {
  return (
    <ModeToggler>
    
    <section className="profile">
      <MainMod title = "all about you" />
        <div className="buttons">
          <Button title="Change Profile" />
          <Button title="Save Changes" />
        </div>
      </section>
    </ModeToggler>
    );
}

export default Profile;

