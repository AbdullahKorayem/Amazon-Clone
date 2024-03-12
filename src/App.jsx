import ProductDestails from './pages/ProductDetails/ProductDestails';
import NavBar from './components/header/NavBar';
import { LangProvider } from './contexts/lang';
import { useState } from 'react';
import Home from './pages/home';

function App() {
  const [lang, setLang] = useState('en');
  return (
    <LangProvider value={{ lang, setLang }}>
      <NavBar />
      {/* <ProductDestails /> */}
      <Home />
    </LangProvider>
  );
}
export default App;
