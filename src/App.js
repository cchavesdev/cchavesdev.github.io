import "./App.css";
import { Home } from "./components/home/Home";
import { Layout } from "./components/layout/Layout";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { DevBlog } from "./components/devPost/DevBlog";

import docFiles from "./data/posts.json";
import { PostViewer } from "./components/devPost/postViewer/PostViewer";
import { Portfolio } from "./components/portfolio/Portfolio";

function App() {
  const loadDocRoutes = docFiles.map((documentPost) => {
    let url = documentPost.postTitle;
    url = url.trim().toLowerCase();

    // Replace spaces with %20
    url = url.replace(/\s+/g, "-");

    let routeToDoc = `${documentPost.category}/${url}`;
    console.log(routeToDoc);
    return { path: routeToDoc, element: <PostViewer postUrl={url} /> };
    //return <Route path={routeToDoc} element={<PostViewer postUrl={url} />} />;
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "docs",
          children: [{ index: true, element: <DevBlog /> }, ...loadDocRoutes ],
        },
        {
          path: "portfolio",
          element: <Portfolio/>
        }
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

