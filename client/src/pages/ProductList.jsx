import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import React, { useState } from 'react';
import './ProductList.css';
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name] : value
    });
  };

  // console.log(filters);
  return (
    <div>
      <Navbar val={true} />
      <div className="container-fluid margin-class mt-5">
        <h1 className="mb-5 mt-3">{cat}</h1>
        <div className="d-sm-flex justify-content-between">
          <div className="d-flex justify-content-start align-items-center">
            <h2 className="text-nowrap filter-title">Filter Products:</h2>
            <div className="color">
              <select name="color" onChange={handleFilters} className="form-select">
                <option disabled>Color</option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
              </select>
            </div>
            <div className="size">
              <select name="size" onChange={handleFilters} className="form-select">
                <option disabled>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mt-3 mt-sm-0">
            <h2 className="text-nowrap sort-title">Sort Products:</h2>
            <div className="sort ms-2 ms-sm-0">
              <select onChange={(e)=> setSort(e.target.value)} className="form-select">
                <option value="newest">Newest</option>
                <option value="asc">Price (asc)</option>
                <option value="desc">Price (desc)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default ProductList;
