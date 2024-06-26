import Home from './pages/Home/Home';
import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from 'react-router-dom';
import AppLayout from './pages/AppLayout/AppLayout';
import './App.css';
import Cart from './pages/Cart/Cart';
import ProductDestails, {
  loader as ProductLoader,
} from './pages/ProductDetails/ProductDestails';
import Electronics, {
  loader as electronicsLoader,
} from './pages/Categories/Electronics';
import Kindle, { loader as kindleLoader } from './pages/Categories/Kindle';
import OfficeSupplies, {
  loader as officeSuppliesLoader,
} from './pages/Categories/OfficeSupplies';
import PersonalCare, {
  loader as personalCareLoader,
} from './pages/Categories/PersonalCare';
import Coffee, { loader as coffeeLoader } from './pages/Categories/Coffee';
import Watches, { loader as watchesLoader } from './pages/Categories/Watches';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/CreateAcc';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SearchResults from './pages/SearchResults/SearchResults';
import NotFound from './pages/Not-Found/NotFound';
import { useSelector } from 'react-redux';
import UserProfile from './pages/UserProfile/UserProfile';
import Success from './pages/Stripe/Success';
import Cancel from './pages/Stripe/Cancel';
import Data from './pages/Stripe/data';
import ServiceUnavailable from './pages/Service-Unavailable/ServiceUnavailable';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import { useContext } from 'react';
import { isCheckoutContext } from './contexts/isCheckout';
import ResetPassword from './pages/SignIn/ResetPassword';
import Security from './pages/UserProfile/Security';
import UserAddresses from './pages/UserProfile/UserAddresses';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cart', element: <ProtectedRoute element={<Cart />} /> },
      {
        path: '/profile',
        element: <ProtectedRoute element={<UserProfile />} />,
      },
      {
        path: '/orders',
        element: <ProtectedRoute element={<OrdersPage />} />,
      },
      {
        path: '/editProfile',
        element: <ProtectedRoute element={<Security />} />,
      },
      {
        path: '/address',
        element: <ProtectedRoute element={<UserAddresses />} />,
      },
      {
        path: '/product/:id',
        element: <ProductDestails />,
        loader: ProductLoader,
        errorElement: <ServiceUnavailable />,
      },
      {
        path: '/electronics',
        element: <Electronics />,
        loader: electronicsLoader,
        errorElement: <ServiceUnavailable />,
      },
      {
        path: '/coffee',
        element: <Coffee />,
        loader: coffeeLoader,
        errorElement: <ServiceUnavailable />,
      },
      {
        path: '/kindle',
        element: <Kindle />,
        loader: kindleLoader,
        errorElement: <ServiceUnavailable />,
      },
      {
        path: '/office-supplies',
        element: <OfficeSupplies />,
        loader: officeSuppliesLoader,
        errorElement: <ServiceUnavailable />,
      },
      {
        path: '/personal-care',
        element: <PersonalCare />,
        loader: personalCareLoader,
        errorElement: <ServiceUnavailable />,
      },
      {
        path: '/watches',
        element: <Watches />,
        loader: watchesLoader,
        errorElement: <ServiceUnavailable />,
      },
      {
        path: '/search',
        element: <SearchResults />,
      },
      {
        path: '/data',
        element: <Data />,
      },
    ],
  },
  {
    path: '/checkout',
    element: (
      <ProtectedRoute element={<GoCheckout element={<CheckoutPage />} />} />
    ),
  },

  {
    path: '/login',
    element: <SignIn />,
  },
  ,
  {
    path: '/reset',
    element: <ResetPassword />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/success',
    element: <Success />,
  },
  {
    path: '/cancel',
    element: <Cancel />,
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function Routing() {
  return <RouterProvider router={router} />;
}

function ProtectedRoute({ element }) {
  const userUid = useSelector(state => state.User.user?.uid);
  const isAuthenticated = () => {
    if (userUid) return true;
  };

  return isAuthenticated() ? element : <Navigate to="/login" replace />;
}

function GoCheckout({ element }) {
  const { isChecked } = useContext(isCheckoutContext);

  return isChecked ? element : <Navigate to="/" replace />;
}
