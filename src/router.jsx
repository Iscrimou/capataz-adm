import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage";
import Layout from "./layouts/private/Layout";
import Dashboard from "./pages/private/Dashboard";
import CompraVendaPrevisto from "./pages/private/Cadastros/CompraVendaPrevisto";
import Animais from "./pages/private/Relatorios/Animais";
import FluxoRebanho from "./pages/private/Relatorios/FluxoRebanho";
import CargaLotacao from "./pages/private/Relatorios/CargaLotacao";

export const router = createBrowserRouter([
  { 
    path: "/capataz-adm/", 
    element: <Layout />,
    children: [
      { path: '/capataz-adm/', element: <Navigate to="/capataz-adm/home" replace /> },
      { path: '/capataz-adm/home', element: <Dashboard /> },
      // cadastro
      { path: '/capataz-adm/compra-venda-previsto', element: <CompraVendaPrevisto /> },
      // relatórios
      { path: '/capataz-adm/animais', element: <Animais /> },
      { path: '/capataz-adm/fluxo-rebanho', element: <FluxoRebanho /> },
      { path: '/capataz-adm/carga-lotacao', element: <CargaLotacao /> },
    ],
  },
  { path: "/capataz-adm/login", element: <LoginPage /> }
]); 
