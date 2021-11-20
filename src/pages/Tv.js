import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../component/Details/Details";
import Nav from "../component/Nav";
import Credits from "../component/Details/Credits";
import Reviews from "../component/Details/Reviews";
import Recommends from "../component/Details/Recommends";
import Footer from "../component/Footer";

const Tv = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [recommends, setRecommends] = useState(null);
  const axios = require("axios").default;
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setShow(res.data);
      });
    return () => source.cancel;
  }, [axios, id]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setCredits(res.data.cast);
      });
    return () => source.cancel;
  }, [axios, id]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setReviews(res.data.results);
      });
    return () => source.cancel;
  }, [axios, id]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setRecommends(res.data.results);
      });
    return () => source.cancel;
  }, [axios, id]);
  return (
    <>
      <Nav />
      {show && <Details tv={show} />}
      {credits && <Credits credits={credits} />}
      {show && reviews && <Reviews reviews={reviews} tv={show} />}
      {recommends && <Recommends recommends={recommends} />}
      {show && credits && reviews && recommends && <Footer />}
    </>
  );
};

export default Tv;
