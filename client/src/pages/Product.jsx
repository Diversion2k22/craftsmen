import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

import ProductDetails from "../components/ProductDetails";

const Product = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Navbar val={true}/>
      <section style={{ marginTop: "8.7rem" }}>
        <ProductDetails id={id} />
      </section>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Product;

