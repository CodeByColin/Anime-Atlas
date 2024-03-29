const Carousel = ({ anime, title, showDetails }) => {
  return (
    <div>
      <h2 className="text-center text-xl font-semibold text-white mb-4">
        {title}
      </h2>
      <div className="carousel rounded-box overflow-x-auto">
        {anime.map((ani) => {
          console.log(ani);
          const imageUrl = ani.attributes.posterImage.tiny;
          const title = ani.attributes.titles.en || ani.attributes.titles.en_jp;
          return (
            <div
              key={ani.id}
              className="carousel-item inline-block max-w-xs mx-2 my-2"
              onClick={() => showDetails(ani)}
            >
              <div className="flex flex-col items-center space-y-2 cursor-pointer">
                <img
                  src={imageUrl}
                  alt={`Cover of ${title}`}
                  className="mx-auto"
                />
                <span
                  className="text-xs text-center break-words overflow-hidden line-clamp-3"
                  style={{ maxWidth: "12ch" }}
                >
                  {title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
