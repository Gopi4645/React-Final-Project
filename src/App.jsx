import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import Milk from "./Milk";
import Order from "./Order";
import Contactus from "./Contactus";
import Notfound from "./Notfound";
import { Logout } from "./Store";
import Login from "./Login";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Veg from "./Veg";
import Fruits from "./Fruits";
import Fastfood from "./Fastfood";
import Beverages from "./Beverages";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      {/* Navbar Section - Beautiful Gradient Background */}
      <nav className="navbar navbar-expand-lg" style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)" }}>
        <div className="container">
          <Link className="navbar-brand fw-bold text-white" to="/home">
            Grocery Store
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link text-white" to="/home"><i className="fa-solid fa-house"></i> Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/veg"><i className="fa-solid fa-tree"></i> Veg</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/nonveg"><i className="fa-solid fa-drumstick-bite"></i> NonVeg</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/milk"><i className="fa-solid fa-cow"></i> Milk</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/fruits"><i className="fa-solid fa-apple-whole"></i> Fruits</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/fastfood"><i className="fa-solid fa-burger"></i> Fastfood</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/beverages"><i className="fa-solid fa-champagne-glasses"></i> Beverages</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart <span className="badge bg-light text-dark ms-1">{totalItems}</span></Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/order"><i className="fa-brands fa-first-order"></i> Order</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/about"><i className="fa-regular fa-address-card"></i> About</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contactus"><i className="fa-solid fa-phone"></i> Contact</Link></li>
            </ul>
            <div className="d-flex">
              {isAuthenticated ? (
                <>
                  <span className="navbar-text text-white me-2">Welcome, {user?.name}!</span>
                  <button className="btn btn-outline-light" onClick={() => dispatch(Logout())}>Logout</button>
                </>
              ) : (
                <Link to="/login" className="btn btn-outline-light">Sign In</Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Light Background */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 bg-white p-4 rounded shadow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/veg" element={<Veg />} />
                <Route path="/nonveg" element={<Nonveg />} />
                <Route path="/milk" element={<Milk />} />
                <Route path="/fruits" element={<Fruits />} />
                <Route path="/fastfood" element={<Fastfood />} />
                <Route path="/beverages" element={<Beverages />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Order />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </div>
          </div>

          {/* Quick Bites Section */}
          <div className="row mt-5">
            <h2 className="text-center text-primary fw-bold">🍽️ Quick Bites</h2>
            <p className="text-center text-muted">Interesting food facts and offers for you!</p>
            
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <i className="fa-solid fa-seedling text-success fs-1"></i>
                <h5 className="mt-2">Organic is Better!</h5>
                <p className="text-muted">Did you know? Organic food contains 50% more nutrients than conventional food!</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <i className="fa-solid fa-tag text-danger fs-1"></i>
                <h5 className="mt-2">Flash Sale!</h5>
                <p className="text-muted">Get 20% off on all dairy products. Limited time offer!</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <i className="fa-solid fa-heart text-warning fs-1"></i>
                <h5 className="mt-2">Healthy Eating</h5>
                <p className="text-muted">A balanced diet can improve your mood and energy levels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
