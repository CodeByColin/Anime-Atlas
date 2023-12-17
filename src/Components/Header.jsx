const Header = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-dark text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-neon mb-8">Anime Atlas</h1>

      <div className="flex flex-col items-stretch w-full px-4 space-y-4">
        <div className="flex justify-between space-x-2">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg flex-1">
            Sign Up
          </button>
          <button className="btn btn-neon btn-xs sm:btn-sm md:btn-md lg:btn-lg flex-1">
            Login
          </button>
        </div>
        <input
          type="text"
          placeholder="Find an Anime..."
          className="px-3 py-2 bg-gray-700 text-neon rounded focus:outline-none focus:ring-2 focus:ring-neon-500"
        />
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Favorites
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Categories
        </button>
      </div>
    </div>
  );
};

export default Header;
