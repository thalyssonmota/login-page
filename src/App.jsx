import imgAnimada from "../public/animada.svg"
export default function App() {
  return (
    <div className="w-full h-screen flex bg-[#201b2c]">
      <div className="w-[50%] h-full flex items-center justify-center flex-col">
        <h1 className="text-[#00ff88] text-[30px] font-bold">Entre para o nosso time</h1>
        <img src={imgAnimada} alt="Imagem de Animação" width={500}/>

      </div>

      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[50%] h-[350px] bg-[#2f2942] rounded-xl">
          <div className="w-full h-[15%] bg-[#2f2942] flex items-center justify-center">
            <h1 className="text-[#00ff88] text-[30px] font-bold">LOGIN</h1>
          </div>

          <div className="w-full h-[70%] p-[20px]">
            <label htmlFor="user" className="text-[#00ff88]">Usuário</label>
            <input type="text" id="user" className="w-full rounded-md p-[10px] bg-[#514768] text-white mb-" />
            <label htmlFor="password" className="text-[#00ff88]">Senha</label>
            <input type="password" id="password" className="w-full rounded-md p-[10px] bg-[#514768] text-white" />
          </div>

          <div className="w-full h-[15%]">
            
          </div>
        </div>

      </div>
    </div>
  )
}
