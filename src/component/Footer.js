import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-box-left">
          <h1 className="logo">TMDB</h1>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <div className="footer-box">
          <h5>Customer Care</h5>
          <div className="footer-line"></div>
          <h5>About Us</h5>
          <h5>Privacy Policy</h5>
          <h5>Terms & Conditions</h5>
          <h5>Leaderboard</h5>
          <h5>System Status</h5>
        </div>
        <div className="footer-box">
          <h5>GET INVOLVED</h5>
          <div className="footer-line"></div>
          <h5>Pagination</h5>
          <h5>Terms & Conditions</h5>
          <h5>Add New Tv Show</h5>
          <h5>Add New Movie</h5>
          <h5>Term of use</h5>
        </div>
        <div className="footer-box">
          <h5>Company</h5>
          <div className="footer-line"></div>
          <h5>Help Center</h5>
          <h5>Address</h5>
          <h5>Privacy Policy</h5>
          <h5>Receivers & Amplifiers</h5>
          <h5>Api</h5>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Copyright 2021 | Made By{" "}
          <span className="myName">Eslam Mohamed.</span> Powered by{" "}
          <span className="vue">React js</span>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
