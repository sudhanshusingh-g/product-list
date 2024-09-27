import products from './data.json'
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import { Provider } from './context/Provider';

function App() {
  return (
    <Provider>
      <section className="min-h-screen w-full bg-rose-100 grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-4 items-start">
        <ProductList products={products} />
        <Cart />
      </section>
    </Provider>
  );
}

export default App