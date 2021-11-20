import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper";

// install Swiper modules
SwiperCore.use([Scrollbar]);
const ShowCard = ({ shows }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <Swiper
      className="pouplerSlider"
      spaceBetween={20}
      slidesPerView={7.2}
      scrollbar={{
        hide: true,
      }}
    >
      {shows &&
        shows.map((show) => (
          <SwiperSlide key={show.id}>
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
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ShowCard;
