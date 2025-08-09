import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface InputSearchProps {
    inputSearchValue?: string;
}

export default function InputSearch({ inputSearchValue = "" }: InputSearchProps) {
    const [searchTerm, setSearchTerm] = useState(inputSearchValue);

    useEffect(() => {
        setSearchTerm(inputSearchValue);
    }, [inputSearchValue]);

    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            const formattedTerm = searchTerm.toLowerCase().replace(/ /g, '-');
            navigate(`/pesquisa/${formattedTerm}`);
        } else {
            alert("Preencha o campo de pesquisa para realizar a busca");
        }
    };

    return (
        <div className="flex w-full p-2 py-5 bg-red-100/50">
            <div className="flex w-full bg-white rounded-full p-2 py-2 items-center gap-2">
                <SearchIcon className="text-red-500" size={20} />
                <input
                    type="text"
                    placeholder="O que você está procurando?"
                    className="text-sm w-full outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <button
                    onClick={handleSearch}
                    className="bg-red-500 text-sm px-3 py-2 text-white rounded-full hover:bg-red-600 transition-colors cursor-pointer"
                >
                    Pesquisar
                </button>
            </div>
        </div>
    );
}