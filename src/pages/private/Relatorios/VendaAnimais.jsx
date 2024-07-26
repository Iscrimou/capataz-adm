import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import Select from "../../../components/ui/Select";
import Title from "../../../components/ui/Title";
import DatePickerRange from "../../../components/ui/DatePickerRange";
import DatatableVendaAnimais from "../../../components/VendaAnimais/DatatableVendaAnimais";

export default function VendaAnimais() {
  const fazendaOptions = [
    { value: '', label: 'Selecione a fazenda', disabled: true },
    { value: '1', label: 'Fazenda 1' },
    { value: '2', label: 'Fazenda 2' },
    { value: '3', label: 'Fazenda 3' }
  ];

  const categoriaOptions = [
    { value: '', label: 'Selecione a categoria', disabled: true },
    { value: '1', label: 'Bovino' },
    { value: '2', label: 'Ovino' },
    { value: '3', label: 'Equino' }
  ];

  const columns = [
    { header: 'Categoria', field: 'category' },
    { header: 'Data', field: 'date' },
    { header: 'Quantidade', field: 'ammount' },
    { header: 'Peso Médio', field: 'averageWeight' },
    { header: 'Peso Total', field: 'totalWeigth' },
    { header: 'Valor p/ Cabeça', field: 'valuePerHead' },
    { header: 'Valor Total', field: 'totalValue' },
    { header: 'Valor Médio', field: 'avarageValue' },
  ];

  const data = [
    { id: 1, category: 'Totais', date: '', ammount: 27, averageWeight: 600, totalWeigth: 1000, valuePerHead: 'R$800,20', totalValue: 'R$4000,30', avarageValue: "R$820,00" },
    { id: 2, category: 'Terneiros', date: '01/02/2023', ammount: 10, averageWeight: 200, totalWeigth: 500, valuePerHead: 'R$300,10', totalValue: 'R$2000,15', avarageValue: "R$310,00" },
    { id: 3, category: 'Bois', date: '10/02/2023', ammount: 17, averageWeight: 400, totalWeigth: 500, valuePerHead: 'R$500,10', totalValue: 'R$2500,15', avarageValue: "R$510,00" }
  ];

  return (
    <div className="flex flex-col">
      <Title content={'Relatório de Venda de Animais'} />

      <div className="mt-6 flex flex-col bg-white p-2 shadow-lg">
        <div className="flex justify-between items-center p-4">
          <div>
            <span className="text-sm font-semibold text-gray-400">Buscar: </span>
            <input className="border rounded-md p-1 focus:outline-none text-gray-400 text-sm" />
          </div>

          <div className="flex gap-2">
            <Select options={fazendaOptions} onChange={() => alert('teste')} />
            <Select options={categoriaOptions} onChange={() => alert('teste')} />
            <DatePickerRange />
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

        <DatatableVendaAnimais data={data} columns={columns} />
      </div>
    </div>
  );
}