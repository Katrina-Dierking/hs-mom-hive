import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dashboard from "./views/dashboard/Dashboard";
// import About from "./views/about/About";
import Home from "./views/home/Home";
import Profile from "./views/profile/Profile";
import Games from "./views/games/Games";
import Classes from "./views/classes/Classes";
import Dashboard from "./views/dashboard/Dashboard";
import Shop from "./views/shop/Shop";
import Resources from "./features/resources/Resources";
// import Account from "./components/account/Account";
// import Resources from "./views/resources/Resources";
// import Classes from "./views/classes/Classes";
// import Shop from "./views/shop/Shop";
// import Menu from "./components/menu/Menu";
// import Messenger from "./components/messenger/Messenger";
// import Notifications from "./components/notifications/Notifications";
// import Games from "./views/games/Games";
// import PlayingDrums from "./views/games/drums/PlayingDrums";
// import MagicEight from "./views/games/magicEight/MagicEight";

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

        </Routes>
      </BrowserRouter>
    </section>
  );
        }
        // <Route path="/about" element={<About />} />
        // <Route path="/account" element={<Account />} />
        // <Route path="/classes" element={<Classes />} />
        // <Route path="/dashboard" element={<Dashboard />} />
        // <Route path="/menu" element={<Menu />} />
        // <Route path="/messenger" element={<Messenger />} />
        // <Route path="/notifications" element={<Notifications />} />
        // <Route path="/resources" element={<Resources />} />
        // <Route path="/shop" element={<Shop />} />
        // <Route path="/games" element={<Games />} />
        // <Route path="/playingdrums" element={<PlayingDrums />} />
        // <Route path="/magiceight" element={<MagicEight />} />

export default App;
