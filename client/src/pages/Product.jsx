import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
// import Announcement from '../components/Announcement';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const FilterTitle = styled.span`
  font-size: 1rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0rem 0.5rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
`;

const FilterSizeOption = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  border: 0.1rem solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 0.5rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <>
      <Navbar />
      <div class="mx-2" style={{ marginTop: "8.7rem" }}>
        {/* <Announcement /> */}
        <div className="row w-100">
          <div className="col-sm-6 col-md-4 d-flex justify-content-center h-100">
            <img
              src="https://i.ibb.co/S6qMxwr/jean.jpg"
              className="w-100"
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-8">
            <h1>Denim Jumpsuit</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </p>
            <h1 className="mt-4">$ 20</h1>
            <div className="d-flex justify-content-between mt-5">
              <div className="d-flex justify-content-center align-items-center">
                <FilterTitle className="mx-2">Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </div>
              <div>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button className="text-nowrap">ADD TO CART</Button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
