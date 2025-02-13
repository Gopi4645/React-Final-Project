import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Fresh Vegetables", icon: "bi-carrot text-success", image: "vegitabless.jpg", link: "/veg", btnClass: "btn-success" },
    { name: "Milk & Dairy", icon: "bi-cup-straw text-warning", image: "milkdairy.png", link: "/milk", btnClass: "btn-warning" },
    { name: "NonVeg Dishes", icon: "bi-egg-fried text-danger", image: "nonveg.avif", link: "/nonveg", btnClass: "btn-danger" },
    { name: "Fresh Fruits", icon: "bi-apple text-danger", image: "freshfruits.webp", link: "/fruits", btnClass: "btn-danger" },
    { name: "Fast Food", icon: "bi-burger text-warning", image: "fastfood.jpg", link: "/fastfood", btnClass: "btn-warning" },
    { name: "Beverages", icon: "bi-cup text-primary", image: "beveragess.avif", link: "/beverages", btnClass: "btn-primary" },
  ];

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container text-center mt-5">
      <div className="p-4 mb-4 bg-light shadow rounded">
        <h1 className="display-4 text-primary fw-bold">
          <i className="bi bi-shop"></i> Welcome to Grocery Store
        </h1>
        <p className="lead text-muted">
          <i className="bi bi-bag-heart-fill text-danger"></i> Fresh groceries delivered to your doorstep!
        </p>
      </div>

      <input 
        type="text" 
        className="form-control mb-4 w-50 mx-auto" 
        placeholder="Search categories..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div className="row mt-4">
        {filteredCategories.map((category, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-lg border-0">
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

      <div className="mt-4">
        <Link to="/cart" className="btn btn-dark btn-lg me-3 shadow">
          <i className="bi bi-cart-check-fill"></i> Go to Cart
        </Link>
        <Link to="/order" className="btn btn-primary btn-lg shadow">
          <i className="bi bi-receipt-cutoff"></i> View Orders
        </Link>
      </div>
    </div>
  );
};

export default Home;
