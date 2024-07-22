export default function TitleCard({border, customClasses, title, content}) {
  return (
    <div className={`w-full bg-white flex flex-col ${border} rounded-md shadow-lg`}>
      <div className="p-4 bg-gray-50 border-b-[1px]">
        <span className="text-blue-500 font-semibold">{ title }</span>
      </div>
      <div className={`p-4 ${customClasses}`}>
        <span className="text-gray-400">{ content }</span>
      </div>
    </div>
  );
}