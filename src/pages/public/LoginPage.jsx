import { useState } from "react";
import logo from "../../assets/logo.png"; 

const LoginPage = () => {
  const [error, setError] = useState(null);
  const submit = () => {
    return "oi";
  }
  return (
    <div className='relative min-h-screen flex justify-center items-center bg-black'>
      <div className="relative flex flex-col justify-center items-center mx-auto  w-80 aspect-square rounded-lg p-16">
        <div className="absolute h-[calc(100%-3px)] w-[calc(100%-3px)] bg-zinc-900 rounded-md"></div>
        <header className="absolute top-2.5 flex items-center">
          <span className="text-sm text-white/50">
            por <i className="bg-gradient-capataz-green bg-clip-text text-transparent">Capataz</i>
          </span>
        </header>
        <img className="relative w-72" src={logo} alt="" />
        <h2 className="relative text-2xl text-center font-bold bg-gradient-capataz-green bg-clip-text text-transparent">
          Admin <br />
          Dashboard
        </h2>

        <form onSubmit={submit} className="relative flex flex-col gap-4 w-full mt-8">
          <div className="relative">
            <input
            className="w-full bg-transparent p-5 pb-1 border-b border-green-700 text-white focus:outline-none peer"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
            />
            <label htmlFor="email" className="absolute text-xs top-4 left-1 text-white/50 transition-all duration-200 ease-in-out transform origin-top-left peer-focus:top-0 peer-focus:text-green-700 peer-valid:top-0 peer-valid:text-green-700">email</label>
          </div>
          <div className="relative">
            <input
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              id="senha"
              className="w-full bg-transparent p-5 pb-1 border-b border-green-700 text-white focus:outline-none peer"
              required
            />
            <label htmlFor="senha" className="absolute text-xs top-4 left-1 text-white/50 transition-all duration-200 ease-in-out transform origin-top-left peer-focus:top-0 peer-focus:text-green-700 peer-valid:top-0 peer-valid:text-green-700">senha</label>
          </div>

          {error && (
            <span className="text-red-400 text-xs text-center">Erro! Email ou senha inválidos.</span>
          )}

          <button type="submit" className="bg-green-700 border-none rounded mt-5 text-white p-2 cursor-pointer active:scale-95">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;