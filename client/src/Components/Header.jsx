import { useState } from "react";

const Header = ({ onShowSignup, onShowLogin, onToggleFavorites }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="w-full bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-1">
            <img
              src="https://files.oaiusercontent.com/file-zMKSBIFZzLH1jV9cyU8TL2on?se=2023-12-19T18%3A09%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D299%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-12-17%252015.52.07%2520-%2520Create%2520a%2520sleek%2520and%2520modern%2520logo%2520for%2520a%2520website%2520named%2520%2527Anime%2520Space%2527%2520that%2520incorporates%2520elements%2520of%2520anime%2520culture%2520and%2520the%2520concept%2520of%2520space.%2520The%2520logo%2520should.png&sig=Waf1fr6TE9Tss0Ka2Nyj3TU6JKEA4To3bWu5/Jq1iZ0%3D"
              alt="Anime Atlas Logo"
              className="h-12 w-12"
            />
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
            <input
              type="search"
              placeholder="Find an Anime..."
              className="input input-bordered input-dark w-full max-w-xs"
            />
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
