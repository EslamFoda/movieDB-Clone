import { Swiper, SwiperSlide } from "swiper/react";
import user from "../../assets/user.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Credits.css";
import "swiper/swiper-bundle.css";
// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper";

// install Swiper modules
SwiperCore.use([Scrollbar]);

const Credits = ({ credits }) => {
  return (
    <div className="credits-container">
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>Full Cast</h1>
        </div>
      </div>
      <div className="px-2">
        <Swiper
          className="pouplerSlider"
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
          scrollbar={{
            hide: true,
          }}
        >
          {credits.map((cast) => (
            <SwiperSlide key={cast.id}>
              <div
                className="singleCast"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <div className="cast-img-container">
                  {cast.profile_path ? (
                    <LazyLoadImage
                      effect="blur"
                      src={`https://image.tmdb.org/t/p/w400${cast.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img src={user} alt="" />
                  )}
                </div>
                <div className="cast-details">
                  <h1 className="cast-orginalname">{cast.original_name}</h1>
                  <span className="text-xs">{cast.character}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Credits;
