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
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
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
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            Grocery Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home"><i class="fa-solid fa-house"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/veg"><i class="fa-solid fa-tree"></i>
                  Veg
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nonveg"><i class="fa-solid fa-drumstick-bite"></i>
                  NonVeg
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/milk"><i class="fa-solid fa-cow"></i>
                  Milk
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fruits"><i class="fa-solid fa-apple-whole"></i>
                  Fruits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fastfood"><i class="fa-solid fa-burger"></i>
                  Fastfood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/beverages"><i class="fa-solid fa-champagne-glasses"></i>
                  Beverages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart"><i class="fa-solid fa-cart-shopping"></i>
                  Cart <span className="badge bg-danger">{totalItems}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order"><i class="fa-brands fa-first-order"></i>
                  Order
                </Link>
              </li>
              <li><Link to="/about" className="nav-link"><i class="fa-regular fa-address-card"></i>
  <i className="bi bi-info-circle"></i> About
</Link>
</li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus"><i class="fa-solid fa-phone"></i>
                  Contact
                </Link>
              </li>
            </ul>
            {/* Authentication Section */}
            <div className="d-flex">
              {isAuthenticated ? (
                <>
                  <span className="navbar-text text-white me-2">
                    Welcome,Gopi {user?.name}!
                  </span>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(Logout())}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-primary">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
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
    </BrowserRouter>
  );
}

export default App;