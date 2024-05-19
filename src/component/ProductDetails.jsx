// ProductDetails.jsx

import React, { useEffect, useState } from "react";
import "./productDetailslint.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Add this line


import Swal from 'sweetalert2';

const ProductDetails = () => {
  const [logEmail, setLogEmail] = useState();
  const [cartData, setCartData] = useState([]);
  const location = useLocation();
  const history = useNavigate(); // Use the hook in your component

  const state = location.state;
  const {
    image,
    image1,
    image2,
    image3,
    category,
    brand,
    title,
    description,
    price,
    discount,
    rating,
    id,
  } = state;

  const [defaultImage, setDefaultImage] = useState(image);

  const clickImage = () => {
    setDefaultImage(image);
  };

  const clickImage1 = () => {
    setDefaultImage(image1);
  };

  const clickImage2 = () => {
    setDefaultImage(image2);
  };

  const clickImage3 = () => {
    setDefaultImage(image3);
  };

  const off = () => {
    let calculate = (price * discount) / 100;
    let total = Math.trunc(price - calculate);
    return total;
  };

  const addCart = () => {
    const productData = {
      productId: Math.random() * 10000,
      image,
      id,
      brand,
      title,
      price: off(),
      discount,
      quantity: 1,
    };

    let findIndexData = cartData.find((e) => e.id === id);

    if (!!logEmail) {
      if (findIndexData) {
        Swal.fire({
          title: 'Product is Already Added',
          text: 'Your Product is already has been added.',
          icon: 'warning',
        });
      } else {
        let localData = cartData.concat(productData);
        setCartData(localData);
        localStorage.setItem("cartData", JSON.stringify(localData));
        Swal.fire({
          title: 'Product Added to Cart',
          text: 'Your product has been added to the cart successfully.',
          icon: 'success',
        });
      }
    } else {
      Swal.fire({
        title: 'Login Required',
        text: 'You need to log in to access this feature.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/login");
        }
      });
    }
  };

  useEffect(() => {
    let getLogData = JSON.parse(localStorage.getItem("LoggedInUser")) || [];
    let getCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartData(getCartData);
    setLogEmail(getLogData.email);
  }, []);

  return (
    <div>
     <div className="container-main-div ">
        <div className="single-product " style={{ position: "relative", top: "50px" }}>
          <div className="row-div ">
            <div className="col-6-div">
              <div className="product-image">
                <div className="product-image-main"> 
                  <img src={defaultImage} alt="" id="product-main-image" />
                </div>
                <div className="product-image-slider">
                  <img
                    src={image}
                    onClick={clickImage}
                    alt=""
                    className="image-list"
                  />
                  <img
                    src={image1}
                    onClick={clickImage1}
                    alt=""
                    className="image-list"
                  />
                  <img
                    src={image2}
                    onClick={clickImage2}
                    alt=""
                    className="image-list"
                  />
                  <img
                    src={image3}
                    onClick={clickImage3}
                    alt=""
                    className="image-list"
                  />
                </div>
              </div>
            </div>
            <div className="col-6-div">
              <div className="breadcrumb">
                <span>
                  <Link to="/Home">Home</Link>
                </span>
                <span>
                  <Link to="/Home">Product</Link>
                </span>
                <span className="active">{category}</span>
              </div>

              <div className="product">
                <div className="product-title">
                  <h2>{brand}</h2>
                  <h4>{title}</h4>
                </div>
                <div className="product-rating">
                  <span>
                    <i className="bx bxs-star"></i>
                  </span>
                  <span>
                    <i className="bx bxs-star"></i>
                  </span>
                  <span>
                    <i className="bx bxs-star"></i>
                  </span>
                  <span>
                    <i className="bx bxs-star"></i>
                  </span>
                  <span>
                    <i className="bx bxs-star"></i>
                  </span>
                  <span className="review">({rating})</span>
                </div>
                <div className="product-price">
                  <span className="offer-price">₹ {off()}.00</span>
                  <span className="sale-price">{price}</span>
                </div>

                <div className="product-details">
                  <h3>Description</h3>
                  <p>{description}</p>
                </div>
                <div className="product-size mb-5">
                  <h4>Size</h4>
                  {category === "Shoes" && (
                    <div className="size-layout">
                          
                      <input
                        type="radio"
                        name="size"
                        value="S"
                        id="1"
                        class="size-input"
                      />
                      <label for="1" class="size">
                        S
                      </label>

                      <input
                        type="radio"
                        name="size"
                        value="M"
                        id="2"
                        class="size-input"
                      />
                      <label for="2" class="size">
                        M
                      </label>

                      <input
                        type="radio"
                        name="size"
                        value="L"
                        id="3"
                        class="size-input"
                      />
                      <label for="3" class="size">
                        L
                      </label>

                      <input
                        type="radio"
                        name="size"
                        value="XL"
                        id="4"
                        class="size-input"
                      />
                      <label for="4" class="size">
                        XL
                      </label>

                      <input
                        type="radio"
                        name="size"
                        value="XXL"
                        id="5"
                        class="size-input"
                      />
                      <label for="5" class="size">
                        XXL
                      </label>
                    </div>
                  )}
                
                  
                  
                  {category === "cloths" && (
                    <div className="size-layout">
                        
                      <input
                        type="radio"
                        name="size"
                        value="6"
                        id="1"
                        class="size-input"
                      />
                      <label for="1" class="size">
                        S
                      </label>

                      <input
                        type="radio"
                        name="size"
                        value="7"
                        id="2"
                        class="size-input"
                      />
                      <label for="2" class="size">
                        M
                      </label>

                      <input
                        type="radio"
                        name="size"
                        value="8"
                        id="3"
                        class="size-input"
                      />
                      <label for="3" class="size">
                        L
                      </label>

                      <input
                        type="radio"
                        name="size"
                        value="9"
                        id="4"
                        class="size-input"
                      />
                      <label for="4" class="size">
                        XL
                      </label>

                      <input
                        type="radio"
                        name="size"
                        value="10"
                        id="5"
                        class="size-input"
                      />
                      <label for="5" class="size">
                        XXL
                      </label>
                    </div>
                  )}
                </div>

                <div className="product-btn-group">
                  <div className="button buy-now">
                    <i className="bx bxs-zap"></i> Buy Now
                  </div>
                  <div className="button add-cart" onClick={addCart}>
                    <i className="bx bxs-cart"></i> Add to Cart
                  </div>
                  <div className="button heart">
                    <i className="bx bxs-heart"></i> Add to Wishlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
