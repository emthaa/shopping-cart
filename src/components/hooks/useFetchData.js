// src/hooks/useFetchData.js
import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [menClothing, setMenClothing] = useState([]);
  const [womenClothing, setWomenClothing] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const menClothingData = data.filter(product => product.category === "men's clothing");
        const womenClothingData = data.filter(product => product.category === "women's clothing");

        setMenClothing(menClothingData);
        setWomenClothing(womenClothingData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return { menClothing, womenClothing };
};

export default useFetchData;
