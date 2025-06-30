import { Search, X } from "lucide-react"
import IconHeader from "../assets/icon-header.png"
import { useState } from "react"

export default function Header() {
    const [SearchVisible, setSearchVisible] = useState(false)
    const [search, setSearch] = useState("")

    return (
        <header className="flex flex-col text-white w-full">
            <div className="flex justify-between bg-pink-100 p-4">
                <a href="/">
                    <img src={IconHeader} alt="Icon Header" className="w-50" />
                </a>
                <div className="flex">
                    <div className="flex items-center justify-center bg-white transition-all border border-red-200 rounded-full aspect-square p-2 cursor-pointer" onClick={() => setSearchVisible(!SearchVisible)}>
                        {SearchVisible ? (
                            <X className="text-red-500 w-5 h-5" />
                        ) : (
                            <Search className="text-red-500 w-5 h-5" />
                        )}
                    </div>
                </div>
            </div>
            {SearchVisible && (
                <div className="flex bg-pink-100 p-4 gap-2">
                    <input type="text" placeholder="Pesquisar" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-white border border-red-300 rounded-full py-2 px-3 text-red-300 w-full text-sm outline-none" />
                    <button className="bg-red-500 text-white rounded-full py-2 px-3 text-sm cursor-pointer">Pesquisar</button>
                </div>
            )}
        </header>
    )
}