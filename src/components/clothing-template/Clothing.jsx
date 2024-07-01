import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./Clothing.css"
import subtractIcon from "../../assets/subtract.png";
import addIcon from "../../assets/add.png";
function Clothing({ shoppingCart, setShoppingCart }) {

  const location = useLocation();

  const clothingInfoFromLocation = location.state //parameters come from here
  const [amountOfItem, setAmountOfItem] = useState(1)

  function subtractAmountOfItem() {
    setAmountOfItem(Number(amountOfItem))
    if (amountOfItem > 1) {
      setAmountOfItem(amountOfItem - 1)
    }
  }

  function addAmountOfItem() {
    setAmountOfItem(Number(amountOfItem))
    if (amountOfItem < 1000) {
      setAmountOfItem(amountOfItem + 1)
    }
  }

  function handleChange(e) {
    const stringToNumber = Number(e.target.value)
    console.log(e.target.value)
    console.log(stringToNumber)
    if (stringToNumber < 1) {
      setAmountOfItem(1)
    }

    if (stringToNumber > 1000) {
      setAmountOfItem(1000)
    }

    if(stringToNumber == ""){
      setAmountOfItem("")
    }

    if (stringToNumber > 0 && stringToNumber < 1001) {
      setAmountOfItem(stringToNumber)
    }

  }

  function AddToCart() {
    console.log(amountOfItem)

    if(amountOfItem == ""){
      return
    }

    const breakDownShoppingCart = [...shoppingCart];

    const cloneClothingInfo = { ...clothingInfoFromLocation }; // Shallow copy

    delete cloneClothingInfo.description;

    if (breakDownShoppingCart.length < 1) { //first checkout

      

      const newItem = { ...cloneClothingInfo };

      newItem.key = cloneClothingInfo.id;
      newItem.amount = amountOfItem;

      breakDownShoppingCart.push(newItem);


    } else {
      let idMatch = false
      breakDownShoppingCart.forEach((product,index) => {
        
        

        if(product.id == cloneClothingInfo.id){ //item already exists in shopping cart
          idMatch = true
          if(breakDownShoppingCart[index].amount + amountOfItem < 1000){ //edge case
            breakDownShoppingCart[index].amount += amountOfItem
          }else{
            breakDownShoppingCart[index].amount = 1000
          }
        }

      });

      // must be a new item
      if(idMatch == false){
        
        const newItem = { ...cloneClothingInfo };

        newItem.key = cloneClothingInfo.id;
        newItem.amount = amountOfItem;

        breakDownShoppingCart.push(newItem);
      }

    }
    

    // merge duplicate items and add amount as a new property

    setShoppingCart(breakDownShoppingCart);
    
  }


  return (
    <>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <main>
        <div className="product-detail">
        <div className="product-detail-top">
          <img className="product-detail-top-image" src={clothingInfoFromLocation.image}></img>
          <div className="product-detail-top-info">
            <p className="product-detail-top-info-name">{clothingInfoFromLocation.name}</p>
            <p>${clothingInfoFromLocation.price}</p>
            <div className="amountItemSection">
              <button className="subract-item-amount" onClick={subtractAmountOfItem}><img src={subtractIcon}></img></button>
              <input onChange={handleChange} value={amountOfItem} max={1000}></input>
              <button className="add-item-amount" onClick={addAmountOfItem}><img src={addIcon}></img></button>
            </div>
            <button className="add-to-cart-btn" onClick={AddToCart}>Add to cart</button>
          </div>


        </div>
        <div className="product-detail-bottom">
          <h2>Description</h2>
          <p>{clothingInfoFromLocation.description}</p>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Clothing;
