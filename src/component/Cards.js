import { Link } from "react-router-dom";
const Cards = ({ shows }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      {shows &&
        shows.map((show) => (
          <div key={show.id}>
            <div className="singleShow">
              {" "}
              {show.name ? (
                <Link to={`/tv/${show.id}`}>
                  <div className="show-img-container">
                    <img
                      src={
                        `${BASE_URL}${show.poster_path}` ||
                        `${BASE_URL}${show.backdrop_path}`
                      }
                      alt=""
                    />
                    <div className="rate-container">
                      <span className="rate">{show.vote_average}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link to={`/movie/${show.id}`}>
                  <div className="show-img-container">
                    <img
                      src={
                        `${BASE_URL}${show.poster_path}` ||
                        `${BASE_URL}${show.backdrop_path}`
                      }
                      alt=""
                    />
                    <div className="rate-container">
                      <span className="rate">{show.vote_average}</span>
                    </div>
                  </div>
                </Link>
              )}
              <div className="show-name-date">
                {show.name ? (
                  <Link to={`/tv/${show.id}`}>
                    <span className="show-name text-sm">{show.name}</span>
                  </Link>
                ) : (
                  <Link to={`/movie/${show.id}`}>
                    <span className="show-name text-sm">{show.title}</span>
                  </Link>
                )}
                {show.first_air_date ? (
                  <span className=" text-sm block">{show.first_air_date}</span>
                ) : (
                  <span className=" text-sm block">{show.release_date}</span>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Cards;
