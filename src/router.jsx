import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage";
import Layout from "./layouts/private/Layout";
import Dashboard from "./pages/private/Dashboard";
import CompraVendaPrevisto from "./pages/private/Cadastros/CompraVendaPrevisto";

export const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to="/home" replace /> },
      { path: '/home', element: <Dashboard /> },
      { path: '/compra-venda-previsto', element: <CompraVendaPrevisto /> },
    ],
  },
  { path: "/login", element: <LoginPage /> }
]); 
