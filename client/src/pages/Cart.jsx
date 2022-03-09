import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
// import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProductAmount = styled.div`
  font-size: 2.4rem;
  margin: 0.5rem;
  ${mobile({ margin: "0.5rem 1rem" })}
`;

const Cart = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar val={true}/>
      <div className="w-100 text-center mt-3"><h1 className="fw-bold text-uppercase">your bag</h1></div>
      <div className="mt-5 container-fluid d-flex justify-content-between shop">
        <button className="me-auto p-1 p-sm-2 bg-dark text-white fw-bold">CONTINUE SHOPPING</button>
        <a className="nav-link text-nowrap" href="/#">Shopping Bag(2)</a>
        <a className="nav-link text-nowrap" href="/#">Your Wishlist(0)</a>
        <button className="ms-auto p-1 p-sm-2 bg-dark text-white fw-bold">CHECKOUT NOW</button>
      </div>
      <div className="row w-100 mt-5 mb-5">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center">
            <img className="w-25" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
            <div>
              <h5>
                <b>Product:</b> JESSIE THUNDER SHOES
              </h5>
              <h5>
                <b>ID:</b> 93813718293
              </h5>
              <ProductColor color="gray" />
              <h5>
                <b>Size:</b> M
              </h5>
            </div>
            <ProductAmountContainer>
              <Add />
              <ProductAmount>2</ProductAmount>
              <Remove />
            </ProductAmountContainer>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <img className="w-25" src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
            <div>
              <h5>
                <b>Product:</b> HAKURA PHILZ T-SHIRT
              </h5>
              <h5>
                <b>ID:</b> 93813718293
              </h5>
              <ProductColor color="gray" />
              <h5>
                <b>Size:</b> M
              </h5>
            </div>
            <ProductAmountContainer>
              <Add />
              <ProductAmount>1</ProductAmount>
              <Remove />
            </ProductAmountContainer>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div>
          <div className="p-3" style={{border:'5px solid grey',borderRadius:'8px'}}>
            <h1 className="text-center mb-4">ORDER SUMMARY</h1>
            <table className="w-100">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>$ 80</td>
                </tr>
                <tr>
                  <td>Estimated Shipping</td>
                  <td>$ 5.90</td>
                </tr>
                <tr>
                  <td>Shipping Discount</td>
                  <td>$ 5.90</td>
                </tr>
                <tr>
                  <th style={{fontSize:'30px'}}>Total</th>
                  <td style={{fontSize:'30px'}}>$ 80</td>
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
