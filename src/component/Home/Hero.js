import '../Home/Hero.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const Hero = () => {
  const navigate = useNavigate();
  const [search,setSearch] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(search.length > 0){
      navigate(`/search/${search}`);
    }
  }
    return (
      <div className="hero h-80 flex flex-col justify-center px-10">
        <h1 className="welcome-header">Welcome.</h1>
        <h2 className="para-hero">
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <form onSubmit={handleSubmit} className="search-container">
          <input
            className="hero-input"
            placeholder="Search for a movie,tv show...."
            type="text"
            required
            onChange={(e)=> setSearch(e.target.value)}
          />
          <button className="search-btn">search</button>
        </form>
      </div>
    );
}
 
export default Hero;