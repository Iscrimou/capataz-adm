 import { Link } from "react-router-dom";

export default function CardNavigation({title, links}) {
  return (
    <div className="rounded-lg flex flex-col bg-gray-100 text-gray-700">
      <div className="border-b-[1px] p-2">
        <span className="text-sm font-semibold text-gray-500">{ title }</span>
      </div>
      {
        links.length && links.map((link, i) => (
          <Link to={link.to} >
            <div className="py-4 px-2 hover:bg-gray-300">
              { link.title }
            </div>
          </Link>
        ))
      }
    </div>
  );
}