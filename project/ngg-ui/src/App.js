import { createBrowserRouter, Navigate, RouterProvider, } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products/Products';
import SignInAndUpForm from './components/Sign-in-and-up-form';
import ProductView from './components/ProductView';
import LikedProducts from './components/LikedProducts';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <div className="global_container_">
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        {/* <img class="columns-copy" src="/images/columns_copy.png" alt="" width="1170" height="3800"> */}
      </div>
    </div>
  );
}

function RoutingComp({ Main }) {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: () => <RoutingComp Main={Home} />,
  },
  {
    path: '/products',
    Component: () => <RoutingComp Main={Products} />,
  },
  {
    path: '/sign-in-and-up',
    Component: () => <RoutingComp Main={SignInAndUpForm} />,
  },
  {
    path: '/view-product/:id',
    Component: () => <RoutingComp Main={ProductView} />,
  },
  {
    path: '/view-product/',
    Component: () => <Navigate to='/view-product/1' />
  },
  {
    path: '/liked-products',
    Component: () => <RoutingComp Main={LikedProducts} />,
  },
  {
    path: '/cart',
    Component: () => <RoutingComp Main={Cart} />,
  },
]);

export default App;
