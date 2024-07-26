import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { ptBR, pt } from 'date-fns/locale';
// import { ptBR, pt } from 'react-date-range/dist/locale';

export default function DatePickerRange({id, data, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: new Date(),
      maxDate: new Date(),
      key: 'selection'
    }
  ]);
  const handleSubmitDate = () => {
    //
  }

  useEffect(() => {
    console.log(dateRange);
  })
  return (
    <div className="w-full">
      <input
        id={id}
        placeholder="De - Até"
        readOnly
        className="appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded cursor-pointer leading-tight focus:outline-none focus:shadow-outline"
        value={data}
        onClick={() => setIsOpen(!isOpen)}
        onChange={onChange}
      />
       {isOpen && (
        <div className="absolute z-10 mt-2">
          <DateRange locale={pt} ranges={dateRange} editableDateInputs={true} onChange={item => setDateRange([item.selection])} />
        </div>
      )}
    </div>
  )
}