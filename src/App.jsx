import Routing from './Routing';
import { LangProvider } from './contexts/lang';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CartItemsCountProvider } from './contexts/cartItemsCount';
import { AllProductsProvider } from './contexts/allProducts';
import { AllCategoriesProvider } from './contexts/allCategories';
import { getAllProducts } from './firestore/firestore';
import { useEffect, useState } from 'react';
import { IsCheckoutProvider } from './contexts/isCheckout';
import { useTranslation } from 'react-i18next';
import { DirProvider } from './contexts/direction';

function App() {
  const { i18n, t } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  const [lang, setLang] = useState(activeLocale);
  const [nums, setNums] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [dir, setDir] = useState(document.dir);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <Provider store={store}>
      <AllProductsProvider value={{ allProducts, setAllProducts }}>
        <AllCategoriesProvider value={{ categories, setCategories }}>
          <LangProvider value={{ lang, setLang }}>
            <DirProvider value={{ dir, setDir }}>
              <IsCheckoutProvider value={{ isChecked, setIsChecked }}>
                <CartItemsCountProvider value={{ nums, setNums }}>
                  <Routing />
                </CartItemsCountProvider>
              </IsCheckoutProvider>
            </DirProvider>
          </LangProvider>
        </AllCategoriesProvider>
      </AllProductsProvider>
    </Provider>
  );
}

export default App;
