import Carousel from "./Carousel";
import { useEffect } from "react";

const Anime = (props) => {
  const fetchAnime = async (url, setter) => {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setter(data.data);
      } else {
        console.error("Error fetching anime:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  useEffect(() => {
    fetchAnime(
      "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0",
      props.setAnime
    );
  }, [props.setAnime]);

  useEffect(() => {
    fetchAnime(
      "https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20&page[offset]=0",
      props.setAnime2
    );
  }, [props.setAnime2]);

  useEffect(() => {
    fetchAnime(
      "https://kitsu.io/api/edge/anime?filter[season]=fall&filter[seasonYear]=2023&sort=popularityRank&page[limit]=20",
      props.setAnime3
    );
  }, [props.setAnime3]);

  useEffect(() => {
    fetchAnime(
      "https://kitsu.io/api/edge/anime?filter[season]=winter&filter[seasonYear]=2023&sort=popularityRank&page[limit]=20",
      props.setAnime4
    );
  }, [props.setAnime4]);

  useEffect(() => {
    fetchAnime(
      "https://kitsu.io/api/edge/anime?filter[subtype]=movie&sort=popularityRank&page[limit]=20",
      props.setAnime5
    );
  }, [props.setAnime5]);

  useEffect(() => {
    fetchAnime(
      "https://kitsu.io/api/edge/anime?sort=-createdAt&page[limit]=20",
      props.setAnime6
    );
  }, [props.setAnime6]);

  return (
    <div className="flex flex-col">
      <Carousel
        anime={props.anime}
        title="Highest Rated"
        showDetails={props.showDetails}
      />
      <Carousel
        anime={props.anime2}
        title="Most Popular"
        showDetails={props.showDetails}
      />
      <Carousel
        anime={props.anime3}
        title="Fall 2023"
        showDetails={props.showDetails}
      />
      <Carousel
        anime={props.anime4}
        title="Winter 2023"
        showDetails={props.showDetails}
      />
      <Carousel
        anime={props.anime5}
        title="Popular Movies"
        showDetails={props.showDetails}
      />
      <Carousel
        anime={props.anime6}
        title="Recently Added"
        showDetails={props.showDetails}
      />
    </div>
  );
};

export default Anime;
