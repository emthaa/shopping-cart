import Header from '../header/Header';
import './Home.css';
import ClothingCard from '../clothing-template/ClothingCard';
import Footer from '../footer/Footer';
import useFetchData from '../hooks/useFetchData';

const Home = ({shoppingCart,setShoppingCart}) => {
  const { menClothing, womenClothing } = useFetchData();

  const featuredClothing = [
    menClothing[3], 
    menClothing[2], 
    womenClothing[5], 
    womenClothing[3]
  ].filter(item => item);  

  return (
    <>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <main>
        <div className="home-page-top">
          <h2 className="home-page-header">
            The best clothing brand out there
          </h2>
          <p className="home-page-description">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            You'll find clothing pieces here you won't find anywhere else
          </p>
        </div>
        <div className="home-page-featured">
          <h3 className="home-page-featured-header">Featured</h3>
          <div className="home-page-featured-grid">
            {featuredClothing.length > 0 ? (
              featuredClothing.map((product) => (
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
              <p>Loading featured products...</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
