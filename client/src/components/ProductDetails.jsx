import React, { useState } from "react";
import "./ProductDetails.css";
import { products } from "../data";

const ProductDetails = ({ id }) => {
  const [vol, setVol] = useState(0);
  const [size, setSize] = useState(0);
  const maxReviewsDisp = 3, maxReviews = 5;

  const prod = products.find((p) => {
    return p.id === Number(id);
  });
  console.log(prod);

  if (!prod) {
    return (
      <div className="container w-90 mt-5">
        <h1 className="alert alert-danger text-center">
          Error 404: NOT FOUND !!!
        </h1>
      </div>
    );
  }

  //   const sizeChoices = [...Array(prod.maxQuantity).keys()];
  let expanded_Category = "";
  prod.category.forEach((item) => {
    expanded_Category += item + " > ";
  });
  console.log(expanded_Category);

  let avgRating = 0,
    reviewCount = prod.reviews.length;
  prod.reviews.forEach((item) => {
    avgRating += item.rating;
  });
  avgRating = avgRating / reviewCount;
  avgRating = avgRating.toFixed(1);

  let { markpr, sellpr } = prod.prices,
    discount = undefined;
  if (markpr != sellpr) {
    discount = Math.round(((markpr - sellpr) * 100) / markpr);
  }

  return (
    <div className="cardcontainer">
      <div className="row p-1">
        <div className="d-block col-12 p-3 p-lg-2 col-lg-6 col-xxl-5">
          {/* Left Column containing the Product Image and Buttons*/}
          <div className="prodImgSection">
            {/* Product IMAGE */}
            <div className="prodImgCard d-flex justify-content-center px-2 py-3">
              {/* Sqaure Image  */}
              <img src={prod.img} alt={prod.name} />
            </div>
            {/* 'Add to Cart' and 'Buy Now' Buttons */}
            <div className="prod-cart-buy-btns">
              <a href="#" type="button" className="btn btn-cart ">
                <i className="fas fa-cart-plus" />
                <span>Add to Cart</span>
              </a>
              <a
                href="#"
                type="button"
                className="btn btn-buy align-content-center"
              >
                <i className="fas fa-credit-card" />
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* Right Column containing the Product Details */}
        <div className="prodDetails col-12 col-lg-6 col-xxl-7">
          <div className="card p-3">
            {/* Category + Share Link */}
            <p className="text-muted my-1 d-flex justify-content-between">
              <span className="category">
                {/* Home &gt; Beauty &amp; Grooming &gt; VILLAIN Hydra Perfume */}
                {"Home > " + expanded_Category.slice(0, -2)}
              </span>
              <span
                id="copyLink"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link to this Page Copied Successfully!!");
                }}
              >
                <i className="fas fa-share-square">Share</i>
              </span>
            </p>
            {/* Product Title */}
            <h2>{prod.name}</h2>
            {/* Product Stars & Rating Stats */}
            <section className="rating-section">
              <span className="text-muted">
                <span className="badge bg-success">
                  <span>{avgRating}</span>
                  <i className="fas fa-star" />
                </span>
                &nbsp; {prod.ratingCount} Ratings &amp; {reviewCount} Reviews
              </span>
              {prod.isAssured ? (
                <span className="badge rounded-pill mx-2 assureBtn">
                  <i className="fas fa-thumbs-up" /> Assured
                </span>
              ) : (
                <></>
              )}
            </section>
            {/* Prices */}
            <section id="prices">
              <h1 className="sp text-danger">
                <i className="fas fa-rupee-sign" />
                {prod.prices.sellpr.toFixed(2)}

            {/* Price Section */}
            <section id="prices">
              <h1 className="sp">
                <i className="fas fa-rupee-sign" />
                {prod.prices.sellpr}
              </h1>
              &nbsp;
              {discount ? (
                <>
                  <span className="mp text-muted">
                    <del>
                      <i className="fas fa-rupee-sign" />
                      {prod.prices.markpr.toFixed(2)}
                      {prod.prices.markpr}
                    </del>
                  </span>
                  <span className="text-success">{`${discount}% off`}</span>
                </>
              ) : (
                <></>
              )}
            </section>

            {/* Offers */}
            <section id="offers" className="mt-4">
              <h6 className="fw-bold">Available Offers</h6>
              <ul>
                {prod.offers.map((o) => (
                  <li>{o}</li>
                ))}
              </ul>
            </section>

            {/* specs Table */}

            {"volumeList" in prod ? (
              <>
                <div className="row my-1">
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    Volume
                  </div>
                  <div className="col-10">
                    {prod.volumeList.map((item, index) => {
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    Volume
                  </div>
                  <div className="col-9">
                    {prod.volumeList.map((item, index) => {
                      console.log(item, vol === index);
                      return (
                        <button
                          className={`${
                            vol === index ? "selectbtn" : "selectbtn-outline"
                          } mx-1`}
                          onClick={() => setVol(index)}
                        >{`${item}ml`}</button>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            {"sizeList" in prod ? (
              <>
                <div className="row my-1">
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    Size
                  </div>
                  <div className="col-10">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    Size
                  </div>
                  <div className="col-9">
                    {prod.sizeList.map((item, index) => {
                      return (
                        <button
                          className={`${
                            size === index ? "selectbtn" : "selectbtn-outline"
                          } mx-1`}
                          onClick={() => setSize(index)}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="row buyQuantity m-1">
              <div className="col-2 d-flex justify-content-center align-items-center">
                Quantity
              </div>
              <div className="col-5 col-lg-3">
              <div className="col-3 d-flex justify-content-center align-items-center">
                Quantity
              </div>
              <div className="col-5">
                <input
                  type="number"
                  min={1}
                  max={prod.maxQuantity}
                  defaultValue={1}
                />
              </div>
            </div>

            <div className="row my-2">
              <div className="col-2 d-flex justify-content-center align-items-start">
                Highlights
              </div>
              <div className="col-10">
            <div className="row my-1">
              <div className="col-3 d-flex justify-content-center align-items-start">
                Highlights
              </div>
              <div className="col-9">
                <ul>
                  {prod.highlights.map((o) => (
                    <li>{o}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="row mb-1">
              <div className="col-2 d-flex justify-content-center align-items-start">
                Services
              </div>
              <div className="col-10">
            <div className="row mt-2 mb-1">
              <div className="col-3 d-flex justify-content-center align-items-start">
                Services
              </div>
              <div className="col-9">
                <ul>
                  {prod.services.map((o) => (
                    <li>{o}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="row my-1">
              <div className="col-2 d-flex justify-content-center align-items-start">
                Description
              </div>
              <div className="col-10">{prod.desc}</div>
            </div>

            <div className="row my-2">
              <div className="col-2 d-flex justify-content-center align-items-start">
                Expiry Date
              </div>
              <div className="col-10">{prod.expiryDate}</div>
              <div className="col-3 d-flex justify-content-center align-items-start">
                Description
              </div>
              <div className="col-9">{prod.desc}</div>
            </div>

            <div className="row my-2">
              <div className="col-3 d-flex justify-content-center align-items-start">
                Expiry Date
              </div>
              <div className="col-9">{prod.expiryDate}</div>
            </div>
          </div>

          {/* Ratings & Reviews */}
          <section className="reviews-section card p-3 my-3">
            {/* Header Row */}
            <div className="row text-center d-flex align-items-center">
              <h4 className="col-3 fw-bold">Ratings &amp; Reviews</h4>

              <section className="rating-section col-5">
                <span className="text-muted">
                  <span className="badge bg-success">
                    <span>{avgRating}</span>
                    <i className="fas fa-star" />
                  </span>
                  &nbsp; {prod.ratingCount} Ratings &amp; {reviewCount} Reviews
                </span>
              </section>

              <div className="col-4">
                <button className="selectbtn text-uppercase py-2">
                  Rate Product
                </button>
              </div>
            </div>
            <hr className="mb-3" />

            <section id="reviewDisp">
              {/* Reviews Start Here */}
              {prod.reviews.map((rev, index) => {
                return index < maxReviewsDisp ? (
            {/* Reviews Start Here */}
            {prod.reviews.map((rev, index) => {
              return index <= 3 ? (
                <article className="review p-4">
                  <div>
                    <span className="badge bg-success">
                      <span>{rev.rating}</span>
                      <i className="fas fa-star" />
                    </span>
                    &nbsp; {rev.desc}
                  </div>
                  <div className="mt-3">
                    <div className="row d-inline-block">
                      <span className="text-muted fw-bold">{rev.userName}</span>
                      <span className="text-muted">{rev.dateofReview}</span>
                    </div>
                    <div className="row text-muted">
                      <span>
                        <i className="fas fa-check-circle mx-1" />
                        {rev.isCertified ? "Certified Buyer, " : "New Buyer, "}
                        {rev.userCity}
                      </span>
                    </div>
                  </div>
                  <hr className="my-2" />
                </article>
              ) : (
                ""
              );
            })}

            <div id="moreReviews">
              {prod.reviews.map((rev, index) => {
                return index > 3 ? (
                  <article className="review p-4">
                    <div>
                      <span className="badge bg-success">
                        <span>{rev.rating}</span>
                        <i className="fas fa-star" />
                      </span>
                      &nbsp; {rev.desc}
                    </div>
                    <div className="mt-3">
                      <div className="row d-inline-block">
                        <span className="text-muted fw-bold">
                          {rev.userName}
                        </span>
                        <span className="text-muted">{rev.dateofReview}</span>
                      </div>
                      <div className="row text-muted">
                        <span>
                          <i className="fas fa-check-circle mx-1" />
                          {rev.isCertified
                            ? "Certified Buyer, "
                            : "New Buyer, "}
                            ? "Certified Buyer, hh"
                            : "New Buyer, hh"}{" "}
                          {rev.userCity}
                        </span>
                      </div>
                    </div>
                    <hr className="my-2" />
                  </article>
                ) : (
                  ""
                );
              })}


              <div id="moreReviews">
                {prod.reviews.map((rev, index) => {
                  return (index >= maxReviewsDisp && index < maxReviews) ? (
                    <article className="review p-4">
                      <div>
                        <span className="badge bg-success">
                          <span>{rev.rating}</span>
                          <i className="fas fa-star" />
                        </span>
                        &nbsp; {rev.desc}
                      </div>
                      <div className="mt-3">
                        <div className="row d-inline-block">
                          <span className="text-muted fw-bold">
                            {rev.userName}
                          </span>
                          <span className="text-muted">{rev.dateofReview}</span>
                        </div>
                        <div className="row text-muted">
                          <span>
                            <i className="fas fa-check-circle mx-1" />
                            {rev.isCertified
                              ? "Certified Buyer, hh"
                              : "New Buyer, hh"}{" "}
                            {rev.userCity}
                          </span>
                        </div>
                      </div>
                      <hr className="my-2" />
                    </article>
                  ) : (
                    ""
                  );
                })}
              </div>
            </section>
            </div>


            <a
              type="button"
              className="text-dark fw-bolder text-decoration-none mt-3"
              onClick={(e) => {
                var moreRev = document.getElementById("moreReviews");

                console.log(moreRev);

                if (moreRev.style.display === "none") {
                  moreRev.style.display = "block";
                  e.target.innerHTML = "See Less >";
                } else {
                  moreRev.style.display = "none";
                  e.target.innerHTML = "See More Reviews >";
                }
              }}
            >
              See More Reviews &gt;
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
