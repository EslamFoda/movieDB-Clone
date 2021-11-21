import { Link } from "react-router-dom";
const SearchCards = ({ results, page }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div>
        {results.map((result) => (
          <div className="single-result" key={result.id}>
            <div className="left-result">
              <div className="result-img-container">
                {result.poster_path || result.backdrop_path ? (
                  <img
                    src={`${BASE_URL}${
                      result.poster_path || result.backdrop_path
                    }`}
                    alt=""
                  />
                ) : (
                  <img
                    className="bg-gray-200"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="right-result">
              {result.title ? (
                <Link to={`/movie/${result.id}`}>
                  <h1 className="show-name">
                    {result.title} -{" "}
                    <span className="text-red-500 text-sm">
                      {result.media_type}
                    </span>
                  </h1>
                </Link>
              ) : (
                <Link to={`/tv/${result.id}`}>
                  <h1 className="show-name">
                    {result.name} -{" "}
                    <span className="text-yellow-500 text-sm">
                      {result.media_type}
                    </span>
                  </h1>
                </Link>
              )}

              {result.release_date && (
                <span className="text-gray-400 text-sm block pb-4">
                  {result.release_date}
                </span>
              )}
              {result.first_air_date && (
                <span className="text-gray-400 text-sm block pb-4">
                  {result.first_air_date}
                </span>
              )}
              {result.overview ? (
                <span className="blabla">
                  {result.overview.substr(0, 170) + "..."}
                </span>
              ) : (
                <div>
                  <span className="blabla mt-5 block">There is no description yet.</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchCards;
