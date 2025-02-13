import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
    let nonvegItems = useSelector(state => state.products.nonveg);
    let dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 3;
    const maxPages = 3;

    const filteredItems = nonvegItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.min(Math.ceil(filteredItems.length / itemsPerPage), maxPages);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Welcome To NonVeg Dishes</h2>
            <input 
                type="text" 
                className="form-control mb-3 border border-primary rounded-3 shadow-sm" 
                placeholder="Search delicious Nonveg Dishes..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: "10px", fontSize: "16px" }}
            />
            <div className="row">
                {displayedItems.map((item, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card shadow-sm">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text text-success fw-bold">${item.price}</p>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button 
                    className="btn btn-secondary me-2" 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button 
                        key={index} 
                        className={`btn mx-1 ${currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button 
                    className="btn btn-secondary ms-2" 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Nonveg;
