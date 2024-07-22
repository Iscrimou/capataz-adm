import { useState } from "react";
import Title from "../../../components/ui/Title";
import Datatable from "../../../components/ui/Datatable";
import Select from "../../../components/ui/Select";
import { FaPlus, FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";

export default function CompraVendaPrevisto() {
  const columns = [
    { header: 'Cabeças', field: 'cabecas' },
    { header: 'Espécie', field: 'especie' },
    { header: 'Categoria', field: 'categoria' },
    { header: 'Peso Médio', field: 'pesoMedio' },
    { header: 'Preço', field: 'preco' },
    { header: 'Total', field: 'total' },
    { header: 'Data', field: 'data' }
  ];

  const data = [
    { id: 1, cabecas: 10, especie: 'Bovino', categoria: 'Bezerro', pesoMedio: 250, preco: 1500, total: 15000, data: '2024-01-01' },
    { id: 2, cabecas: 15, especie: 'Ovino', categoria: 'Cordeiro', pesoMedio: 50, preco: 400, total: 6000, data: '2024-02-01' },
    { id: 3, cabecas: 20, especie: 'Caprino', categoria: 'Cabrito', pesoMedio: 60, preco: 800, total: 16000, data: '2024-03-01' },
    // Adicione mais dados conforme necessário
  ];

  const fazendaOptions = [
    { value: '', label: 'Selecione a fazenda', disabled: true },
    { value: '1', label: 'Fazenda 1' },
    { value: '2', label: 'Fazenda 2' },
    { value: '3', label: 'Fazenda 3' }
  ];

  const anosOptions = [
    { value: '', label: 'Selecione o ano', disabled: true },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' }
  ];

  return (
    <div className="flex flex-col">
      <Title content={'Previsto de Compra e Venda de Animais'} />

      <div className="mt-6 flex flex-col bg-white p-2 shadow-lg">
        <div className="flex justify-between items-center p-4">
          <div>
            <span className="text-sm font-semibold text-gray-400">Buscar: </span>
            <input className="border rounded-md p-1 focus:outline-none text-gray-400 text-sm" />
          </div>

          <div className="flex gap-2">
            <Select options={fazendaOptions} onChange={() => alert('teste')} />
            <Select options={anosOptions} onChange={() => alert('teste')} />
          </div>

          <div className="flex gap-2">
            <button title="Novo" className="text-blue-500 hover:bg-blue-200 rounded-full p-2" onClick={() => alert(`Novo`)}>
              <FaPlus />
            </button>
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