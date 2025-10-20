import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, },
      { path: "products", element: <ProductsPage />, },
      { path: "/about", element: <About />, },
      { path: "/contact", element: <Contact />, },
    ]
  },

]);


function App() {

  return <RouterProvider router={router} />;
}

export default App;
