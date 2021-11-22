import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../Spinner";
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
      scrollbar={{
        hide: true,
      }}
      breakpoints={{
        280: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        414: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        492: {
          slidesPerView: 3.2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        663: {
          slidesPerView: 4.2,
          spaceBetween: 10,
        },

        769: {
          slidesPerView: 5.2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        1025: {
          slidesPerView: 7.2,
          spaceBetween: 20,
        },
      }}
    >
      {shows ? (
        shows.map((show) => (
          <SwiperSlide className="slide" key={show.id}>
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
        ))
      ) : (
        <Spinner />
      )}
    </Swiper>
  );
};

export default ShowCard;
