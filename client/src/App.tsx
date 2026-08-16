import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Join from "./components/Join/Join";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Join />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
