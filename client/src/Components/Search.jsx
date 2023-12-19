import { useEffect, useState } from "react";

const Search = ({ query, resetSearch, showDetails }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const formattedQuery = encodeURIComponent(query);
      const response = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${formattedQuery}&page[limit]=20&page[offset]=0`
      );
      const data = await response.json();
      setResults(data.data);
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <>
      {results.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {results.map((anime) => (
            <div
              key={anime.id}
              className="flex flex-col items-center space-y-2 cursor-pointer"
              style={{ maxWidth: "200px" }}
            >
              <img
                src={anime.attributes.posterImage.small}
                alt={`Cover of ${
                  anime.attributes.titles.en || anime.attributes.titles.en_jp
                }`}
                className="mx-auto"
                onClick={() => showDetails(anime)}
              />
              <span className="text-xs text-center break-words overflow-hidden line-clamp-3">
                {anime.attributes.titles.en || anime.attributes.titles.en_jp}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full text-neon">
          <div className="text-center">
            No results found. Try another search.
          </div>
        </div>
      )}
      <div className="flex justify-center my-4">
        <button onClick={resetSearch} className="btn btn-primary">
          Back to Home
        </button>
      </div>
    </>
  );
};

export default Search;
