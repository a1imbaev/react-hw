import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Product 1",
    price: 150,
    category: "Category 1",
    image: "https://cultmall.com.ua/image/cache/catalog/tn1144-750x750.jpg"
  },
  {
    id: 1,
    name: "Product 2",
    price: 100,
    category: "Category 1",
    image: "https://cultmall.com.ua/image/cache/catalog/tn1144-750x750.jpg"
  }
]

function App() {
  return (
    <div className="App">
      {products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}

export default App;
