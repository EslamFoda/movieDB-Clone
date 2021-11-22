import { useEffect, useState } from "react";
import Spinner from "../component/Spinner";
import Nav from "../component/Nav";
import Cards from "../component/Cards";
import "./Movies.css";
const Movies = () => {
  const axios = require("axios").default;
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=${page}`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setData((data) => [...data, ...res.data.results]);
      });
    return () => source.cancel;
  }, [axios, page]);

  return (
    <>
      <Nav />
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>Popular Movies</h1>
        </div>
        <div className="allmovies-grid">{data && <Cards shows={data} />}</div>
        {data.length === 0 && <Spinner />}
        {data.length > 0 && <button
          className="loadmore"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </button>}
      </div>
    </>
  );
};

export default Movies;
