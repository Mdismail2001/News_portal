import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";

const FindUs = ({ bookmarkNews }) => {
  const [activeTab, setActiveTab] = useState("findus"); // "findus" | "bookmarks"

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between font-bold my-5">
        {/* Find Us toggle */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab("findus")}
        >
          <h2>Find Us on</h2>
          {activeTab === "findus" ? (
            <IoIosArrowDropupCircle className="text-lg" />
          ) : (
            <IoIosArrowDropdownCircle className="text-lg" />
          )}
        </div>

        {/* Bookmark toggle */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab("bookmarks")}
        >
          <h2>Bookmark List: {bookmarkNews.length}</h2>
          {activeTab === "bookmarks" ? (
            <IoIosArrowDropupCircle className="text-lg" />
          ) : (
            <IoIosArrowDropdownCircle className="text-lg" />
          )}
        </div>
      </div>

      {/* Conditional Rendering */}
      {activeTab === "findus" ? (
        <div className="join join-vertical w-full">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-base-100 join-item justify-start"
          >
            <FaFacebook /> Facebook
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-base-100 join-item justify-start"
          >
            <FaTwitter /> Twitter
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-base-100 join-item justify-start"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      ) : (
        <div className="p-3 bg-base-200 rounded-lg">
          {bookmarkNews.length > 0 ? (
            <ul className="space-y-2">
              {bookmarkNews.map((news, idx) => (
                <li key={idx} className="p-2 bg-white shadow rounded">
                  {news.title || "Untitled News"}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No bookmarks yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FindUs;
