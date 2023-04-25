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
        <MainMod
          title="ALL ABOUT YOU"
          top="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi accusamus facere temporibus possimus delectus blanditiis assumenda saepe quisquam. Iusto explicabo dolores ullam corporis deserunt harum pariatur ex impedit consequuntur."
        />
        <div className="buttons">
          <Button title="Change Profile" />
          <Button title="Save Changes" />
        </div>
      </section>
     
      <aside className="rightProfile">

        <ul>
        <a href="#">Text</a>
         <a href="#">Text</a>
         <a href="#">Text</a>
         <a href="#">Text</a>
         <a href="#">Text</a>
         <a href="#">Text</a>
         <a href="#">Text</a>
        
        </ul>
     
      </aside>
    </ModeToggler>
  );
}

export default Profile;

