import React from "react";
// import BodyMod from "../../modols/body/BodyMod";
import Button from "../../modols/button/Button";
import "./profile.scss";
import ModeToggler from "../../components/darkmode/ModeToggler";

function Profile() {
  return (
    <section className="profile">
    <ModeToggler />
    <div className="buttons">
    <Button title="Change Profile" />
    <Button title="Save Changes" />
    </div>
    </section>
    );
}

export default Profile;
//   <BodyMod title="YOUR PROFILE" body="this is all about you" />
