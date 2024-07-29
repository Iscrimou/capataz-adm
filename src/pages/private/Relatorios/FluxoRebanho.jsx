import Title from "../../../components/ui/Title";
import Select from "../../../components/ui/Select";
import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import DatatableFluxoRebanho from "../../../components/FluxoRebanho/DatatableFluxoRebanho";
import { DateRange } from "react-date-range";
import { useState } from "react";
import DatePickerRange from "../../../components/ui/DatePickerRange";

export default function FluxoRebanho() {
  const columns = [
    { header: 'Categorias', field: 'categories' },
    { header: 'Existência Inicial', field: 'initialAmmount' },
    { header: 'Compras', field: 'buys' },
    { header: 'Nasc.', field: 'births' },
    { header: 'Adic.', field: 'adds' },
    { header: 'Categoria', field: 'inputCategories' },
    { header: 'Categoria', field: 'outputCategories' },
    { header: 'Vendas', field: 'sells' },
    { header: 'Mortes', field: 'deaths' },
    { header: 'Remov.', field: 'removeds' },
    { header: 'Existência Atual', field: 'actualAmmount' }
  ];

  const bovinosData = [
    { id: 1, categories: 'Fêmeas +36', initialAmmount: 10, buys: 12, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 2, categories: 'Fêmeas 0-12', initialAmmount: 10, buys: 12, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 3, categories: 'Fêmeas 12-24', initialAmmount: 10, buys: 12, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 4, categories: 'Fêmeas 24-36', initialAmmount: 10, buys: 12, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 5, categories: 'Machos +36', initialAmmount: 10, buys: 12, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 6, categories: 'Machos 0-12', initialAmmount: 10, buys: 12, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 7, categories: 'Machos 12-24', initialAmmount: 10, buys: 12, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 8, categories: 'Machos 24-36', initialAmmount: 10, buys: 12, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
  ];
  const equinosData = [
    { id: 9, categories: 'Fêmeas 0-12', initialAmmount: 10, buys: 2, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 10, categories: 'Fêmeas 13-', initialAmmount: 15, buys: 17, births: 22, adds: 50, inputCategories: 3, outputCategories: 70, sells: 11, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 11, categories: 'Machos 0-12', initialAmmount: 15, buys: 17, births: 22, adds: 50, inputCategories: 3, outputCategories: 70, sells: 11, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 12, categories: 'Machos 13-', initialAmmount: 15, buys: 17, births: 22, adds: 50, inputCategories: 3, outputCategories: 70, sells: 11, deaths: 10, removeds: 5, actualAmmount: 25 },
  ];
  const ovinosData = [
    { id: 13, categories: 'Fêmeas +12	', initialAmmount: 10, buys: 2, births: 13, adds: 250, inputCategories: 1, outputCategories: 10, sells: 3, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 14, categories: 'Fêmeas 0-6', initialAmmount: 15, buys: 17, births: 22, adds: 50, inputCategories: 3, outputCategories: 70, sells: 11, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 15, categories: 'Fêmeas 6-12', initialAmmount: 15, buys: 17, births: 22, adds: 50, inputCategories: 3, outputCategories: 70, sells: 11, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 16, categories: 'Machos +12', initialAmmount: 15, buys: 17, births: 22, adds: 50, inputCategories: 3, outputCategories: 70, sells: 11, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 17, categories: 'Machos 0-6', initialAmmount: 15, buys: 17, births: 22, adds: 50, inputCategories: 3, outputCategories: 70, sells: 11, deaths: 10, removeds: 5, actualAmmount: 25 },
    { id: 18, categories: 'Machos 6-12', initialAmmount: 15, buys: 17, births: 22, adds: 50, inputCategories: 3, outputCategories: 70, sells: 11, deaths: 10, removeds: 5, actualAmmount: 25 },
  ];

  const fazendaOptions = [
    { value: '', label: 'Selecione a fazenda', disabled: true },
    { value: '1', label: 'Fazenda 1' },
    { value: '2', label: 'Fazenda 2' },
    { value: '3', label: 'Fazenda 3' }
  ];

  return (
    <div className="flex flex-col w-full">
      <Title content={'Relatório de Estoque de Animais'} />

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

        <DatatableFluxoRebanho bovinosData={bovinosData} equinosData={equinosData} ovinosData={ovinosData} columns={columns} />
      </div>
    </div>
  );
}