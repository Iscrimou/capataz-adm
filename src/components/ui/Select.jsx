export default function Select({ id, options, selected, onChange }) {
  return (
    <div className="relative inline-block w-full">
      <select
        id={id}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChange}
        value={selected}
      >
        {options.map((option, index) => (
          <option disabled={option.disabled} key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548l4.484 4.484 4.484-4.484a1.5 1.5 0 1 1 2.12 2.12l-5.244 5.244a1.5 1.5 0 0 1-2.12 0L3.396 9.668a1.5 1.5 0 1 1 2.12-2.12z" />
        </svg>
      </div>
    </div>
  );
}