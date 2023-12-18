import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("User ID not found.");
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `http://localhost:3000/api/favorites/${userId}`
        );
        if (!response.ok) throw new Error("Failed to fetch favorites");

        const favoriteAnimeIds = await response.json();
        const animePromises = favoriteAnimeIds.map((fav) =>
          fetch(
            `https://kitsu.io/api/edge/anime?filter[id]=${fav.anime_id}`
          ).then((res) => res.json())
        );

        const animeDetails = await Promise.all(animePromises);
        setFavorites(animeDetails.map((detail) => detail.data[0]));
      } catch (error) {
        console.error("Error fetching favorites:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (animeId) => {
    const userId = localStorage.getItem("userId");

    try {
      const response = await fetch(
        `http://localhost:3000/api/favorites/${userId}/${animeId}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setFavorites(favorites.filter((anime) => anime.id !== animeId));
      } else {
        throw new Error("Failed to delete favorite");
      }
    } catch (error) {
      console.error("Error deleting favorite:", error);
      setError(error.message);
    }
  };

  if (loading)
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
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="overflow-y-auto py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neon mb-8">Your Favorites</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap -mx-2">
            {favorites.length > 0 ? (
              favorites.map((anime) => (
                <div key={anime.id} className="p-2 w-1/2 sm:w-1/3 lg:w-1/4">
                  <div className="bg-gray-700 p-4 rounded-lg shadow-md relative">
                    <button
                      onClick={() => handleRemoveFavorite(anime.id)}
                      className="absolute top-1 right-1 bg-black text-white p-1 rounded-full hover:bg-neon"
                      aria-label="Remove from favorites"
                    >
                      X
                    </button>
                    <img
                      src={anime.attributes.posterImage.small}
                      alt={anime.attributes.titles.en}
                      className="w-full h-auto bg-cover bg-center rounded-t-md mb-2"
                    />
                    <h3 className="text-md font-medium text-decoration-line: underline leading-6 text-neon">
                      {anime.attributes.canonicalTitle}
                    </h3>
                    <p className="text-sm text-neon">
                      {anime.attributes.synopsis}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-neon w-full">No favorites added yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
