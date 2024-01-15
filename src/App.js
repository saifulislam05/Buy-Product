import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Products from "./components/Body/Products";
import ProductDetails from "./components/Body/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Products/>
      },
      {
        path: "/productDetails/:productId",
        element:<ProductDetails/>
        
      }
    ]
  }
]);
function App() {

  return (
    <div className="App min-h-screen flex flex-col">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
