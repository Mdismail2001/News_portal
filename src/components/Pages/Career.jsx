import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Career = () => {
  return (
    <div className="w-11/12 mx-auto py-12 text-gray-800">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent  hover:text-black font-semibold transition"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Careers at DragonNews</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          At <span className="font-semibold">DragonNews Portal</span>, we believe in the power of storytelling.  
          Join our passionate team of journalists, editors, and innovators who bring truth, speed, and integrity 
          to the world of digital news.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Innovative Culture</h3>
          <p>
            We encourage creativity and embrace modern digital tools to tell stories that matter.
          </p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
          <p>
            From newsroom to leadership, we support career growth with continuous learning and mentorship.
          </p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Impactful Work</h3>
          <p>
            Be part of a mission-driven team delivering stories that shape opinions and inform millions.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Open Positions</h2>
        <div className="space-y-6">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold">News Reporter</h3>
            <p className="text-gray-600 mb-3">
              We’re looking for passionate reporters to cover politics, business, and global affairs.
            </p>
            <button className="btn btn-primary px-5 py-2 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Digital Content Editor</h3>
            <p className="text-gray-600 mb-3">
              Help us ensure accuracy, clarity, and engaging storytelling across all digital platforms.
            </p>
            <button className="btn btn-primary px-5 py-2 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Social Media Strategist</h3>
            <p className="text-gray-600 mb-3">
              Grow our digital presence and engage millions of readers through innovative strategies.
            </p>
            <button className="btn btn-primary px-5 py-2 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-3">Can’t find your role?</h2>
        <p className="mb-6 text-gray-600">
          We’re always looking for talented individuals to join our team.  
          Send us your CV and we’ll reach out when a suitable opportunity arises.
        </p>
        <button className="btn btn-outline btn-primary px-6 py-3 rounded-lg shadow-sm">
          Send Resume
        </button>
      </section>
    </div>
  );
};

export default Career;
