import SignIn from './components/SignIn/SignIn';
import CreateAcc from './components/Register/CreateAcc';
import CartCard from './components/Cards/CartCard';
import NavBar from './components/header/NavBar';
import { HomeCardOneImage } from './components/Cards/HomeCards';
import { HomeCardFourImage } from './components/Cards/HomeCards';
function App() {
  return (
    <>
      <NavBar />
      <SignIn />
      <CreateAcc />
      <CartCard />
    </>
  );
}
export default App;
