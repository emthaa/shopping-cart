
import "./ShoppingCartPreview.css";
import "./ShoppingCartCard.css";
import trashIcon from "../../assets/trash.svg";
import xIcon from "../../assets/x.png";
import subtractIcon from "../../assets/subtract.png";
import addIcon from "../../assets/add.png";


function ShoppingCartPreview({
  Visible,
  ChangeVisibility,
  shoppingCart,
  setShoppingCart,
}) {
  // Receive props as an object

  function totalAmount() {
    let totalAmount = 0;
    if (shoppingCart.length > 0) {
      shoppingCart.forEach((product) => {
        totalAmount += product.amount;
      });
    }
    return totalAmount;
  }

  function totalPrice() {
    let totalPrice = 0;
    if (shoppingCart.length > 0) {
      shoppingCart.forEach((product) => {
        for (let i = 0; i < product.amount; i++) {
          totalPrice += product.price;
        }
      });

      totalPrice = Math.ceil(totalPrice * 100) / 100;
    }
    return totalPrice; //rounds the hundreths place
  }

  function deleteItem(productId) {
    // Create a copy of shoppingCart.shoppingCart array
    const updatedCart = shoppingCart.filter(
      (product) => product.key !== productId
    );
    console.log(updatedCart);
    // Call setShoppingCart to update the state with the new array
    setShoppingCart(updatedCart);
  }

  function subtractAmountOfItem(productId) {
    const updatedCart = shoppingCart.map((product) => {
      if (product.key === productId && product.amount > 1) {
        return { ...product, amount: product.amount - 1 };
      }
      return product;
    });
    setShoppingCart(updatedCart);
  }

  function addAmountOfItem(productId) {
    const updatedCart = shoppingCart.map((product) => {
      if (product.key === productId && product.amount < 1000) {
        return { ...product, amount: product.amount + 1 };
      }
      return product;
    });
    setShoppingCart(updatedCart);
  }

  function handleChange(e, productId) {
    let stringToNumber = Number(e.target.value);
    if (isNaN(stringToNumber)) {
      return;
    }

    if (stringToNumber > 1000) {
      stringToNumber = 1000;
    }

    if (stringToNumber < 1) {
      stringToNumber = 1;
    }

    if (e.target.value == "") {
      stringToNumber = "";
    }

    const updatedCart = shoppingCart.map((product) => {
      if (product.key === productId) {
        return { ...product, amount: stringToNumber };
      }
      return product;
    });
    setShoppingCart(updatedCart);
  }

  if (Visible) {
    document.body.classList.add("no-scroll");
    return (
      <div className="shopping-cart-preview">
        <div className="shopping-cart-preview-header">
          <p className="shopping-cart-preview-header-title">
            Cart ({totalAmount()})
          </p>
          <button
            className="shopping-cart-preview-header-close-btn"
            onClick={ChangeVisibility}
          >
            <img src={xIcon} alt="Close" />
          </button>
        </div>
        {shoppingCart.length > 0 ? (
          <div className="shopping-cart-items">
            {shoppingCart.map((product) => (
              // delete item, and subtract or add total

              <div key={product.key} className="shopping-cart-card">
                <img
                  src={product.image}
                  className="shopping-cart-card-image"
                  alt={product.name}
                />
                <div className="shopping-cart-card-info">
                  <div className="shopping-cart-card-header">
                    <p className="shopping-cart-card-name">{product.name}</p>
                    <button
                      className="shopping-cart-card-delete-btn"
                      onClick={() => deleteItem(product.key)}
                    >
                      <img src={trashIcon} alt="Delete" />
                    </button>
                  </div>
                  <p className="shopping-cart-card-price">${product.price}</p>
                  <div className="shopping-cart-card-amount">
                    <button
                      className="shopping-cart-card-subtract-btn"
                      onClick={() => subtractAmountOfItem(product.key)}
                    >
                      <img src={subtractIcon} alt="Subtract" />
                    </button>
                    <input
                      value={product.amount}
                      max={1000}
                      className="shopping-cart-card-amount-input"
                      onChange={() => handleChange(event, product.key)}
                    />
                    <button
                      className="shopping-cart-card-add-btn"
                      onClick={() => addAmountOfItem(product.key)}
                    >
                      <img src={addIcon} alt="Add" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="shopping-cart-items-empty">
            <p>Your shopping cart is empty.</p>
          </div>
        )}
        <div className="shopping-cart-preview-footer">
          <p className="shopping-cart-preview-footer-total">
            Total: ${totalPrice()}
          </p>
          <button className="shopping-cart-preview-footer-checkout-btn">
            Checkout
          </button>
        </div>
      </div>
    );
  } else {
    document.body.classList.remove("no-scroll");
    return null; // Return null if not visible
  }
}

export default ShoppingCartPreview;
