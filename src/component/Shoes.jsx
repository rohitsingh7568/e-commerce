import React from "react";
import { Data } from "./Data";
import { useLocation, useNavigate } from "react-router-dom";

const Shoes = () => {
  const navigate = useNavigate();

  const clickProduct = (
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
    rating
  ) => {
    return (
      <>
        {navigate("/productDetails", {
          state: {
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
          },
        })}
      </>
    );
  };
  return (
    <>
      <div class="shell">
        <div className="container-fluid">
          <div className="row">
            <div className="mt-4">
              <h2 className="main-heading">Accessories</h2>
            </div>
            {Data.map((item) => {
              return (
                <>
                  {item.category === "Shoes" && (
                    <div class="col-md-3">
                      <div
                        class="wsk-cp-product"
                        onClick={() =>
                          clickProduct(
                            item.image,
                            item.image1,
                            item.image2,
                            item.image3,
                            item?.category,
                            item?.brand,
                            item?.title,
                            item?.description,
                            item?.price,
                            item?.discount,
                            item?.rating
                          )
                        }
                      >
                        <div class="wsk-cp-img">
                          <img
                            src={item.image}
                            alt="Product"
                            class="img-responsive"
                          />
                        </div>
                        <div class="wsk-cp-text">
                          <div class="description-prod">
                            <p>{item?.brand}</p>
                          </div>
                          <div class="title-product">
                            <h3>{item?.title}</h3>
                          </div>
                          <div class="category">
                            <span class="product-rating">
                              <span>
                                <i class="bx bxs-star"></i>
                              </span>
                              <span class="review text-light">3.4 | 74</span>
                            </span>
                          </div>

                          <div class="card-footer">
                            <div class="wcf-left">
                              <span class="price">Price :{item?.price}</span>
                            </div>
                            <div class="wcf-left">
                              <span class="price off-price">
                                {item?.discount}% off
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoes;
