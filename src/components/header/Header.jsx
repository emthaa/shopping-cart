// Header.js
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingCartPreview from "./ShoppingCartPreview";
import companyLogo from "../../assets/icons8-shirt-64.png";
import cartIcon from "../../assets/icons8-cart-48.png";

function Header({shoppingCart,setShoppingCart}) {
  const [checkoutMenuAppearance, setCheckoutMenuAppearance] = useState(false);

  const toggleCheckoutMenu = () => {
    setCheckoutMenuAppearance(!checkoutMenuAppearance);
  };

  function totalAmount(){
    let totalAmount = 0
    if (shoppingCart.length > 0) {
    shoppingCart.forEach((product) => {
      totalAmount += product.amount
    });
    console.log(totalAmount)
    if(totalAmount > 99){
      return "99+"
    }else{
      return totalAmount
    }

  }else{
    return 0;
  }
  }

  return (
    <header className="main-header">
      <div className="main-header-left">
        <img
          className="company-logo undraggable"
          src={companyLogo}
          alt="Company Logo"
        />
        <h1 className="company-name unselectable">Clothing Brand.</h1>
      </div>
      <div className="main-header-right">
        <Link className="link homeLink" to="/">
          Home
        </Link>
        <Link className="link shopLink" to="/Shop">
          Shop
        </Link>
        <button className="cart" onClick={toggleCheckoutMenu}>
          <img
            className="cart-icon"
            src={cartIcon}
            alt="Cart Icon"
          />
          <div className="cart-amount">{totalAmount()}</div>
        </button>
        <ShoppingCartPreview 
        Visible={checkoutMenuAppearance} 
        ChangeVisibility={toggleCheckoutMenu}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
         />
      </div>
    </header>
  );
}

export default Header;
