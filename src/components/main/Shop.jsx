import { Outlet } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import useFetchData from "../hooks/useFetchData";
import ClothingCard from "../clothing-template/ClothingCard";
import { useLocation } from 'react-router-dom';
import "./Shop.css"
function Shop({shoppingCart,setShoppingCart}) {
  // fetches api data and combines what it needs
  const { menClothing, womenClothing } = useFetchData();
  const completeClothingList = menClothing.concat(womenClothing);

  const location = useLocation()

  if(location.pathname == "/Shop"){

  return (
    <>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
      <main>
        <div className="shop-page-list">
          {completeClothingList.length > 0 ? (
            completeClothingList.map((product) => (
              <ClothingCard
                key={product.id}
                image={product.image}
                name={product.title}
                price={product.price}
                id={product.id}
                description={product.description}
              />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
        
      </main>
      <Footer />
    </>
  );
}
else{
  return(<Outlet />)
}
}

export default Shop;
