import Routing from './Routing';
import { LangProvider } from './contexts/lang';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CartItemsCountProvider } from './contexts/cartItemsCount';
import { AllProductsProvider } from './contexts/allProducts';
import { getAllProducts } from './firestore/firestore';

import { useEffect, useState } from 'react';
function App() {
  const [lang, setLang] = useState('en');
  const [nums, setNums] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setAllProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <Provider store={store}>
      <AllProductsProvider value={{ allProducts }}>
        <LangProvider value={{ lang, setLang }}>
          <CartItemsCountProvider value={{ nums, setNums }}>
            <Routing />
          </CartItemsCountProvider>
        </LangProvider>
      </AllProductsProvider>
    </Provider>
  );
}

export default App;
