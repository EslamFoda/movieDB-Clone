import Nav from "../component/Nav";
import Hero from "../component/Home/Hero";
import Popular from "../component/Home/Pouplar";
import Trending from "../component/Home/Trending";
import Leaderboard from "../component/Home/Leaderboard";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Popular />
      <Trending />
      <Leaderboard />
      <Footer />
    </div>
  );
};

export default Home;
