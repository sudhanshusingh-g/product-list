import products from './data.json'
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
  return (
    <section className="min-h-screen w-full bg-rose-100 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-2 px-6 py-4">
      <ProductList products={products}/>
      <Cart />
    </section>
  );
}

export default App