import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Store from "./pages/Store/Store";
import DefaultLayout from "./components/screens/DefaultLayout/DefaultLayout";
import StoreLayout from "./components/screens/StoreLayout/StoreLayout";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <div>About Page</div>
      },
      {
        path: "/contact",
        element: <div>Contact Page</div>
      }
    ]
  },
  {
    path: "/store",
    element: <StoreLayout />,
    children: [
      {
        path: "/store",
        element: <Store />
      },
      {
        path: "category",
        element: <div>Category list</div>
      },
      {
        path: "category/:slug",
        element: <div>Products list</div>
      }
    ]
  },
  {
    path: "/blog",
    element: <div>Blog Page</div>,
    children: [
      {
        path: "category",
        element: <div>Blog Category</div>
      },
      {
        path: "category/:slug",
        element: <div>Blog Category</div>
      },
      {
        path: "article/:slug",
        element: <div>Blog Article</div>
      }
    ]
  }
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
