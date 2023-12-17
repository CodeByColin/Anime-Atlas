// AnimeDetails.jsx

const AnimeDetails = ({ anime, hideDetails }) => {
  const coverImage = anime.attributes.coverImage
    ? anime.attributes.coverImage.original
    : anime.attributes.posterImage.original;
  const youtube = anime.attributes.youtubeVideoId;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="relative p-5 inline-block w-full max-w-4xl mt-18 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div
            className="h-64 bg-cover bg-center rounded-t-2xl"
            style={{ backgroundImage: `url(${coverImage})` }}
          ></div>
          <div className="mt-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {anime.attributes.canonicalTitle}
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                {anime.attributes.synopsis}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-gray-700">
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
              className="inline-flex align-center justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={hideDetails}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
