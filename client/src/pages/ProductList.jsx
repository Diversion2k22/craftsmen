import Navbar from "../components/Navbar";
// import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar val={true}/>
      <div className="container-fluid">
        <h1 className="mb-5 mt-3">Dresses</h1>
        <div className="d-sm-flex justify-content-between">
          <div className="d-flex justify-content-start align-items-center">
            <h2 className="text-nowrap filter-title">Filter Products:</h2>
            <div className="color">
              <select className="form-select">
                <option disabled selected>Color</option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
              </select>
            </div>
            <div className="size">
              <select className="form-select">
                <option disabled selected>Size</option>
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
              <select className="form-select">
                <option selected>Newest</option>
                <option>Price (asc)</option>
                <option>Price (desc)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
