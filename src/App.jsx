import imgAnimada from "../public/animada.svg"
export default function App() {
  return (
    <div className="w-full h-screen flex bg-[#201b2c]">
      <div className="w-[50%] h-full flex items-center justify-center flex-col">
        <h1 className="text-[#00ff88] text-[30px] font-bold">Entre para o nosso time</h1>
        <img src={imgAnimada} alt="Imagem de Animação" width={500} />

      </div>

      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[50%] h-[350px] bg-[#2f2942] rounded-xl">
          <div className="w-full h-[15%] bg-[#2f2942] flex items-center justify-center">
            <h1 className="text-[#00ff88] text-[30px] font-bold">LOGIN</h1>
          </div>

          <div className="w-full h-[65%] p-[20px]">
            <label htmlFor="user" className="text-[#00ff88]">Usuário</label>
            <input type="text" id="user" className="w-full rounded-md p-[10px] bg-[#514768] text-white mb-" />
            <label htmlFor="password" className="text-[#00ff88]">Senha</label>
            <input type="password" id="password" className="w-full rounded-md p-[10px] bg-[#514768] text-white" />
            <div className="w-full flex items-center justify-center text-[#00ff88] pt-1">
              <a href="">Esqueceu sua senha?</a>
            </div>
          </div>

          <div className="w-full h-[20%] flex  justify-center items-center  p-[20px]">
            <button className="w-full h-[50px] bg-[#00ff88] text-[18px] font-bold text-[#211B2C] rounded-md cursor-pointer shadow-lg shadow-[#33f79c63]">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
