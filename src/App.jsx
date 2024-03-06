import ProductDestails from './pages/ProductDetails/ProductDestails';
import NavBar from './components/header/NavBar';
import { LangProvider } from './contexts/lang';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en');
  return (
    <LangProvider value={{ lang, setLang }}>
      <NavBar />
      <ProductDestails />
    </LangProvider>
  );
}
export default App;
