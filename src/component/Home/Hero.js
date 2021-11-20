import '../Home/Hero.css'
const Hero = () => {
    return (
      <div className="hero h-80 flex flex-col justify-center px-10">
        <h1 className="welcome-header">Welcome.</h1>
        <h2 className="para-hero">
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <form className="search-container">
          <input
            className="hero-input"
            placeholder="Search for a movie,tv show...."
            type="text"
          />
          <button className="search-btn">search</button>
        </form>
      </div>
    );
}
 
export default Hero;