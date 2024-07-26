import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import Datatable from "../../../components/ui/Datatable";
import Select from "../../../components/ui/Select";
import Title from "../../../components/ui/Title";

export default function MovimentacaoCategorias() {
  const fazendaOptions = [
    { value: '', label: 'Selecione a fazenda', disabled: true },
    { value: '1', label: 'Fazenda 1' },
    { value: '2', label: 'Fazenda 2' },
    { value: '3', label: 'Fazenda 3' }
  ];

  const columns = [
    { header: 'Categoria Origem', field: 'categorySource' },
    { header: 'Categoria Destino', field: 'categoryDestination' },
    { header: 'Quantidade', field: 'ammount' },
    { header: 'Data', field: 'date' },
  ];

  const data = [
    { id: 1, categorySource: 'Vaquilhonas Prenha', categoryDestination: 'Vacas Vazias', ammount: 5, date: '01/02/2023' },
    { id: 2, categorySource: 'Vaquilhonas', categoryDestination: 'Vaquilhonas Prenha', ammount: 10, date: '06/02/2023' },
    { id: 3, categorySource: 'Terneiros', categoryDestination: 'Terneiros desmamados', ammount: 17, date: '10/02/2023' },
    { id: 4, categorySource: 'Terneiras desmamadas', categoryDestination: 'Vacas Prenhes', ammount: 3, date: '12/02/2023' },
  ];

  return (
    <div className="flex flex-col">
      <Title content={'Relatório de Categorias de Animais'} />

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