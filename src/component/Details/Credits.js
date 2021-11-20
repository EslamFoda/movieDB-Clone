import { Swiper, SwiperSlide } from "swiper/react";
import user from "../../assets/user.svg";
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
          spaceBetween={20}
          slidesPerView={7}
          scrollbar={{
            hide: true,
          }}
        >
          {credits.map((cast) => (
            <SwiperSlide key={cast.id}>
              <div className="singleCast">
                <div className="cast-img-container">
                  {cast.profile_path ? (
                    <img
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
