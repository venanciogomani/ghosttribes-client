import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DefaultLayout from "./components/screens/DefaultLayout/DefaultLayout";
import StoreLayout from "./components/screens/StoreLayout/StoreLayout";
import SingleProductLayout from "./components/screens/StoreLayout/SingleProductLayout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Product from "./pages/Product/Product";
import Store from "./pages/Store/Store";
import BlogLayout from "./components/screens/BlogLayout/BlogLayout";
import { BlogArticleLayout } from "./components/screens/BlogLayout/BlogArticleLayout";
import Article from "./pages/Article/Article";

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
      },
      {
        path: "tag/:name",
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
    element: <BlogLayout />,
    children: [
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/category",
        element: <div>All articles</div>
      },
      {
        path: "/blog/category/:id",
        element: <div>Blog Category</div>
      },
      {
        path: "/blog/tag/:id",
        element: <div>Blog Tag</div>
      }
    ]
  },
  {
    path: "/blog/article",
    element: <BlogArticleLayout />,
    children: [
      {
        path: "/blog/article",
        element: <div>No articles found</div>
      },
      {
        path: "/blog/article/:id",
        element: <Article />
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
