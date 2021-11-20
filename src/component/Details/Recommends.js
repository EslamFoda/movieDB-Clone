import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";
import "swiper/swiper-bundle.css";
// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper";

// install Swiper modules
SwiperCore.use([Scrollbar]);

const Recommends = ({ recommends }) => {
  const navigate = useNavigate();
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="recommends-container ">
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>Recommendations</h1>
        </div>
      </div>
      <div className="px-2">
        {" "}
        <Swiper
          spaceBetween={20}
          slidesPerView={4.5}
          scrollbar={{
            hide: true,
          }}
        >
          {recommends.map((recommend) => (
            <SwiperSlide key={recommend.id} className="pb-4">
              <div className="single-recommend">
                <div className="recommend-img-container">
                  <img
                    src={`${BASE_URL}${
                      recommend.backdrop_path || recommend.poster_path
                    }`}
                    alt=""
                  />
                </div>

                <div>
                  {recommend.name ? (
                    <span
                      onClick={() => {
                        navigate(`/tv/${recommend.id}`);
                        window.scroll(0, 0);
                      }}
                      className="font-bold text-black text-xs pb-4 pt-2 show-name cursor-pointer"
                    >
                      {recommend.name}
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        navigate(`/movie/${recommend.id}`);
                        window.scroll(0, 0);
                      }}
                      className="font-bold text-black text-xs pb-4 pt-2 show-name cursor-pointer"
                    >
                      {recommend.original_title}
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {recommends.length === 0 && (
        <div className="px-10 pb-8">We dont have any recommends.</div>
      )}
    </div>
  );
};

export default Recommends;
