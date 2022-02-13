
import './product.css';
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter"


const Product = () => {
return  (
    <div>
        <Announcement />
      <Navbar />
        <div class="wrapper">
        
        <div className="card text-center">
          
        <button class="icon"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg></button>
        
        <div   class="card-body">
              <h6 class="card-title"><b> <br /><br /><br /><br /><br /><br /><br /><br />Description: </b><br />
               Blue solid denim basic Full Sleeves jumpsuit.<br /><br /><br /><br />
            </h6> 
          </div>

          <div className="image"> <img src="https://i.ibb.co/S6qMxwr/jean.jpg" width={300} alt=""/> </div>
          <div className="about-product text-center">
          
            <h3>Denim Jumpsuit</h3>
         <div>  <h6>
            <span class=" fa fa-star checked"></span>
            <span class=" fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            Rating
            </h6> 
            </div>                   
                <h4>Rs499</h4>
            <button className="fa fa-arrow-left"></button>
             <button className="btn btn-success buy-now">Buy Now</button>
            <button className="fa fa-arrow-right"></button>
          </div>
          </div>
          </div>
        <Newsletter />
      <Footer />
      </div>
    );
  };

export default Product;
