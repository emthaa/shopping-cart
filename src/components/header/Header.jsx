import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <div className="main-header">
      <div className="main-header-left">
        <img className="company-logo undraggable"  src="src\assets\icons8-shirt-64.png"></img>
        <h1 className="company-name unselectable">Clothing Brand.</h1>
      </div>
      <div className="main-header-right">
        <Link className="link" to="/">Home</Link>
        <Link className="link"to="/Shop">Shop</Link>
        <button className="cart">
          <img className="cart-icon" src="src\assets\icons8-cart-48.png"></img>
          <div className="cart-amount">99+</div> 
          {/* make cart function work here <----- */}
        </button>
      </div>
    </div>
  );
}

export default Header;
