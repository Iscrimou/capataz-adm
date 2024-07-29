export default function DatatableDivisoes({ data, columns }) {
  return (
    <div className="min-w-[500px] overflow-auto">
      <table className="min-w-full ">
        <thead className="border-b-2 border-gray-100">
          <tr className="bg-emerald-500 text-white">
            <th colSpan={1} className="py-4 border-r" />
            <th colSpan={1} className="py-4 border-r" />
            <th colSpan={4} className="py-4 border-b-2 border-r"> Vacas </th>
            <th colSpan={2} className="py-4 border-b-2 border-r"> </th>
            <th colSpan={2} className="py-4 border-b-2 border-r">Desmame</th>
            <th colSpan={3} className="py-4 border-b-2 border-r">Machos</th>
            <th colSpan={3} className="py-4 border-b-2 border-r">Fêmeas</th>
            <th colSpan={3} className="py-4 border-b-2 border-r">Inteiro</th>
            <th colSpan={1} className="py-4 border-b-2 border-r">Total</th>
            <th colSpan={1} className="py-4 border-b-2 border-r"></th>
            <th colSpan={1} className="py-4 border-b-2"></th>
          </tr>
          <tr className="bg-emerald-500 text-white">
            {columns.map((col, index) => (
              <th key={index} className="border-r h-40 w-10 align-bottom">
                <div className={`h-full flex items-end justify-center ${(index > 1 && index < 19) && '' }`}>{col.header}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="md:table-row-group">
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