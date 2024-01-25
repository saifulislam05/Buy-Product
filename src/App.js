import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Pages/Cart";
import { Provider } from "react-redux";
import store from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <CartProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </CartProvider>
    </div>
  );
}

export default App;
