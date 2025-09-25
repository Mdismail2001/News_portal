import React from "react";
import { Link } from "react-router-dom"; // ✅ use react-router-dom not react-router
import { Calendar, Eye } from "lucide-react"; // icons for date and views

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Thumbnail */}
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            {news.title}
          </h2>

          {/* Author + Date + Views */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            {/* Author */}
            <div className="flex items-center gap-2">
              <img
                src={news.author?.img}
                alt={news.author?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-medium">{news.author?.name}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(news.author?.published_date).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{news.total_view?.toLocaleString()} views</span>
            </div>
          </div>

          {/* News Details */}
          <p className="text-gray-700 leading-relaxed mb-6">{news.details}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {news.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link
              to={`/category/${news.category_id}`}
              className="inline-block px-6 py-2 btn btn-primary text-white rounded-lg hover:bg-black"
            >
              🔙 Back to Category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
