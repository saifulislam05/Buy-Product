import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import { CartProvider } from "./Context/CartContext";

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
        path: "/productDetails/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);
function App() {

  return (
    <div className="App min-h-screen flex flex-col">
      <CartProvider>

        <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
}

export default App;
