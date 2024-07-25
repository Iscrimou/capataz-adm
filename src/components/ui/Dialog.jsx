import { FaTimes } from "react-icons/fa";

export default function Dialog({ onClose, title, content }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>

      <div className="rounded-md shadow-lg z-10 border border-gray-600 bg-white text-gray-500">
        <div className="border-b-2 rounded flex items-center justify-between p-2 bg-gray-100">
          <span className="text-2xl">{ title }</span>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        { content }
      </div>

    </div>
  );
}