import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingScreen />
  },
  {
    path: "/home",
    element: <HomeScreen />
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
