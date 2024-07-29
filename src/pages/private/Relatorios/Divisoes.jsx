import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import Datatable from "../../../components/ui/Datatable";
import Select from "../../../components/ui/Select";
import Title from "../../../components/ui/Title";
import DatatableDivisoes from "../../../components/Divisoes/DatatableDivisoes";

export default function Divisoes() {
  const fazendaOptions = [
    { value: '', label: 'Selecione a fazenda', disabled: true },
    { value: '1', label: 'Fazenda 1' },
    { value: '2', label: 'Fazenda 2' },
    { value: '3', label: 'Fazenda 3' }
  ];

  const columns = [
    { header: 'Divisão', field: 'division' },
    { header: 'Área Útil(há)', field: 'utilArea' },
    { header: 'Primiparas', field: 'primiparous' },
    { header: 'Vacas Prenhes', field: 'cowsPregnant' },
    { header: 'Vacas Vazias', field: 'cowsEmpty' },
    { header: 'Vacas Descarte', field: 'cowsDiscard' },
    { header: 'Terneiros', field: 'calvesMale' },
    { header: 'Terneiras', field: 'calvesFemale' },
    { header: 'Terneiras desmamadas', field: 'calvesWeanedFemale' },
    { header: 'Terneiros desmamados', field: 'calvesWeanedMale' },
    { header: 'Novilho s.a.', field: 'steerSA' },
    { header: 'Novilho', field: 'steer' },
    { header: 'Bois', field: 'ox' },
    { header: 'Vaquilhona s. a.', field: 'youngCowSA' },
    { header: 'Vaquilhonas', field: 'youngCow' },
    { header: 'Vaquilhonas Prenha', field: 'youngCowPregnant' },
    { header: 'Tourinho', field: 'youngBull' },
    { header: 'Touros', field: 'bulls' },
    { header: 'Touruno', field: 'oxBull' },
    { header: 'TOTAL', field: 'total' },
    { header: 'U.A/HA', field: 'uaPerHa' },
    { header: 'kg/HA', field: 'kgPerHa' },
  ];

  const data = [
    {
      division: 'Divisão 1',
      utilArea: 100,
      primiparous: 27,
      cowsPregnant: 50,
      cowsEmpty: 30,
      cowsDiscard: 10,
      calvesMale: 20,
      calvesFemale: 25,
      calvesWeanedFemale: 15,
      calvesWeanedMale: 15,
      steerSA: 5,
      steer: 10,
      ox: 8,
      youngCowSA: 12,
      youngCow: 14,
      youngCowPregnant: 6,
      youngBull: 7,
      bulls: 4,
      oxBull: 2,
      total: 258,
      uaPerHa: 2.58,
      kgPerHa: 300
    },
    {
      division: 'Divisão 2',
      utilArea: 120,
      primiparous: 21,
      cowsPregnant: 60,
      cowsEmpty: 25,
      cowsDiscard: 15,
      calvesMale: 22,
      calvesFemale: 28,
      calvesWeanedFemale: 18,
      calvesWeanedMale: 18,
      steerSA: 7,
      steer: 12,
      ox: 9,
      youngCowSA: 13,
      youngCow: 16,
      youngCowPregnant: 7,
      youngBull: 8,
      bulls: 5,
      oxBull: 3,
      total: 300,
      uaPerHa: 2.5,
      kgPerHa: 350
    },
    {
      division: 'Divisão 3',
      utilArea: 90,
      primiparous: 12,
      cowsPregnant: 45,
      cowsEmpty: 20,
      cowsDiscard: 12,
      calvesMale: 18,
      calvesFemale: 23,
      calvesWeanedFemale: 13,
      calvesWeanedMale: 13,
      steerSA: 6,
      steer: 11,
      ox: 7,
      youngCowSA: 11,
      youngCow: 15,
      youngCowPregnant: 5,
      youngBull: 6,
      bulls: 3,
      oxBull: 1,
      total: 246,
      uaPerHa: 2.73,
      kgPerHa: 320
    },
    {
      division: 'Divisão 4',
      utilArea: 110,
      primiparous: 47,
      cowsPregnant: 55,
      cowsEmpty: 28,
      cowsDiscard: 14,
      calvesMale: 21,
      calvesFemale: 27,
      calvesWeanedFemale: 17,
      calvesWeanedMale: 17,
      steerSA: 8,
      steer: 13,
      ox: 10,
      youngCowSA: 14,
      youngCow: 17,
      youngCowPregnant: 8,
      youngBull: 9,
      bulls: 6,
      oxBull: 4,
      total: 302,
      uaPerHa: 2.74,
      kgPerHa: 330
    },
    {
      division: 'Divisão 5',
      primiparous: 12,
      utilArea: 130,
      cowsPregnant: 65,
      cowsEmpty: 35,
      cowsDiscard: 18,
      calvesMale: 24,
      calvesFemale: 30,
      calvesWeanedFemale: 20,
      calvesWeanedMale: 20,
      steerSA: 9,
      steer: 14,
      ox: 11,
      youngCowSA: 15,
      youngCow: 18,
      youngCowPregnant: 9,
      youngBull: 10,
      bulls: 7,
      oxBull: 5,
      total: 345,
      uaPerHa: 2.65,
      kgPerHa: 340
    }
  ];


  return (
    <div className="flex flex-col w-full">
      <Title content={'Relatório de Divisões'} />

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

        <DatatableDivisoes data={data} columns={columns} />
      </div>
    </div>
  );
}