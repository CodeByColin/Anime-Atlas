import { useState } from "react";
import Header from "./Components/Header.jsx";
import Anime from "./Components/Anime.jsx";
import Favorites from "./Components/Favorites.jsx";
import AnimeDetails from "./Components/AnimeDetails.jsx";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

const App = () => {
  const [anime, setAnime] = useState([]);
  const [anime2, setAnime2] = useState([]);
  const [anime3, setAnime3] = useState([]);
  const [anime4, setAnime4] = useState([]);
  const [anime5, setAnime5] = useState([]);
  const [anime6, setAnime6] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowSignup = () => setShowSignup(true);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseSignup = () => setShowSignup(false);
  const handleCloseLogin = () => setShowLogin(false);

  const showDetails = (animeDetails) => {
    setSelectedAnime(animeDetails);
  };

  const hideDetails = () => {
    setSelectedAnime(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      {!selectedAnime && (
        <Header
          onShowSignup={handleShowSignup}
          onShowLogin={handleShowLogin}
          onToggleFavorites={() => setShowFavorites((prev) => !prev)}
        />
      )}
      {showSignup && <Signup onClose={handleCloseSignup} />}
      {showLogin && <Login onClose={handleCloseLogin} />}
      <div className="flex-1 overflow-hidden">
        {selectedAnime ? (
          <AnimeDetails anime={selectedAnime} hideDetails={hideDetails} />
        ) : showFavorites ? (
          <Favorites />
        ) : (
          <Anime
            anime={anime}
            setAnime={setAnime}
            anime2={anime2}
            setAnime2={setAnime2}
            anime3={anime3}
            setAnime3={setAnime3}
            anime4={anime4}
            setAnime4={setAnime4}
            anime5={anime5}
            setAnime5={setAnime5}
            anime6={anime6}
            setAnime6={setAnime6}
            showDetails={showDetails}
          />
        )}
      </div>
    </div>
  );
};

export default App;
