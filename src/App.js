import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import QrGen from "./components/QrGen.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/qr-gen",
    element: <QrGen />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App scroll-smooth">
        <Navbar />
      </div>
    </RouterProvider>
  );
}

export default App;
