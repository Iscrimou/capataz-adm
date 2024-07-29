import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import Datatable from "../../../components/ui/Datatable";
import Select from "../../../components/ui/Select";
import Title from "../../../components/ui/Title";

export default function Animais() {
  const fazendaOptions = [
    { value: '', label: 'Selecione a fazenda', disabled: true },
    { value: '1', label: 'Fazenda 1' },
    { value: '2', label: 'Fazenda 2' },
    { value: '3', label: 'Fazenda 3' }
  ];

  const columns = [
    { header: 'Categoria', field: 'category' },
    { header: 'Quantidade', field: 'ammount' },
    { header: 'Divisão', field: 'division' }
  ];

  const data = [
    { id: 1, category: 'Éguas', ammount: 10, division: 'Recolhida' },
    { id: 2, category: 'Vacas Vazias', ammount: 15, division: 'Campo 1' },
    { id: 3, category: 'Vacas Vazias', ammount: 20, division: 'Geral' }
  ];

  return (
    <div className="flex flex-col w-full">
      <Title content={'Relatório de Animais'} />

      <div className="mt-6 flex flex-col bg-white p-2 shadow-lg">
        <div className="flex justify-between items-center p-4">
          <div>
            <span className="text-sm font-semibold text-gray-400">Buscar: </span>
            <input className="border rounded-md p-1 focus:outline-none text-gray-400 text-sm" />
          </div>

          <div className="flex">
            <Select options={fazendaOptions} onChange={() => alert('teste')} />
          </div>

          <div className="flex gap-2">
            <button title="Exportar PDF" className="rounded-full text-red-500 hover:bg-red-200 p-2 flex justify-center items-center">
              <FaRegFilePdf />
            </button>
            <button title="Exportar Excel" className="rounded-full text-green-500 hover:bg-green-200 p-2 flex justify-center items-center">
              <FaRegFileExcel />
            </button>
          </div>
        </div>

        <Datatable data={data} columns={columns} />
      </div>
    </div>
  );
}