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
import SingleProductLayout from "./components/screens/StoreLayout/SingleProductLayout";

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
        path: "category/:name",
        element: <div>Products list</div>
      }
    ]
  },
  {
    path: "/store/product",
    element: <SingleProductLayout />,
    children: [
      {
        path: "/store/product",
        element: <div>No product found</div>
      },
      {
        path: "/store/product/:id",
        element: <Product />
      }
    ]
  },
  {
    path: "/blog",
    element: <div>Blog Page</div>,
    children: [
      {
        path: "/blog",
        element: <div>All articles</div>
      },
      {
        path: "blog/category",
        element: <div>All articles</div>
      },
      {
        path: "blog/category/:slug",
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
