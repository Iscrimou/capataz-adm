import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage";
import Layout from "./layouts/private/Layout";
import Dashboard from "./pages/private/Dashboard";
import CompraVendaPrevisto from "./pages/private/Cadastros/CompraVendaPrevisto";
import Animais from "./pages/private/Relatorios/Animais";
import FluxoRebanho from "./pages/private/Relatorios/FluxoRebanho";
import CargaLotacao from "./pages/private/Relatorios/CargaLotacao";
import MovimentacaoCategorias from "./pages/private/Relatorios/MovimentacaoCategorias";
import MovimentacaoDivisoes from "./pages/private/Relatorios/MovimentacaoDivisoes";
import CompraAnimais from "./pages/private/Relatorios/CompraAnimais";
import VendaAnimais from "./pages/private/Relatorios/VendaAnimais";
import NascimentoAnimais from "./pages/private/Relatorios/NascimentoAnimais";
import MorteAnimais from "./pages/private/Relatorios/MorteAnimais";
import Divisoes from "./pages/private/Relatorios/Divisoes";

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
      { path: '/capataz-adm/divisoes', element: <Divisoes /> },
      { path: '/capataz-adm/animais', element: <Animais /> },
      { path: '/capataz-adm/fluxo-rebanho', element: <FluxoRebanho /> },
      { path: '/capataz-adm/carga-lotacao', element: <CargaLotacao /> },
      { path: '/capataz-adm/movimentacao-categorias', element: <MovimentacaoCategorias /> },
      { path: '/capataz-adm/movimentacao-divisoes', element: <MovimentacaoDivisoes /> },
      { path: '/capataz-adm/compra-animais', element: <CompraAnimais /> },
      { path: '/capataz-adm/venda-animais', element: <VendaAnimais /> },
      { path: '/capataz-adm/nascimento-animais', element: <NascimentoAnimais /> },
      { path: '/capataz-adm/morte-animais', element: <MorteAnimais /> },
    ],
  },
  { path: "/capataz-adm/login", element: <LoginPage /> }
]); 
