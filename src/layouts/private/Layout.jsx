import { useState } from 'react';
import logo from "../../assets/logo.png";
import avatarDefault from "../../assets/avatar-default.png";
import { FaBars, FaCaretDown, FaCaretUp, FaChartLine, FaChevronLeft, FaEye, FaFileAlt, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import CardNavigation from '../../components/ui/CardNavigation';
import { 
  managerReportMenu, 
  managementRegisterMenu, 
  managementReportMenu, 
  financialReportMenu, 
  managementChartsMenu,
  dolhoNoPastoMenu
} from '../../utils/menus';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isCadastrosOpen, setCadastrosOpen] = useState(false);
  const [isRelatoriosOpen, setRelatoriosOpen] = useState(false);
  const [isGraficosOpen, setGraficosOpen] = useState(false);
  const [isDolhoOpen, setDolhoOpen] = useState(false);

  return (
    <div className={`h-full w-64 flex flex-col bg-gray-800 text-white fixed lg:static transition-transform transform ${isOpen ? 'translate-x-0 z-50' : '-translate-x-full'} lg:translate-x-0`}>
      <div className='flex justify-end p-4 lg:hidden'>
        <button onClick={toggleSidebar}>
          <FaChevronLeft />
        </button>
      </div>
      <div className="px-4">
        <Link to="/capataz-adm/home">
          <img src={logo} alt="logo-capataz" />
        </Link>
      </div>
      <nav className={`flex overflow-auto`}>
        <ul className='w-full'>
          <li className="border-t border-b border-gray-600">
            <Link to="/capataz-adm/home" className="flex items-center p-4 hover:bg-gray-700">
              <FaTachometerAlt className="icon-default" /> Dashboard
            </Link>
          </li>

          <span className='p-4 text-sm font-semibold text-gray-400'>Menu</span>

          <li className='mb-2'>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700" onClick={() => setCadastrosOpen(!isCadastrosOpen)}>
              <div className="flex items-center">
                <FaUsers className="icon-default" /> Cadastros
              </div>
              {isCadastrosOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {isCadastrosOpen && (
              <div className='px-2 mt-2'>
                <CardNavigation title={'Manejo'} links={managementRegisterMenu} />
              </div>
            )}
          </li>

          <li className='mb-2'>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700" onClick={() => setRelatoriosOpen(!isRelatoriosOpen)}>
              <div className="flex items-center">
                <FaFileAlt className="icon-default" /> Relatórios
              </div>
              {isRelatoriosOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {isRelatoriosOpen && (
              <>
                <div className='px-2 mt-2'>
                  <CardNavigation title={'Gerência'} links={managerReportMenu} />
                </div>
                <div className='px-2 mt-2'>
                  <CardNavigation title={'Manejo'} links={managementReportMenu} />
                </div>
                <div className='px-2 mt-2'>
                  <CardNavigation title={'Financeiro'} links={financialReportMenu} />
                </div>
              </>
            )}
          </li>
          <li className='mb-2'>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700" onClick={() => setGraficosOpen(!isGraficosOpen)}>
              <div className="flex items-center">
                <FaChartLine className="icon-default" /> Gráficos
              </div>
              {isGraficosOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {isGraficosOpen && (
              <div className='px-2 mt-2'>
                <CardNavigation title={'Gerência'} links={managementChartsMenu} />
              </div>
            )}
          </li>
          <li className='mb-2'>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700" onClick={() => setDolhoOpen(!isDolhoOpen)}>
              <div className="flex items-center">
                <FaEye className="icon-default" /> D'olho no Pasto
              </div>
              {isDolhoOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {isDolhoOpen && (
              <div className='px-2 mt-2'>
                <CardNavigation title={"D'olho no Pasto"} links={dolhoNoPastoMenu} />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = ({ toggleSidebar }) => {
  return (
    <div className="text-gray-500 p-4 flex justify-between shadow-2xl">
      <button className="lg:hidden" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className="text-lg">Gestão Simplificada para sua Fazenda! </div>
      <div className='border-l-2 flex justify-center items-cente'>
        <div className='ml-4 cursor-pointer'>
          <Avatar src={avatarDefault} alt={'avatar default'} />
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex p-4 bg-gray-100">
      <Outlet />
    </div>
  );
};

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col w-full overflow-auto">
        <Header toggleSidebar={toggleSidebar} />
        <Content />
      </div>
    </div>
  );
};

export default Layout;