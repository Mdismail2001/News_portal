import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="l bg-white rounded-xl shadow-lg p-6 text-center">
            <img src={news.image_url} alt="" className="w-full rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
            <p className="text-gray-600 mb-4">{news.details}</p>
            <Link
            to={`/category/${news.category_id}`}
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
            Back same news
            </Link>
        </div>
        </div>
    );
};

export default NewsDetailsCard;