import Routing from './Routing';
import { LangProvider } from './contexts/lang';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CartItemsCountProvider } from './contexts/cartItemsCount';
import { AllProductsProvider } from './contexts/allProducts';
import { AllCategoriesProvider } from './contexts/allCategories';
import {
  getAllCategories,
  getAllProducts,
  getCartItems,
} from './firestore/firestore';
import { useEffect, useState } from 'react';
function App() {
  const [lang, setLang] = useState('en');
  const [nums, setNums] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <Provider store={store}>
      <AllProductsProvider value={{ allProducts }}>
        <AllCategoriesProvider value={{ categories, setCategories }}>
          <LangProvider value={{ lang, setLang }}>
            <CartItemsCountProvider value={{ nums, setNums }}>
              <Routing />
            </CartItemsCountProvider>
          </LangProvider>
        </AllCategoriesProvider>
      </AllProductsProvider>
    </Provider>
  );
}

export default App;
