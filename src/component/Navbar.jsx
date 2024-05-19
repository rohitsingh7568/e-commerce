import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

import "../App.css";
import "../component/Navbar.css";
const Navbar = ({ setcount, count, category, setcategory }) => {
  const navigate = useNavigate();
  const logout = () => {
    // const getItem = JSON.parse(localStorage.getItem('LoggedInUser'))
    localStorage.setItem("LoggedInUser", JSON.stringify({}));
    navigate("/");

    setcount(count + 1);
  };
  const GoEcart = () => {
    navigate("/Ecart");
  };

  return (
    <div id="container">
      {/* <!-- SHOP NAME --> */}
      <div id="shopName">
        <Link to="/Home">
          {" "}
          <b>SHOP</b>LANE{" "}
        </Link>
      </div>
      {/* <!-- COLLCETIONS ON WEBSITE --> */}
      <div id="collection">
        <div id="clothing">
          <Link
            class={`${category === "Cloths" ? "active" : ""} `}
            to="/Clothing"
          >
            {" "}
            CLOTHING{" "}
          </Link>
        </div>
        <div id="accessories">
          <Link to="/Accessories"> ACCESSORIES </Link>
        </div>
        <div id="mobile">
          <Link to="/Home"> MOBILE </Link>
        </div>
        <div id="shoes">
          <Link to="/Shoes"> SHOES </Link>
        </div>
      </div>

      <div id="search">
        <i class="fas fa-search search"></i>
        <input
          type="text"
          id="input"
          name="searchBox"
          placeholder="Search for Clothing and Accessories"
        />
      </div>
      {/* <!-- USER SECTION (CART AND USER ICON) --> */}
      <div id="user">
        <button
          class="btn btn-outline-dark rounded-1 "
          type="submit"
          onClick={logout}
        >
          <FaPowerOff />
        </button>
        <button class="btn btn-outline-dark rounded-1 ms-4 " onClick={GoEcart}>
          <FaCartShopping />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
