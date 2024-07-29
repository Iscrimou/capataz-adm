import Title from "../../../components/ui/Title";
import Select from "../../../components/ui/Select";
import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import DatePickerRange from "../../../components/ui/DatePickerRange";
import DatatableCargaLotacao from "../../../components/CargaLotacao/DatatableCargaLotacao";

export default function CargaLotacao() {
  const columns = [
    { header: 'Divisão', field: 'division' },
    { header: 'Área útil (há)', field: 'utilArea' },
    { header: 'Bovinos', field: 'weigthBovinos' },
    { header: 'Ovinos', field: 'weigthOvinos' },
    { header: 'Equinos', field: 'weigthEquinos' },
    { header: 'Total', field: 'weigthTotal' },
    { header: 'Bovinos', field: 'unityBovinos' },
    { header: 'Ovinos', field: 'unityOvinos' },
    { header: 'Equinos', field: 'unityEquinos' },
    { header: 'Total', field: 'unityTotal' }   
  ];

  const data = [
    { id: 1, division: 'Recolhida', utilArea: 10, weigthBovinos: 12, weigthOvinos: 13, weigthEquinos: 250, weigthTotal: 1, unityBovinos: 10, unityOvinos: 3, unityEquinos: 10, unityTotal: 5 },
    { id: 2, division: 'Nova area', utilArea: 10, weigthBovinos: 12, weigthOvinos: 13, weigthEquinos: 250, weigthTotal: 1, unityBovinos: 10, unityOvinos: 3, unityEquinos: 10, unityTotal: 5 },
    { id: 3, division: 'Geral', utilArea: 10, weigthBovinos: 12, weigthOvinos: 13, weigthEquinos: 250, weigthTotal: 1, unityBovinos: 10, unityOvinos: 3, unityEquinos: 10, unityTotal: 5 },
    { id: 4, division: 'Campo Fundo', utilArea: 10, weigthBovinos: 12, weigthOvinos: 13, weigthEquinos: 250, weigthTotal: 1, unityBovinos: 10, unityOvinos: 3, unityEquinos: 10, unityTotal: 5 },
    { id: 5, division: 'Campo 1', utilArea: 10, weigthBovinos: 12, weigthOvinos: 13, weigthEquinos: 250, weigthTotal: 1, unityBovinos: 10, unityOvinos: 3, unityEquinos: 10, unityTotal: 5 }
  ];

  const fazendaOptions = [
    { value: '', label: 'Selecione a fazenda', disabled: true },
    { value: '1', label: 'Fazenda 1' },
    { value: '2', label: 'Fazenda 2' },
    { value: '3', label: 'Fazenda 3' }
  ];

  return (
    <div className="flex flex-col w-full">
      <Title content={'Relatório de Mapa de Carga Animal por UA'} />

      <div className="mt-6 flex flex-col bg-white p-2 shadow-lg">
        <div className="flex justify-between items-center p-4">
          <div>
            <span className="text-sm font-semibold text-gray-400">Buscar: </span>
            <input className="border rounded-md p-1 focus:outline-none text-gray-400 text-sm" />
          </div>

          <div className="flex gap-2">
            <Select options={fazendaOptions} onChange={() => alert('teste')} />
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

        <DatatableCargaLotacao data={data} columns={columns} />
      </div>
    </div>
  );
}