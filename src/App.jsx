import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app-container">
      {loading && <div className="loading">Loading...</div>}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
