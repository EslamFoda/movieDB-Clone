import "./Details.css";
const ShowDetails = ({ tv }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="backdrop-container">
      <div className="film-grid">
        <div className="film-left">
          {tv.poster_path ? (
            <img
              src={`${BASE_URL}${tv.poster_path || tv.backdrop_path}`}
              alt=""
            />
          ) : (
            <img
              className="bg-gray-300 h-full"
              src={`${BASE_URL}${tv.poster_path || tv.backdrop_path}`}
              alt=""
            />
          )}
        </div>
        <div className="film-right">
          {tv.name ? (
            <h1 className="tv-name">
              {tv.name}
              <span>({tv.first_air_date})</span>
            </h1>
          ) : (
            <h1 className="tv-name">
              {tv.original_title}
              <span>({tv.release_date})</span>
            </h1>
          )}
          <div>
            {tv.genres.map((genre, index) => (
              <span className="text-sm font-semibold" key={index}>
                {genre.name} -
              </span>
            ))}
            {tv.episode_run_time ? (
              <span> {tv.episode_run_time[0]}m</span>
            ) : (
              <span> {tv.runtime}m</span>
            )}
          </div>
          <div className="user-score">
            <div className="vote-container mr-2">
              <span className="vote-tv">{tv.vote_average}</span>
            </div>
            <span className="font-bold text-black">User Score</span>
          </div>
          {tv.tagline ? (
            <h2 className="my-3 text-gray-700 italic text-lg">{tv.tagline}</h2>
          ) : (
            <h2 className="my-3 text-gray-700 italic text-lg">{`there is no tag line for ${
              tv.original_title || tv.name
            }`}</h2>
          )}
          <h2 className="font-bold text-black text-xl mb-3">Overview</h2>
          <p className="font-normal text-base text-black opacity-90">
            {tv.overview}
          </p>
          <p className="font-normal text-base text-black opacity-90">
            We dont have an overview translated in English. Help us expand our
            database by adding one.
          </p>
          <div className="creator-tv-grid mt-5">
            {tv.created_by &&
              tv.created_by.map((creator) => (
                <div v-for="creator in tv.created_by" key={creator.id}>
                  <h1 className="font-bold text-black">{creator.name}</h1>
                  <h1 className="font-normal text-base text-black opacity-90">
                    Creator
                  </h1>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
