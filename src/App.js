import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Watch from "./pages/WatchLater";
import Explore from "./pages/Explore";
import SinglePage from './pages/SingleVideo'
import Category from "./pages/Category";
function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/playlists" element={<Playlists />} />
        <Route path='/categories/:catName' element={<Category />} />
        <Route path='/video/:videoId' element={<SinglePage />} />
        <Route path="/watchlist" element={<Watch />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      {/* <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </div>
  );
}

export default App;
