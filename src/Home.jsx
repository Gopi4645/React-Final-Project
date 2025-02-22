import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    { name: "Fresh Vegetables", icon: "bi-carrot text-success", image: "vegitabless.jpg", link: "/veg", btnClass: "btn-success", bgClass: "bg-light" },
    { name: "Milk & Dairy", icon: "bi-cup-straw text-warning", image: "milkdairy.png", link: "/milk", btnClass: "btn-warning", bgClass: "bg-warning-subtle" },
    { name: "NonVeg Dishes", icon: "bi-egg-fried text-danger", image: "nonveg.avif", link: "/nonveg", btnClass: "btn-danger", bgClass: "bg-danger-subtle" },
    { name: "Fresh Fruits", icon: "bi-apple text-danger", image: "freshfruits.webp", link: "/fruits", btnClass: "btn-danger", bgClass: "bg-light" },
    { name: "Fast Food", icon: "bi-burger text-warning", image: "fastfood.jpg", link: "/fastfood", btnClass: "btn-warning", bgClass: "bg-warning-subtle" },
    { name: "Beverages", icon: "bi-cup text-primary", image: "beveragess.avif", link: "/beverages", btnClass: "btn-primary", bgClass: "bg-primary-subtle" },
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "20px" }}> {/* White Background */}
      <div className="container text-center p-4 bg-white shadow-lg rounded">

        {/* Grocery Store Header */}
        <h1 className="display-4 fw-bold">
          <i className="bi bi-shop"></i> Welcome to Grocery Store
        </h1>
        <p className="lead">
          <i className="bi bi-bag-heart-fill"></i> Fresh groceries delivered to your doorstep!
        </p>

        {/* Categories Section */}
        <h2 className="text-success fw-bold mb-3">Popular Categories</h2>

        {/* Search Bar */}
        <div className="input-group mb-4 w-50 mx-auto">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search categories..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <button className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="row mt-4">
          {categories.map((category, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className={`card shadow-lg border-0 ${category.bgClass}`}>
                <img src={category.image} className="card-img-top" alt={category.name} />
                <div className="card-body">
                  <h5 className="card-title">
                    <i className={`bi ${category.icon}`}></i> {category.name}
                  </h5>
                  <p className="card-text text-muted">Explore the best {category.name.toLowerCase()}.</p>
                  <Link to={category.link} className={`btn ${category.btnClass} w-100`}>
                    <i className="bi bi-cart"></i> Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-4 p-3 bg-success text-white rounded">  {/* Green Footer */}
          <Link to="/cart" className="btn btn-light btn-lg me-3 shadow">
            <i className="bi bi-cart-check-fill"></i> Go to Cart
          </Link>
          <Link to="/order" className="btn btn-warning btn-lg shadow">
            <i className="bi bi-receipt-cutoff"></i> View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
