import { useState } from "react";
const Header = ({ onShowSignup, onShowLogin, onToggleFavorites, onSearch }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className="w-full bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-1">
            <h1 className="text-3xl font-bold text-neon">Anime Atlas</h1>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary"
              onClick={onShowSignup}
            >
              Sign Up
            </button>
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary"
              onClick={onShowLogin}
            >
              Login
            </button>
            <form onSubmit={handleSearchSubmit} className="flex">
              <input
                type="search"
                value={searchInput}
                onChange={handleInputChange}
                placeholder="Find an Anime..."
                className="input input-bordered input-dark w-full max-w-xs"
              />
            </form>
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary"
              onClick={onToggleFavorites}
            >
              Favorites
            </button>
          </div>

          <div className="sm:hidden">
            <button
              tabIndex={0}
              role="button"
              className="btn m-1"
              onClick={toggleDropdown}
            >
              Menu
            </button>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={onShowSignup}>Sign Up</a>
                </li>
                <li>
                  <a onClick={onShowLogin}>Login</a>
                </li>
                <li>
                  <form onSubmit={handleSearchSubmit} className="flex">
                    <input
                      type="search"
                      value={searchInput}
                      onChange={handleInputChange}
                      placeholder="Anime..."
                      className="input input-bordered input-dark w-full"
                    />
                  </form>
                </li>
                <li>
                  <a onClick={onToggleFavorites}>Favorites</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
