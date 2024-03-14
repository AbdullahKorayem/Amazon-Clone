import { Outlet } from 'react-router-dom';
import NavBar from '../../components/header/NavBar';
import Footer from '../../components/Footer/Footer';

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
