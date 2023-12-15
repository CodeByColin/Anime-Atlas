import { useState, useEffect } from "react";

import Header from "./Components/Header.jsx";
import Anime from "./Components/Anime.jsx";

const App = () => {
  const [anime, setAnime] = useState([]);

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
          setAnime(data.data);
        } else {
          console.error("Error fetching anime:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnime();
  }, []);

  return (
    <>
      <Header />
      <Anime anime={anime} />
    </>
  );
};

export default App;
