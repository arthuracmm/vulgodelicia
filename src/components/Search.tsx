import { SearchIcon } from "lucide-react";

export default function Search() {
    return (
        <div className="flex w-full p-2 bg-red-100/50">
            <div className="flex w-full bg-white rounded-full p-2 items-center gap-2">
                <SearchIcon
                    className="text-red-500"
                    size={20} />
                <input type="text"
                    placeholder="Pesquisar"
                    className="text-sm w-full outline-none"
                />
            </div>
        </div>

    )
}