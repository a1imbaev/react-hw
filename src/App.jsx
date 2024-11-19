import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";

// const defaultValue = [
// ];

// const products = [
  // {
  //   id: 0,
  //   name: "Product 1",
  //   price: 150,
  //   category: "Category 1",
  //   image: "https://cultmall.com.ua/image/cache/catalog/tn1144-750x750.jpg"
  // },
  // {
  //   id: 1,
  //   name: "Product 2",
  //   price: 100,
  //   category: "Category 1",
  //   image: "https://cultmall.com.ua/image/cache/catalog/tn1144-750x750.jpg"
  // }
// ]

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> setProducts(json))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {/* <button onClick={() => setProducts([])}>123</button> */}
      {products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}

export default App;
