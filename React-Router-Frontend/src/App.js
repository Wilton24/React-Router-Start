import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShamanCat from "./pages/ShamanCat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, path: "/", element: <Home />, },
      { path: "products", element: <ProductsPage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products/:productId", element: <ProductDetailsPage /> },
      { path: "products/:productId/shamancat", element: <ShamanCat /> }
    ]
  },
]);


function App() {

  return <RouterProvider router={router} />;
}

export default App;
