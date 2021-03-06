import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import "swiper/swiper-bundle.css";
// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper";

// install Swiper modules
SwiperCore.use([Scrollbar]);

const Recommends = ({ recommends }) => {
  const navigate = useNavigate();

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
          breakpoints={{
            280: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            414: {
              slidesPerView: 2.2,
              spaceBetween: 5,
            },
            492: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            663: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1025: {
              slidesPerView: 4.2,
              spaceBetween: 10,
            },
          }}
          scrollbar={{
            hide: true,
          }}
        >
          {recommends.map((recommend) => (
            <SwiperSlide key={recommend.id} className="pb-4">
              <div className="single-recommend">
                {recommend.name ? (
                  <div
                    style={{ cursor: "pointer" }}
                    className="recommend-img-container"
                    onClick={() => {
                      navigate(`/tv/${recommend.id}`);
                      window.scroll({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      height="100%"
                      src={`https://image.tmdb.org/t/p/w250_and_h141_face${
                        recommend.backdrop_path || recommend.poster_path
                      }`}
                      alt=""
                    />
                  </div>
                ) : (
                  <div
                    className="recommend-img-container"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/movie/${recommend.id}`);
                      window.scroll({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      height="100%"
                      src={`https://image.tmdb.org/t/p/w250_and_h141_face${
                        recommend.backdrop_path || recommend.poster_path
                      }`}
                      alt=""
                    />
                  </div>
                )}

                <div>
                  {recommend.name ? (
                    <span
                      onClick={() => {
                        navigate(`/tv/${recommend.id}`);
                        window.scroll({ top: 0, behavior: "smooth" });
                      }}
                      className="font-bold text-black text-xs pb-4 pt-2 show-name cursor-pointer"
                    >
                      {recommend.name}
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        navigate(`/movie/${recommend.id}`);
                        window.scroll({ top: 0, behavior: "smooth" });
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
