import "./App.css";
import TransactionPage from "./Pages/TranscationPage/TranscationPage";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Support from "./Pages/Support/Support";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
