import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Watch from "./pages/WatchLater";
import Explore from "./pages/Explore";

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/playlists" element={<Playlists />} />

        <Route path="/watchlist" element={<Watch />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
