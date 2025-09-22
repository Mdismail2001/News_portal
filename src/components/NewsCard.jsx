import React, { useState } from "react";
import { FaEye, FaStar, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden my-5">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3 bg-base-200">
          <img
            src={news.author?.img}
            alt={news.author?.name}
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/40?text=?")
            }
          />
          <div>
            <h2 className="font-semibold text-sm">{news.author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(news.author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Bookmark & Share Icons */}
        <div className="flex items-center gap-3 text-gray-600">
          <FaBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-green-500" />
        </div>
      </div>

      {/* Image with Fallback */}
      <figure className="relative w-full h-56">
        {news.image_url ? (
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-56 object-cover"
            onError={(e) => {
              e.target.style.display = "none"; // hide broken img
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

        {/* Read More / Read Less */}
        {news.details.length > 150 && (
          <Link to ={`news-details/${news.id}`} className="font-semibold">Read More...</Link>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {news.tags?.map((tag, idx) => (
            <span key={idx} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-2 border-t">
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span>{news.rating?.number}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
