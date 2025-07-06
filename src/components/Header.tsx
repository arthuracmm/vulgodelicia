import { ChevronDown, MapPinned, X } from "lucide-react"
import { useState } from "react"
import Icon from "../assets/icon.png"

export default function Header() {
    const [endereco, setEndereco] = useState({
            lograduro: "",
            numero: "",
            complemento: "",
            cep: "",
            bairro: "",
            cidade: "",
            estado: "",
        
    })
    const [alterarEndereco, setAlterarEndereco] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndereco({ ...endereco, [e.target.name]: e.target.value })
    }

    return (
        <header className="flex flex-col text-white w-full">
            <div className="flex justify-between bg-red-100 p-4">
                <div className="flex">
                    <img src={Icon} alt="Icon" className="w-10" />
                </div>
                <div className="flex gap-2 items-center text-right cursor-pointer" onClick={() => setAlterarEndereco(!alterarEndereco)}>
                    <div className="flex flex-col">
                        <p className="text-red-300 text-sm">Enviar para</p>
                        <div className="flex">
                            <h1 className="text-red-500 text-md font-semibold w-50 truncate">{endereco.lograduro || "Adicionar um endereço"}</h1>
                            <ChevronDown className="text-red-500" size={20} />
                        </div>
                    </div>
                    <MapPinned className="text-red-500" size={25} />
                </div>
            </div>

            {alterarEndereco && (
                <div className="flex fixed top-0 left-0 right-0 bottom-0 bg-red-100/80 p-4 gap-2 items-center justify-center">
                    <div className="flex flex-col w-full h-full bg-white rounded-xl p-4 gap-2 relative justify-center items-center">
                        <button className="bg-red-500 text-white rounded-full py-2 px-2 text-sm cursor-pointer absolute top-4 right-4" onClick={() => setAlterarEndereco(false)}>
                            <X className="text-white" size={20} />
                        </button>
                        <h1 className="text-red-500 text-md font-semibold"> {endereco.lograduro ? "Alterar endereço" : "Adicionar um endereço"}</h1>
                        <form className="grid grid-cols-4 gap-2 p-2">
                            <input type="text" placeholder="Logradouro" className="bg-white border border-zinc-400 rounded-md py-2 px-3 text-black w-full text-sm outline-none col-span-3 " name="lograduro"
                            value={endereco.lograduro} onChange={handleChange} />

                            <input type="text" placeholder="Número" className="bg-white border border-zinc-400 rounded-md py-2 px-3 text-black w-full text-sm outline-none" name="numero"
                            value={endereco.numero} onChange={handleChange} />

                            <input type="text" placeholder="Complemento" className="bg-white border border-zinc-400 rounded-md py-2 px-3 text-black w-full text-sm outline-none col-span-4" name="complemento"
                            value={endereco.complemento} onChange={handleChange}/>

                            <input type="text" placeholder="CEP" className="bg-white border border-zinc-400 rounded-md py-2 px-3 text-black w-full text-sm outline-none" name="cep"
                            value={endereco.cep} onChange={handleChange}/>

                            <input type="text" placeholder="Bairro" className="bg-white border border-zinc-400 rounded-md py-2 px-3 text-black w-full text-sm outline-none col-span-3" name="bairro"
                            value={endereco.bairro} onChange={handleChange}/>

                            <input type="text" placeholder="Cidade" className="bg-white border border-zinc-400 rounded-md py-2 px-3 text-black w-full text-sm outline-none col-span-2" name="cidade"
                            value={endereco.cidade} onChange={handleChange} />

                            <input type="text" placeholder="Estado" className="bg-white border border-zinc-400 rounded-md py-2 px-3 text-black w-full text-sm outline-none col-span-2" name="estado"
                            value={endereco.estado} onChange={handleChange}/>

                            <button className="bg-red-500 text-white rounded-md py-2 px-3 text-sm cursor-pointer col-span-4" onClick= {() => setAlterarEndereco(false)}>Salvar</button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    )
}