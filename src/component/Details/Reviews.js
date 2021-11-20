import user from "../../assets/user.svg";
import './Reviews.css'
const Reviews = ({ reviews, tv }) => {
  return (
    <div className="review-section bg-gray-100 pb-2">
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>Social</h1>
          <h1 className="review">Reviews</h1>
        </div>
      </div>
      <div>
        <div className="reviews-list">
          {reviews.map((review) => (
            <div className="single-review bg-white" key={review.id}>
              <div className="mr-4">
                <div className="review-img-container">
                  {review.author_details.avatar_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w64_and_h64_face${review.author_details.avatar_path}`}
                      alt=""
                      layout="responsive"
                      width="50"
                      height="50"
                    />
                  ) : (
                    <img
                      src={user}
                      alt=""
                      layout="responsive"
                      width="50"
                      height="50"
                    />
                  )}
                </div>
              </div>
              <div>
                <h1 className="font-bold text-lg text-black">
                  A review by {review.author_details.username}
                </h1>
                <span className="text-gray-500 text-sm">
                  Written by{" "}
                  <span className="text-black">
                    {review.author_details.username}
                  </span>{" "}
                  on {review.created_at}
                </span>
                <p className="text-sm mt-4 text-gray-600">
                  {review.content.substr(0, 400) + "..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {reviews.length === 0 && (
        <div className="reviews-list pb-8">
          <p className="py-4">
            We dont have any reviews for {tv.name || tv.original_title}.
          </p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
