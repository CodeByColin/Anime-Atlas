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
        setter((prevData) => [...prevData, ...data.data]);
      } else {
        console.error("Error fetching anime:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  // Fetch data for "Highest Rated" category
  useEffect(() => {
    props.setAnime([]);
    fetchAnime(
      "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0",
      props.setAnime
    );
    fetchAnime(
      "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=20",
      props.setAnime
    );
  }, [props.setAnime]);

  // Fetch data for "Most Popular" category
  useEffect(() => {
    props.setAnime2([]);
    fetchAnime(
      "https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20&page[offset]=0",
      props.setAnime2
    );
    fetchAnime(
      "https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20&page[offset]=20",
      props.setAnime2
    );
  }, [props.setAnime2]);

  // Fetch data for "Fall 2023" category
  useEffect(() => {
    props.setAnime3([]);
    fetchAnime(
      "https://kitsu.io/api/edge/anime?filter[season]=fall&filter[seasonYear]=2023&sort=popularityRank&page[limit]=20&page[offset]=0",
      props.setAnime3
    );
    fetchAnime(
      "https://kitsu.io/api/edge/anime?filter[season]=fall&filter[seasonYear]=2023&sort=popularityRank&page[limit]=20&page[offset]=20",
      props.setAnime3
    );
  }, [props.setAnime3]);

  // Fetch data for "Winter 2023" category
  useEffect(() => {
    props.setAnime4([]);
    fetchAnime(
      "https://kitsu.io/api/edge/anime?filter[season]=winter&filter[seasonYear]=2023&sort=popularityRank&page[limit]=20&page[offset]=0",
      props.setAnime4
    );
    fetchAnime(
      "https://kitsu.io/api/edge/anime?filter[season]=winter&filter[seasonYear]=2023&sort=popularityRank&page[limit]=20&page[offset]=20",
      props.setAnime4
    );
  }, [props.setAnime4]);

  // Fetch data for "Popular Movies" category
  useEffect(() => {
    props.setAnime5([]);
    fetchAnime(
      "https://kitsu.io/api/edge/anime?filter[subtype]=movie&sort=popularityRank&page[limit]=20&page[offset]=0",
      props.setAnime5
    );
    fetchAnime(
      "https://kitsu.io/api/edge/anime?filter[subtype]=movie&sort=popularityRank&page[limit]=20&page[offset]=20",
      props.setAnime5
    );
  }, [props.setAnime5]);

  // Fetch data for "Recently Added" category
  useEffect(() => {
    props.setAnime6([]);
    fetchAnime(
      "https://kitsu.io/api/edge/anime?sort=-createdAt&page[limit]=20&page[offset]=0",
      props.setAnime6
    );
    fetchAnime(
      "https://kitsu.io/api/edge/anime?sort=-createdAt&page[limit]=20&page[offset]=20",
      props.setAnime6
    );
  }, [props.setAnime6]);

  // Render the carousels for each category
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
