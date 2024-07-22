export default function CardDashboard({borderColor, icon, title, value}) {
  return (
    <div className={`w-full min-h-24 bg-white flex items-center justify-between p-4 rounded-md shadow-lg border-l-4 ${ borderColor }`}>
      <div className="flex flex-col">
        <span className="text-blue-500 text-xs font-semibold">{ title }</span>
        <span className="text-zinc-600 text-2xl font-semibold">{ value }</span>
      </div>

      <div className="text-gray-300">
        { icon }
      </div>
    </div>
  );
}