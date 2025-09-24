import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold my-5">Find Us on</h2>

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
    </div>
  );
};

export default FindUs;
