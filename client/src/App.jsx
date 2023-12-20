import { useState, useEffect } from "react";
import Header from "./Components/Header.jsx";
import Anime from "./Components/Anime.jsx";
import Favorites from "./Components/Favorites.jsx";
import AnimeDetails from "./Components/AnimeDetails.jsx";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Search from "./Components/Search.jsx";

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
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

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

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowSearch(true);
  };

  const resetSearch = () => {
    setShowSearch(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-infinity loading-lg"></span>
          <span className="loading loading-infinity loading-lg"></span>
          <span className="loading loading-infinity loading-lg"></span>
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header
        onShowSignup={handleShowSignup}
        onShowLogin={handleShowLogin}
        onToggleFavorites={() => setShowFavorites((prev) => !prev)}
        onSearch={handleSearch}
      />
      <div className="flex-1 overflow-hidden">
        {showSearch ? (
          <Search
            query={searchQuery}
            resetSearch={resetSearch}
            showDetails={showDetails}
          />
        ) : showFavorites ? (
          <Favorites showDetails={showDetails} />
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
      {selectedAnime && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <AnimeDetails anime={selectedAnime} hideDetails={hideDetails} />
        </div>
      )}
      {showSignup && <Signup onClose={handleCloseSignup} />}
      {showLogin && <Login onClose={handleCloseLogin} />}
    </div>
  );
};

export default App;
