import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
// import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
// import { useEffect, useState } from "react";
// import { userRequest } from "../requestMethods";
// import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // const history = useHistory();
  return (
    <div className="my-5">
      <Navbar val={true} />
      <div className="w-100 text-center mt-3"><h1 className="fw-bold text-uppercase">your bag</h1></div>
      <div className="mt-5 container-fluid d-flex justify-content-between shop">
        <button className="me-auto p-1 p-sm-2 bg-dark text-white fw-bold">CONTINUE SHOPPING</button>
        <button className="ms-auto p-1 p-sm-2 bg-dark text-white fw-bold">CHECKOUT NOW</button>
      </div>
      <div className="row w-100 mt-5 mb-5">
        <div className="col-md-8">
          {cart.products.map((product) => (
            <div className="d-flex justify-content-between align-items-center mt-4">
              <img className="w-25" src={product.img} alt="" />
              <div>
                <h5>
                  <b>Product:</b> {product.title}
                </h5>
                <h5>
                  <b>ID:</b> {product._id}
                </h5>
                <ProductColor color={product.color} />
                <h5>
                  <b>Size:</b> {product.sizes}
                </h5>
              </div>
              <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
            </div>
          ))}
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div>
            <div className="p-3" style={{ border: '5px solid grey', borderRadius: '8px' }}>
              <h1 className="text-center mb-4">ORDER SUMMARY</h1>
              <table className="w-100">
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>Rs. {cart.total}</td>
                  </tr>
                  {/* <tr>
                    <td>Estimated Shipping</td>
                    <td>$ 5.90</td>
                  </tr>
                  <tr>
                    <td>Shipping Discount</td>
                    <td>$ 5.90</td>
                  </tr> */}
                  <tr>
                    <th style={{ fontSize: '30px' }}>Total</th>
                    <td style={{ fontSize: '30px' }}>Rs. {cart.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 w-100 d-flex justify-content-center"><button className="p-2 bg-dark text-white fw-bold">CHECKOUT NOW</button></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
