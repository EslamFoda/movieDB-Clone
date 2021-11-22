import { useState, useEffect } from "react";
import Nav from "../component/Nav";
import "./Search.css";
import Spinner from "../component/Spinner";
import { useParams } from "react-router";
import SearchCards from "../component/SearchCards";
const Search = () => {
  const [page, setPage] = useState(1);
  const axios = require("axios").default;
  const [data, setData] = useState([]);
  const { search } = useParams();
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&query=${search}&page=${page}&include_adult=false`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setData(res.data.results);
      });
    return () => source.cancel;
  }, [axios, page, search]);
  return (
    <>
      <Nav />
      <div className="search-section">
        {data && <SearchCards results={data} page={page} />}
        {data.length && data.length > 0 && (
          <div>
            {page > 1 ? (
              <button
                className="previous-btn"
                onClick={() => {
                  setPage(page - 1);
                  window.scroll({ top: 0, behavior: "smooth" });
                }}
              >
                Previous
              </button>
            ) : (
              <button disabled className="previous-btn">
                Previous
              </button>
            )}

            <span className="font-bold">( {page} )</span>
            <button
              className="next-btn"
              onClick={() => {
                setPage(page + 1);
                window.scroll({ top: 0, behavior: "smooth" });
              }}
            >
              Next
            </button>
          </div>
        )}
        {data.length === 0 && <Spinner />}
      </div>
    </>
  );
};

export default Search;
