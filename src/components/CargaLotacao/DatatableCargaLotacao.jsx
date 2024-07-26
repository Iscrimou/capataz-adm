export default function DatatableCargaLotacao({ data, columns }) {
  return (
    <div className="overflow-auto min-w-[500px]">
      <table className="min-w-full border-collapse md:table">
        <thead className=" md:table-header-group border-b-2 border-gray-100">
        <tr className="md:border-none bg-emerald-500 text-white md:table-row">
          <th colSpan={1} className="py-4 border-r"/>
          <th colSpan={1} className="py-4 border-r"/>
          <th colSpan={4} className="py-4 border-b-2 border-r"> Peso/há </th>
          <th colSpan={4} className="py-4 border-b-2"> Unidade Animal/há </th>
        </tr>
          <tr className="md:border-none bg-emerald-500 text-white md:table-row">
            {columns.map((col, index) => (
              <th key={index} className=" md:table-cell p-2 text-left border-r">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className=" md:table-row-group">
          {data.map((rowData, _rowIndex) => (
            <tr key={rowData.id} className={"md:border-none odd:bg-emerald-400 even:bg-emerald-300 text-slate-900 md:table-row"}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className=" md:table-cell p-2" onClick={() => alert('Olá')}>{rowData[col.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};