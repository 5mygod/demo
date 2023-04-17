import { Layout } from "layout";
import MainPage from "pages/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  { path: "/", element: <div>dd</div> },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
