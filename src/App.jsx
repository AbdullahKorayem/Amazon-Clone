import SignIn from './components/SignIn/SignIn';
import CreateAcc from './components/Register/CreateAcc';
import CartCard from './components/Cards/CartCard';
import NavBar from './components/header/NavBar';
import Footer from './components/Footer/Footer';
import ProductCard from './components/Cards/ProductCard';
import SidebarWithBurgerMenu from './components/SideBar/Sidebar';
import Slider from './components/Slider/slider';
function App() {
  return (
    <>
      <NavBar />
      <div>{/* <SidebarWithBurgerMenu /> */}</div>
      <Slider />
      {/* <SignIn />
      <CreateAcc />
      <CartCard /> */}
      {/* <ProductCard
        name="Product 1"
        price={10}
        image="https://www.iphoned.nl/wp-content/uploads/2023/06/iphone-15-nieuwe-renders.jpg"
        description="Description of Product 1"
      /> */}
      {/* <Footer /> */}
    </>
  );
}
export default App;
