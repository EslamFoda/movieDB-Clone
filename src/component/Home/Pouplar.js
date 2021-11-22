import { useEffect, useState } from "react";

import "./Pouplar.css";
import ShowCard from "./ShowCard";
const Popular = () => {
  const axios = require("axios").default;
  const [hideMovies, setHideMovies] = useState(false);
  const [hideShow, setHideShow] = useState(true);
  const [shows, setShows] = useState(null);
  const [movies, setMovies] = useState(null);
  const handleSwitch = (e) => {
    const firstTv = document.querySelector(".ontv.first");
    const secTv = document.querySelector(".ontv.sec");
    const wrapperFirst = document.querySelector(".ontv-wrapper.first");
    const wrapperSec = document.querySelector(".ontv-wrapper.sec");
    hideActive();
    if (
      e.target.textContent === "On Tv" ||
      e.target.classList.contains("ontv-wrapper first")
    ) {
      firstTv.classList.add("ontv-active");
      wrapperFirst.classList.add("wrapper-active");
      setHideMovies(false);
      setHideShow(true);
    }
    if (
      e.target.textContent === "In Theaters" ||
      e.target.classList.contains("ontv-wrapper sec")
    ) {
      secTv.classList.add("ontv-active");
      wrapperSec.classList.add("wrapper-active");
      setHideMovies(true);
      setHideShow(false);
    }
  };

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setShows(res.data.results);
      });
    return () => source.cancel;
  }, [axios]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setMovies(res.data.results);
      });
    return () => source.cancel;
  }, [axios]);
  const hideActive = () => {
    const tvWrapper = document.querySelectorAll(".ontv-wrapper");
    const tv = document.querySelectorAll(".ontv");
    tvWrapper.forEach((wrap) => {
      wrap.classList.remove("wrapper-active");
    });
    tv.forEach((t) => {
      t.classList.remove("ontv-active");
    });
  };

  return (
    <div className="popular-cont">
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>What's Popular</h1>
          <div onClick={handleSwitch} className="ontv-container">
            <div className="ontv-wrapper first wrapper-active">
              <span className="ontv first ontv-active">On Tv</span>
            </div>
            <div className="ontv-wrapper sec">
              <span className="ontv sec">In Theaters</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        {hideShow && <ShowCard shows={shows} />}
        {hideMovies && <ShowCard shows={movies} />}
      </div>
    </div>
  );
};

export default Popular;
