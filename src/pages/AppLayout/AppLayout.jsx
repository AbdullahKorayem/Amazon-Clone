import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../../components/header/NavBar';
import Footer from '../../components/Footer/Footer';
import TransparentPlaceholder from '../../components/Placeholder/transparentPlaceholder';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <>
      {isLoading && <TransparentPlaceholder />}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
