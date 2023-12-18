import { useState } from "react";

const Header = ({ onShowSignup, onShowLogin, onToggleFavorites }) => {
  return (
    <header className="w-full bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Anime Atlas Logo" className="h-12 w-12" />
            <h1 className="text-3xl font-bold text-neon">Anime Atlas</h1>
          </div>
          <div className="flex items-center space-x-4">
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
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary">
              Categories
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
