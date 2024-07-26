export default function DatatableFluxoRebanho({ bovinosData, equinosData, ovinosData, columns }) {
  return (
    <div className="overflow-auto min-w-[500px]">
      <table className="min-w-full border-collapse md:table">
        <thead className=" md:table-header-group border-b-2 border-gray-100">
        <tr className="md:border-none bg-emerald-500 text-white md:table-row">
          <th colSpan={2} className="py-4 border-r"/>
          <th colSpan={4} className="py-4 border-b-2 border-r"> Entrada </th>
          <th colSpan={4} className="py-4 border-b-2 border-r"> Saída </th>
          <th colSpan={2} className="py-4"/>
        </tr>
          <tr className="md:border-none bg-emerald-500 text-white md:table-row">
            {columns.map((col, index) => (
              <th key={index} className=" md:table-cell p-2 text-left">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className=" md:table-row-group">
          <tr>
            <td colSpan={11} className="py-4 bg-emerald-800">
              <span className="flex self-center justify-center text-yellow-300 font-semibold">Bovinos</span>
            </td>
          </tr>
          {bovinosData.map((rowData, _rowIndex) => (
            <tr key={rowData.id} className={"md:border-none odd:bg-emerald-400 even:bg-emerald-300 text-slate-900 md:table-row"}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className=" md:table-cell p-2" onClick={() => alert('Olá')}>{rowData[col.field]}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={11} className="py-4 bg-emerald-800">
              <span className="flex self-center justify-center text-yellow-300 font-semibold">Equinos</span>
            </td>
          </tr>
          {equinosData.map((rowData, _rowIndex) => (
            <tr key={rowData.id} className={"md:border-none odd:bg-emerald-400 even:bg-emerald-300 text-slate-900 md:table-row"}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className=" md:table-cell p-2" onClick={() => alert('Olá')}>{rowData[col.field]}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={11} className="py-4 bg-emerald-800">
              <span className="flex self-center justify-center text-yellow-300 font-semibold">Equinos</span>
            </td>
          </tr>
          {ovinosData.map((rowData, _rowIndex) => (
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