import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function Datatable({ data, columns }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group border-b-2 border-gray-100">
          <tr className="md:border-none bg-emerald-500 text-white md:table-row">
            {columns.map((col, index) => (
              <th key={index} className="block md:table-cell p-2 text-left">{col.header}</th>
            ))}
            <th className="block md:table-cell p-2 text-left">Ações</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((rowData, _rowIndex) => (
            <tr key={rowData.id} className={"md:border-none odd:bg-emerald-400 even:bg-emerald-300 text-white md:table-row"}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="block md:table-cell p-2" onClick={() => alert('Olá')}>{rowData[col.field]}</td>
              ))}
              <td className="block md:table-cell p-2">
                <button title="Editar" className="text-blue-500 hover:bg-emerald-700 hover:text-blue-300 mx-1 rounded-full p-2" onClick={() => alert(`Editar: ${rowData.id}`)}>
                  <FaEdit />
                </button>
                <button title="Deletar" className="text-red-500 hover:bg-emerald-700 hover:text-red-300 mx-1 rounded-full p-2" onClick={() => alert(`Deletar: ${rowData.id}`)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};