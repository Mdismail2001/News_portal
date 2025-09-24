import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto py-12 text-gray-800">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent hover:text-black font-semibold transition"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Welcome to <span className="font-semibold">DragonNews Portal</span> — 
          your trusted source for breaking news, in-depth analysis, and inspiring stories 
          from around the world. We deliver news that matters, with integrity and speed.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
            To provide accurate, unbiased, and timely news that empowers our readers 
            to make informed decisions and stay connected with the world.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>
            To be a globally recognized news platform that upholds journalistic 
            integrity while embracing innovation in digital storytelling.
          </p>
        </div>
      </section>

      {/* Team / Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Trust Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Experienced Journalists</h3>
            <p>
              Our team of reporters and editors are dedicated to ethical journalism 
              and fact-checking every story we publish.
            </p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p>
              From politics to technology, sports to culture — we bring you stories 
              that span across the globe with local insights.
            </p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Reader-First Approach</h3>
            <p>
              We listen to our readers and focus on issues that matter most, ensuring 
              that every voice is heard and represented.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-3">Join Our Journey</h2>
        <p className="mb-6 text-gray-600">
          Stay updated with the latest news, insights, and exclusive stories.  
          Be part of our growing community today.
        </p>
        <button className="btn btn-primary px-6 py-3 text-white rounded-lg shadow-md hover:bg-black transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
