import { useEffect, useState } from "react";
import "./Trending.css";
import ShowCard from "./ShowCard";
const Trending = () => {
  const [hideThisWeek, setHideThisWeek] = useState(false);
  const [hideToday, setHideToday] = useState(true);
  const [trendingToday, setTrendingToday] = useState(null);
  const [trendingWeek, setTrendingWeek] = useState(null);
  const axios = require("axios").default;
  const handleSwitch = (e) => {
    const firstTv = document.querySelector(".today.first");
    const secTv = document.querySelector(".today.sec");
    const wrapperFirst = document.querySelector(".today-wrapper.first");
    const wrapperSec = document.querySelector(".today-wrapper.sec");

    hideActive();
    if (
      e.target.textContent === "Today" ||
      e.target.classList.contains("today-wrapper first")
    ) {
      firstTv.classList.add("today-active");
      wrapperFirst.classList.add("wrap-active");
      setHideThisWeek(false);
      setHideToday(true);
    }
    if (
      e.target.textContent === "This Week" ||
      e.target.classList.contains("today-wrapper sec")
    ) {
      secTv.classList.add("today-active");
      wrapperSec.classList.add("wrap-active");
      setHideThisWeek(true);
      setHideToday(false);
    }
  };

  const hideActive = () => {
    const tvWrapper = document.querySelectorAll(".today-wrapper");
    const tv = document.querySelectorAll(".today");
    tvWrapper.forEach((wrap) => {
      wrap.classList.remove("wrap-active");
    });
    tv.forEach((t) => {
      t.classList.remove("today-active");
    });
  };
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setTrendingToday(res.data.results);
      });
    return () => source.cancel;
  }, [axios]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setTrendingWeek(res.data.results);
      });
    return () => source.cancel;
  }, [axios]);
  return (
    <div className="trending-container">
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>Trending</h1>
          <div onClick={handleSwitch} className="ontv-container">
            <div className="today-wrapper first wrap-active">
              <span className="today first today-active">Today</span>
            </div>
            <div className="today-wrapper sec">
              <span className="today sec">This Week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        {hideToday && <ShowCard shows={trendingToday} />}
        {hideThisWeek && <ShowCard shows={trendingWeek} />}
      </div>
    </div>
  );
};

export default Trending;
