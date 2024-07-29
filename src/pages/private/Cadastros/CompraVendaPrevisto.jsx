import { useState } from "react";
import Title from "../../../components/ui/Title";
import DatatablePrevisto from "../../../components/Previsto/DatatablePrevisto";
import Select from "../../../components/ui/Select";
import { FaPlus, FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import Dialog from "../../../components/ui/Dialog";
import FormPrevisto from "../../../components/Previsto/FormPrevisto";

export default function CompraVendaPrevisto() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(false);
  const columns = [
    { header: 'Cabeças', field: 'ammount' },
    { header: 'Espécie', field: 'species' },
    { header: 'Categoria', field: 'category' },
    { header: 'Peso Médio', field: 'weight' },
    { header: 'Preço', field: 'price' },
    { header: 'Total', field: 'totalValue' },
    { header: 'Data', field: 'date' }
  ];

  const compraData = [
    { id: 1, type: 'compra', ammount: 10, species: 'bovino', category: 'bezerro', weight: 250, price: 1500, totalValue: 15000, date: '2024-01-01' },
  ];
  const vendaData = [
    { id: 2, type: 'venda', ammount: 10, species: 'bovino', category: 'bezerro', weight: 250, price: 1500, totalValue: 15000, date: '2024-01-01' },
    { id: 3, type: 'venda', ammount: 15, species: 'ovino', category: 'cordeiro', weight: 50, price: 400, totalValue: 6000, date: '2024-02-01' },
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

  const toogleAddDialog = () => {
    setIsAddOpen(!isAddOpen);
  };

  const toggleEditDialog = (data) => {
    setIsEditOpen(!isEditOpen);
    setSelectedData(data);
  };

  const toggleDeleteDialog = (data) => {
    setIsDeleteOpen(!isDeleteOpen);
    setSelectedData(data);
  };

  const handleSubmit = () => {
    //
  }

  return (
    <div className="flex flex-col w-full">
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
            <button title="Novo" className="text-blue-500 hover:bg-blue-200 rounded-full p-2" onClick={toogleAddDialog}>
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

        <DatatablePrevisto compraData={compraData} vendaData={vendaData} columns={columns} handleEdit={toggleEditDialog} handleDelete={toggleDeleteDialog} />
      </div>

      {isAddOpen && 
        <div className="h-screen flex items-center justify-center">
          <Dialog title='Novo Registro' content={
            <div className="h-[calc(100%-50px)] w-[800px]">
              <FormPrevisto action={'add'} onClose={toogleAddDialog} />
            </div>
          } onClose={toogleAddDialog} />
        </div>
      }

      {isEditOpen && 
        <div className="h-screen flex items-center justify-center">
          <Dialog title='Editar Registro' content={
            <div className="h-[calc(100%-50px)] w-[800px]">
              <FormPrevisto action={'edit'} data={selectedData} onClose={toggleEditDialog} />
            </div>
          } onClose={toggleEditDialog} />
        </div>
      }
      
      {isDeleteOpen && 
        <div className="h-screen flex items-center justify-center">
          <Dialog title='Deletar Registro' content={
            <div className="h-[calc(100%-50px)] flex flex-col justify-between">
              <div className="flex items-center text-gray-400 p-4">
                <span>Tem certeza que deseja remover esse registro?</span>
              </div>
              <div className="flex items-center justify-end gap-4 p-2 rounded-md bg-gray-200 border-t border-gray-300">
                <button className="hover:bg-slate-300 text-slate-800 border-slate-800 border font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={toggleDeleteDialog}>
                  Cancelar
                </button>
                <button className="bg-slate-800 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
                  Deletar
                </button>
              </div>
            </div>
          } onClose={toggleDeleteDialog } />
        </div>
      }
    </div>
  );
}