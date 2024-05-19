import React from "react";
import { Data } from "./component/Data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const clickProduct = (
    id,
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
            id,
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
          },
        })}
      </>
    );
  };
  return (
    <>
      <div class="shell">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src={require("./component/Image/slider/img3.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={require("./component/Image/slider/img2.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("./component/Image/slider/img1.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("./component/Image/slider/img4.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="mt-4">
              <h2 className="main-heading">Clothing For Men And Women</h2>
            </div>
            {Data.map((item) => {
              return (
                <>
                  {item.category === "cloths" && (
                    <div class="col-md-3">
                      <div
                        class="wsk-cp-product"
                        onClick={() =>
                          clickProduct(
                            item.id,
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
                              <span class="review text-light">3.4 |{item?.rating}</span>
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
            <div className="mt-4">
              <h2 className="main-heading mb-4">Shoes for Man and Woman</h2>
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
                            item.id,
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
            <div className="mt-4">
              <h2 className="main-heading mb-4">accessories</h2>
            </div>
            {Data.map((item) => {
              return (
                <>
                  {item.category === "accessories" && (
                    <div class="col-md-3">
                      <div
                        class="wsk-cp-product"
                        onClick={() =>
                          clickProduct(
                            item.id,
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

export default Home;
