import Carousel from "./Carousel";

const Anime = (anime) => {
  return (
    <div className="flex flex-col">
      <Carousel anime={anime} />
      <Carousel anime={anime} />
      <Carousel anime={anime} />
      <Carousel anime={anime} />
    </div>
  );
};

export default Anime;
