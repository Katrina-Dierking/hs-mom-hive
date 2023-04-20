import React from "react";
// import BodyMod from "../../modols/body/BodyMod";
import Button from "../../modols/button/Button";
import "./profile.scss";
import MainMod from "../../modols/main/MainMod";

function Profile() {
  return (
    <section className="profile">
    <MainMod title = "all about you" />
    <div className="buttons">
    <Button title="Change Profile" />
    <Button title="Save Changes" />
    </div>
    </section>
    );
}

export default Profile;

