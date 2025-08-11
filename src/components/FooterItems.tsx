import { Link, useLocation } from "react-router-dom";
import { HomeIcon, SearchIcon, ShoppingCartIcon} from "lucide-react";

const verifyPath = (path: string) => {
   return useLocation().pathname === path;
}

export default function FooterItems() {
    return (
        <div className="flex fixed bottom-2 rounded-full items-center w-[95%] lg:w-[45%]">
            <div className="flex p-2 rounded-full justify-around w-full bg-red-100">
                <Link to="/" className={`flex items-center justify-center py-3 px-5 rounded-full relative ${verifyPath("/") ? "bg-red-500" : ""}`}>
                    {verifyPath("/") ?
                        <HomeIcon size={24} className="text-white" /> : <HomeIcon size={24} />
                    }
                    {verifyPath("/") && <div className="absolute bottom-1 bg-white py-[2px] px-2 rounded-full" />}
                </Link>

                <Link to="/pesquisa/" className={`flex items-center justify-center py-3 px-5 rounded-full relative ${verifyPath("/pesquisa/") ? "bg-red-500" : ""}`}>
                    {verifyPath("/pesquisa/") ?
                        <SearchIcon size={24} className="text-white" /> : <SearchIcon size={24} />
                    }
                    {verifyPath("/pesquisa/") && <div className="absolute bottom-1 bg-white py-[2px] px-2 rounded-full" />}
                </Link>

                <Link to="/carrinho" className={`flex items-center justify-center py-3 px-5 rounded-full relative ${verifyPath("/carrinho") ? "bg-red-500" : ""}`}>
                    {verifyPath("/carrinho") ?
                        <ShoppingCartIcon size={24} className="text-white" /> : <ShoppingCartIcon size={24} />
                    }
                    {verifyPath("/carrinho") && <div className="absolute bottom-1 bg-white py-[2px] px-2 rounded-full" />}
                </Link>
            </div>

        </div>
    )
}