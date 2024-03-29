// AnimeDetails.jsx

const AnimeDetails = ({ anime, hideDetails }) => {
  const coverImage = anime.attributes.coverImage
    ? anime.attributes.coverImage.original
    : anime.attributes.posterImage.original;
  const youtube = anime.attributes.youtubeVideoId;

  const handleAddToFavorites = async () => {
    const userId = localStorage.getItem("userId");
    const animeId = anime.id;

    if (!userId) {
      console.error("User not logged in");
      return;
    }

    try {
      const response = await fetch(
        "https://anime-api-s3cz.onrender.com/api/favorites",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, animeId }),
        }
      );

      if (response.ok) {
        console.log("Added to favorites successfully");
      } else {
        console.error("Failed to add to favorites");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto ">
      <div className="min-h-screen px-4 text-center ">
        <div className="relative p-5 inline-block w-full max-w-4xl mt-18 overflow-hidden text-left align-middle transition-all transform bg-dark shadow-xl rounded-2xl">
          <div
            className="h-64 bg-cover bg-center rounded-t-2xl"
            style={{ backgroundImage: `url(${coverImage})` }}
          ></div>
          <div className="mt-4">
            <h3 className="text-lg  font-medium leading-6 text-neon text-decoration-line: underline">
              {anime.attributes.canonicalTitle}
            </h3>
            <div className="mt-2">
              <p className="text-sm text-neon">{anime.attributes.synopsis}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-neon">
              <p>Start Date: {anime.attributes.startDate}</p>
              <p>End Date: {anime.attributes.endDate}</p>
              <p>Rating: {anime.attributes.averageRating}</p>
              <p>Episode Count: {anime.attributes.episodeCount}</p>
              <p>Episode Length: {anime.attributes.episodeLength} minutes</p>
              <p>Status: {anime.attributes.status}</p>
            </div>
          </div>
          <div className="mt-4 aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtube}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex bg-neon align-center justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={hideDetails}
            >
              Close
            </button>
            <button
              type="button"
              className="inline-flex bg-neon align-center ml-20 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={handleAddToFavorites}
            >
              Add To Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
