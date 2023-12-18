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
        // Fetch the user's favorite anime IDs
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

        // Fetch each favorite anime details and set them to the state
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

  if (loading) return <div>Loading favorites...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="relative p-5 inline-block w-full max-w-4xl mt-18 overflow-hidden text-left align-middle transition-all transform bg-dark shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-neon mb-4">Your Favorites</h2>
          <div>
            {favorites.length > 0 ? (
              favorites.map((anime) => (
                <div key={anime.id} className="mb-6">
                  <img
                    src={anime.attributes.posterImage.small}
                    alt={anime.attributes.titles.en}
                    className="w-full h-auto bg-cover bg-center rounded-t-xl"
                  />
                  <h3 className="text-lg font-medium leading-6 text-neon text-decoration-line: underline mt-2">
                    {anime.attributes.canonicalTitle}
                  </h3>
                  <p className="text-sm text-neon">
                    {anime.attributes.synopsis}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-neon">No favorites added.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
