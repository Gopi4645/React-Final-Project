import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 p-4 bg-light text-dark rounded">
      <h1 className="text-center text-light bg-primary p-3 rounded shadow">
        <i className="bi bi-info-circle-fill"></i> About Us
      </h1>
      <p className="text-center text-secondary">Learn more about our mission, values, and services.</p>

      <div className="row mt-4">
        {/* About Image */}
        <div className="col-md-6 p-3 rounded border border-primary shadow bg-white">
          <img src="gro.png" className="img-fluid rounded shadow" alt="Grocery Store" />
        </div>

        {/* About Text */}
        <div className="col-md-6 p-3 rounded border border-primary shadow bg-secondary text-light">
          <h3 className="text-light bg-dark p-2 rounded">
            <i className="bi bi-shop"></i> Who We Are
          </h3>
          <p>
            Grocery Store is your one-stop shop for fresh produce, dairy products, and non-veg items.
            We provide high-quality groceries at the best prices, ensuring that our customers get
            the best shopping experience right from their homes.
          </p>

          <h3 className="text-light bg-danger p-2 rounded">
            <i className="bi bi-heart-fill"></i> Our Mission
          </h3>
          <p>
            We aim to make grocery shopping convenient, affordable, and hassle-free.
            With a wide variety of products and fast delivery, we bring freshness to your doorstep.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center mt-5">
        <div className="col-md-4">
          <div className="card shadow-lg p-3 bg-info text-light border border-dark">
            <i className="bi bi-truck display-4"></i>
            <h5 className="mt-3">Fast Delivery</h5>
            <p>We ensure timely delivery of fresh groceries to your home.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg p-3 bg-warning text-dark border border-dark">
            <i className="bi bi-tags display-4"></i>
            <h5 className="mt-3">Best Prices</h5>
            <p>Get the best deals on all grocery items every day.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg p-3 bg-success text-light border border-dark">
            <i className="bi bi-award display-4"></i>
            <h5 className="mt-3">Premium Quality</h5>
            <p>Only the freshest and best-quality products are available.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-4">
        <button onClick={() => navigate("/contact")} className="btn btn-primary btn-lg">
          <i className="bi bi-envelope"></i> Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
