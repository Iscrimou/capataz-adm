import { useState } from 'react';
import LoginPage from './pages/public/LoginPage';
import logo from "./assets/logo.png";
import { FaCaretDown, FaCaretUp, FaFileAlt, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { managerReportMenu } from './utils/menus';

const Sidebar = () => {
  const [isCadastrosOpen, setCadastrosOpen] = useState(false);
  const [isRelatoriosOpen, setRelatoriosOpen] = useState(false);

  return (
    <div className="h-full bg-gray-800 text-white w-64 flex flex-col">
      <div className="px-4">
        <img src={logo} alt="logo-capataz" />
      </div>
      <nav className="flex-1">
        <ul>
          <li className="border-t border-b border-gray-600">
            <a href="#" className="flex items-center p-4 hover:bg-gray-700">
              <FaTachometerAlt className="icon-default" /> Dashboard
            </a>
          </li>

          <span className='p-4 font-thin text-sm text-gray-400'>Menu</span>
          <li>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700" onClick={() => setCadastrosOpen(!isCadastrosOpen)}>
              <div className="flex items-center">
                <FaUsers className="icon-default" /> Cadastros
              </div>
              {isCadastrosOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {isCadastrosOpen && (
              <ul className="pl-8">
                <li>
                  <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700">
                    <div className="flex items-center">
                      Manejo
                    </div>
                    <FaCaretDown />
                  </div>
                  <ul className="pl-8">
                    <li>
                      <a href="#" className="block p-4 hover:bg-gray-700">Previsão/Compra e Venda</a>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700" onClick={() => setRelatoriosOpen(!isRelatoriosOpen)}>
              <div className="flex items-center">
                <FaFileAlt className="icon-default" /> Relatórios
              </div>
              {isRelatoriosOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {isRelatoriosOpen && (
              <ul className="pl-8">
                <li>
                  <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700">
                    <div className="flex items-center">
                      Gerência
                    </div>
                    <FaCaretDown />
                  </div>
                  <ul className="pl-8">
                    {
                      managerReportMenu.map(item => (
                        <li key={item.title}>
                          <Link to={item.url} className="block p-4 hover:bg-gray-700">{item.title}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-gray-700 text-white p-4 flex justify-between shadow-lg">
      <div className="text-xl">Header</div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex p-4">
      <h1 className="text-3xl">Conteúdo Principal</h1>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Content />
      </div>
    </div>
  );
};

// function App() {
//   return (
//     <div className='relative min-h-screen flex justify-center items-center bg-black'>
//       <LoginPage />
//     </div>
//   );
// }

export default App
