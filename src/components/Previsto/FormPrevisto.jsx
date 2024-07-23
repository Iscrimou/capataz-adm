import { useEffect, useState } from "react";
import Select from "../ui/Select";

export default function FormPrevisto({ action, data, onClose }) {
  const [previstoForm, setPrevistoForm] = useState({
    type: null,
    ammount: null,
    species: null,
    category: null,
    weight: null,
    price: null,
    totalValue: null,
    date: null
  });
  const categoryOptions = [
    { value: '', label: 'Selecione a categoria', disabled: true },
    { value: 'bois', label: 'Bois' },
    { value: 'bezerro', label: 'Bezerro' },
    { value: 'cavalo', label: 'Cavalo' },
    { value: 'ovelhas', label: 'Ovelhas' },
    { value: 'cordeiro', label: 'Cordeiro' },
    { value: 'eguas', label: 'Éguas' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(previstoForm);
  }

  const fillableForm = () => {
    if (action === 'edit') {
      setPrevistoForm(data);
      console.log(previstoForm);
    }

  }

  useEffect(() => {
    fillableForm();
  }, []);

  return (
    <form className="h-full w-full flex flex-col justify-between">
      <div className="w-1/2 flex flex-col gap-3 self-center overflow-y-auto py-4">

        <div className="flex flex-col">
          <span className="font-medium" htmlFor="name">Tipo:</span>
          <fieldset className="flex">
            <div className="mr-4">
              <input
                className="text-gray-700 focus:outline-none focus:shadow-outline"
                id="typeCompra"
                type="radio"
                value='compra'
                onChange={(e) => setPrevistoForm((prev) => ({...prev, type: e.target.value}))}
                checked={previstoForm.type === 'compra'}
              />
              <label className="ml-2" htmlFor="typeCompra">Compra</label>
            </div>
            <div>
              <input
                className="text-gray-700 focus:outline-none focus:shadow-outline"
                id="typeVenda"
                type="radio"
                value='venda'
                onChange={(e) => setPrevistoForm((prev) => ({...prev, type: e.target.value}))}
                checked={previstoForm.type === 'venda'}
              />
              <label className="ml-2" htmlFor="typeVenda">Venda</label>
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col">
          <label className="font-medium" htmlFor="ammount">Cabeças:</label>
          <input
            className="border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ammount"
            type="number"
            placeholder="Cabeças"
            value={previstoForm.ammount}
            onChange={(e) => setPrevistoForm((prev) => ({...prev, ammount: e.target.value}))}
          />
        </div>

        <div className="flex flex-col">
          <span className="font-medium">Espécie:</span>
          <fieldset className="flex">
            <div className="mr-4">
              <input
                className="text-gray-700 focus:outline-none focus:shadow-outline"
                id="speciesBovino"
                type="radio"
                value='bovino'
                onChange={(e) => setPrevistoForm((prev) => ({...prev, species: e.target.value}))}
                checked={previstoForm.species === 'bovino'}
              />
              <label className="ml-2" htmlFor="speciesBovino">Bovino</label>
            </div>
            <div className="mr-4">
              <input
                className="text-gray-700 focus:outline-none focus:shadow-outline"
                id="speciesBovino"
                type="radio"
                value='ovino'
                onChange={(e) => setPrevistoForm((prev) => ({...prev, species: e.target.value}))}
                checked={previstoForm.species === 'ovino'}
              />
              <label className="ml-2" htmlFor="speciesovino">Ovino</label>
            </div>
            <div className="mr-4">
              <input
                className="text-gray-700 focus:outline-none focus:shadow-outline"
                id="speciesBovino"
                type="radio"
                value='equino'
                onChange={(e) => setPrevistoForm((prev) => ({...prev, species: e.target.value}))}
                checked={previstoForm.species === 'equino'}
              />
              <label className="ml-2" htmlFor="speciesEquino">Equino</label>
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col">
          <label className="font-medium" htmlFor="category">Categoria:</label>
          <Select id='category' options={categoryOptions} selected={previstoForm.category} onChange={(e) => setPrevistoForm((prev) => ({...prev, category: e.target.value}))}/>
        </div>

        <div className="flex flex-col">
          <label className="font-medium w-" htmlFor="weight">Peso Médio:</label>
          <input
            className="border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="number"
            placeholder="Peso Médio"
            value={previstoForm.weight}
            onChange={(e) => setPrevistoForm((prev) => ({...prev, weight: e.target.value}))}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium" htmlFor="price">Preço:</label>
          <input
            className="border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Preço"
            value={previstoForm.price}
            onChange={(e) => setPrevistoForm((prev) => ({...prev, price: e.target.value}))}
          />
        </div>
        
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="totalValue">Valor Total:</label>
          <input
            className="border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="totalValue"
            type="number"
            placeholder="Valor Total"
            value={previstoForm.totalValue}
            onChange={(e) => setPrevistoForm((prev) => ({...prev, totalValue: e.target.value}))}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium" htmlFor="date">Data:</label>
          <input
            className="border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            placeholder="Data"
            value={previstoForm.date}
            onChange={(e) => setPrevistoForm((prev) => ({...prev, date: e.target.value}))}
          />
        </div>
      </div>


      {/* buttons */}
      <div className="flex items-center justify-end gap-4 p-2 rounded-md bg-gray-200 border-t border-gray-300">
        <button className="hover:bg-slate-300 text-slate-800 border-slate-800 border font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onClose}>
          Cancelar
        </button>
        <button className="bg-slate-800 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
          Novo
        </button>
      </div>
    </form>
  );
}