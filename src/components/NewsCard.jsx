import React, { use, useState } from "react";
import {FaEye, FaStar, FaBookmark, FaShareAlt, FaThumbsUp, FaComment,} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NewsCard = ({ news }) => {
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState(news.likes || 0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentsList, setCommentsList] = useState(news.comments || []);
  const {bookmarkBtn} = use(AuthContext); // bookmark function come from authContext

  // Function to render rating stars
  const renderStars = (rating) => {
    const stars = [];
    const totalStars = 5;
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-sm ${i <= rating ? "text-yellow-500" : "text-gray-300"}`}
        />
      );
    }
    return stars;
  };

  // Add new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setCommentsList([...commentsList, newComment]);
      setNewComment("");
      setShowCommentBox(false); // hide after submitting
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden my-5">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={news.author?.img || "https://via.placeholder.com/40?text=?"}
            alt={news.author?.name || "Unknown"}
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/40?text=?")
            }
          />
          <div>
            <h2 className="font-semibold text-sm">
              {news.author?.name || "Unknown Author"}
            </h2>
            <p className="text-xs text-gray-500">
              {news.author?.published_date
                ? new Date(news.author.published_date).toLocaleDateString()
                : "No Date"}
            </p>
          </div>
        </div>

        {/* Bookmark & Share */}
        <div className="flex items-center gap-3 text-accent">
          <FaBookmark onClick={() => bookmarkBtn(news)} className="cursor-pointer hover:text-black" />
          <FaShareAlt className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Image Section */}
      <figure className="relative w-full h-56">
        {news.image_url ? (
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-56 object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentNode.innerHTML =
                '<div class="flex items-center justify-center w-full h-56 text-gray-500 bg-gray-100">Image Not Found</div>';
            }}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-56 text-gray-500 bg-gray-100">
            Image Not Found
          </div>
        )}
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <p className="text-sm text-gray-600">
          {expanded
            ? news.details
            : news.details.length > 150
            ? news.details.slice(0, 150) + "..."
            : news.details}
        </p>

        {/* Read More */}
        {news.details.length > 150 && (
          <Link
            to={`/news-details/${news.id}`}
            className="font-semibold text-black hover:underline"
          >
            Read More...
          </Link>
        )}

        {/* Tags */}
        {news.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {news.tags.map((tag, idx) => (
              <span key={idx} className="badge badge-outline">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center mb-">
        <span className="text-sm font-semibold text-accent">Likes: {likes}</span>
        <span className="text-sm font-semibold text-accent">Comments: {commentsList.length}</span>
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center  pt-2 border-t text-gray-600">
          {/* Rating Stars */}
          <div className="flex items-center gap-1">
            {renderStars(news.rating?.number || 0)}
          </div>

          {/* Like & Comment */}
          <div className="flex items-center gap-30">
            <button
              onClick={() => setLikes(likes + 1)}
              className="flex items-center gap-1 hover:text-black"
            >
              <FaThumbsUp size={12}/> <p className="text-sm font-semibold">Like</p>
            </button>

            <button
              onClick={() => setShowCommentBox(!showCommentBox)}
              className="flex items-center gap-1 hover:text-black"
            >
              <FaComment size={12} /> <p className="text-sm font-semibold">Comment</p>
            </button>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2">
            <FaEye className="text-lg" />
            <span className="text-sm font-semibold">{news.total_view || 0}</span>
          </div>
        </div>

        {/* Comment Box */}
        {showCommentBox && (
          <div className="mt-3 border-t pt-3">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              onClick={handleAddComment}
              className="mt-2 px-4 py-1 btn btn-primary text-white rounded-lg text-sm hover:bg-black"
            >
              Submit
            </button>
          </div>
        )}

        {/* Show Comments */}
        {commentsList.length > 0 && (
          <div className="mt-3 space-y-2">
            {commentsList.map((cmt, idx) => (
              <div
                key={idx}
                className="p-2 bg-gray-100 rounded-lg text-sm text-gray-700"
              >
                {cmt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
