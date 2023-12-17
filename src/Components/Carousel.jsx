const Carousel = ({ anime, title }) => {
  return (
    <div className="md:ml-60 max-w-full">
      <h2 className="text-center text-xl font-semibold text-white mb-4">
        {title}
      </h2>
      <div className="carousel overflow-x-auto whitespace-nowrap">
        {anime.map((ani) => {
          console.log(ani);
          const imageUrl = ani.attributes.posterImage.tiny;
          const title = ani.attributes.titles.en || ani.attributes.titles.en_jp;
          return (
            <div
              key={ani.id}
              className="carousel-item inline-block max-w-xs mx-2 my-2"
            >
              <div className="flex flex-col items-center space-y-2">
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
