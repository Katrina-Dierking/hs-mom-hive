import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dashboard from "./views/dashboard/Dashboard";
// import About from "./views/about/About";
// import Home from "./views/home/Home";
// import Profile from "./views/profile/Profile";
// import Games from "./views/games/Games";
// import Classes from "./views/classes/Classes";
// import Dashboard from "./views/dashboard/Dashboard";
// import Shop from "./views/shop/Shop";
// import Resources from "./features/resources/Resources";
// import PlayingDrums from "./views/games/drums/PlayingDrums"
// import MagicEight from "./views/games/magicEight/MagicEight";

import {
  Home,
  Profile, 
  Games,
  Classes,
  Dashboard,
  Shop,
  Resources,
  PlayingDrums,
  MagicEight
} from './views/index'

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games" element={<Games />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/playingdrums" element={<PlayingDrums />} />
          <Route path="/magiceight" element={<MagicEight/>}/>

        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
