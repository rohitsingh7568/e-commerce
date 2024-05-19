import React from "react";
import "./ECart.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ECart = () => {
  // Use state to manage cart data
  const [cartData, setCartData] = React.useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  // Handle delete functionality
  const deleteHandle = (i) => {
    const updatedCart = [...cartData];
    updatedCart.splice(i, 1);
    setCartData(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  // Handle increase and decrease quantity
  const updateQuantity = (i, amount) => {
    const updatedCart = [...cartData];
    updatedCart[i].quantity += amount;
    if (updatedCart[i].quantity <= 0) {
      deleteHandle(i);
    } else {
      setCartData(updatedCart);
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
    }
  };

  return (
    <>
      <div className="main-cart">
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping ECart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                    {cartData.length} items
                  </div>
                </div>
              </div>
              {/* Display cart items */}
              {cartData.map((product, i) => (
                <div key={product.productId} className="row border-top border-bottom">
                  <div className="row main align-items-center">
                    <div className="col-2">
                      {/* Replace the image source with the actual product image */}
                      <img
                        className="img-fluid img-main"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <div className="col">
                      <div className="row text-muted">{product.brand}</div>
                      <div className="row">{product.title}</div>
                    </div>
                    <div className="col">
                      {/* Increase and decrease quantity buttons */}
                      <a href="#" onClick={() => updateQuantity(i, -1)}>
                        -
                      </a>
                      <span className="border">{product.quantity}</span>
                      <a href="#" onClick={() => updateQuantity(i, 1)}>
                        +
                      </a>
                    </div>
                    <div className="col">
                      {/* Display quantity-wise price */}
                      &#8377; {(product.price * product.quantity).toFixed(2)}{" "}
                      <span className="close" onClick={() => deleteHandle(i)}>
                        &#10005;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Back to shop link */}
              <div className="back-to-shop">
                <a href="#">
                  <BsFillArrowLeftCircleFill />
                </a>
                <span className="text-muted">Back to shop</span>
              </div>
            </div>
            {/* Summary section */}
            <div className="col-md-4 summary">
              <div>
                <h5 style={{ color: "black" }}>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col" style={{ paddingLeft: 0 }}>
                  ITEMS {cartData.length}
                </div>
                <div className="col text-right">
                  &#8377;{" "}
                  {/* Calculate total price */}
                  {cartData
                    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                    .toFixed(2)}
                </div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select>
                  <option className="text-muted">
                    Standard-Delivery- &#8377;5.00
                  </option>
                </select>
                <p>GIVE CODE</p>
                <input
                  id="code"
                  className="input2"
                  placeholder="Enter your code"
                />
              </form>
              <div className="row">
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">
                  &#8377;{" "}
                  {/* Calculate total price with shipping */}
                  {cartData
                    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                    .toFixed(2)}
                </div>
              </div>
              <button className="btn2">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECart;
