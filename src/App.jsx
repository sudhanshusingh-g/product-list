import { useContext } from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import OrderConfirmModal from './components/OrderConfirmModal';
import { ProductContext } from './context/ProductContext';

function App() {
  const {confirmOrder }=useContext(ProductContext);
  return (
    <>
      <section
        className="min-h-screen w-full bg-rose-100 grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-4 items-start"
      >
        <ProductList />
        <Cart />
      </section>
      {confirmOrder && <OrderConfirmModal />}
    </>
  );
}

export default App