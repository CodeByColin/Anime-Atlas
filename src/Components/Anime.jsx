import Carousel from "./Carousel";
import { useEffect } from "react";

const Anime = (props) => {
  //HIGHEST RATED
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0",
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          props.setAnime(data.data);
        } else {
          console.error("Error fetching anime:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnime();
  }, []);

  //MOST POPULAR
  useEffect(() => {
    const fetchAnime2 = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20&page[offset]=0",
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          props.setAnime2(data.data);
        } else {
          console.error("Error fetching anime:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnime2();
  }, []);
  //Fall 2023 Anime
  useEffect(() => {
    const fetchAnime3 = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?filter[season]=fall&filter[seasonYear]=2023&sort=popularityRank&page[limit]=20",
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          props.setAnime3(data.data);
        } else {
          console.error("Error fetching anime:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnime3();
  }, []);
  //WINTER 2023
  useEffect(() => {
    const fetchAnime4 = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?filter[season]=winter&filter[seasonYear]=2023&sort=popularityRank&page[limit]=20",
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          props.setAnime4(data.data);
        } else {
          console.error("Error fetching anime:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnime4();
  }, []);

  useEffect(() => {
    const fetchAnime5 = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?filter[subtype]=movie&sort=popularityRank&page[limit]=20",
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          props.setAnime5(data.data);
        } else {
          console.error("Error fetching anime:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnime5();
  }, []);
  //RECENTLY ADDED
  useEffect(() => {
    const fetchAnime6 = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?sort=-createdAt&page[limit]=20",
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          props.setAnime6(data.data);
        } else {
          console.error("Error fetching anime:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnime6();
  }, []);

  return (
    <div className="flex flex-col">
      <Carousel anime={props.anime} title="Highest Rated" />
      <Carousel anime={props.anime2} title="Most Popular" />
      <Carousel anime={props.anime3} title="Fall 2023" />
      <Carousel anime={props.anime4} title="Winter 2023" />
      <Carousel anime={props.anime5} title="Popular Movies" />
      <Carousel anime={props.anime6} title="Recently Added" />
    </div>
  );
};

export default Anime;
