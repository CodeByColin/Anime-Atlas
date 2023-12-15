const Anime = ({ anime }) => {
  return (
    <div className="carousel w-full">
      {anime.map((ani, index) => {
        const imageUrl = ani.attributes.posterImage.tiny;
        const title = ani.attributes.titles.en || ani.attributes.titles.en_jp;
        return (
          <div key={index} className="carousel-item">
            <div className="flex flex-col items-center space-y-2">
              {" "}
              <img
                src={imageUrl}
                alt={`Cover of ${title}`}
                className="mx-2 my-2"
              />{" "}
              <span className="text-xs text-center mx-2">{title}</span>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Anime;
