import { Link, useLocation } from "react-router-dom";
import { HomeIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";

const verifyPath = (path: string) => {
   return useLocation().pathname === path;
}

export default function FooterItems() {
    return (
        <div className="flex fixed bottom-2 rounded-full items-center w-[95%]">
            <div className="flex p-2 rounded-full justify-around w-full bg-red-100">
                <Link to="/" className={`flex items-center justify-center py-3 px-5 rounded-full relative ${verifyPath("/") ? "bg-red-500" : ""}`}>
                    {verifyPath("/") ?
                        <HomeIcon size={24} className="text-white" /> : <HomeIcon size={24} />
                    }
                    {verifyPath("/") && <div className="absolute bottom-1 bg-white py-[2px] px-2 rounded-full" />}
                </Link>

                <Link to="/search" className={`flex items-center justify-center py-3 px-5 rounded-full relative ${verifyPath("/search") ? "bg-red-500" : ""}`}>
                    {verifyPath("/search") ?
                        <SearchIcon size={24} className="text-white" /> : <SearchIcon size={24} />
                    }
                    {verifyPath("/search") && <div className="absolute bottom-1 bg-white py-[2px] px-2 rounded-full" />}
                </Link>

                <Link to="/cart" className={`flex items-center justify-center py-3 px-5 rounded-full relative ${verifyPath("/cart") ? "bg-red-500" : ""}`}>
                    {verifyPath("/cart") ?
                        <ShoppingCartIcon size={24} className="text-white" /> : <ShoppingCartIcon size={24} />
                    }
                    {verifyPath("/cart") && <div className="absolute bottom-1 bg-white py-[2px] px-2 rounded-full" />}
                </Link>
            </div>

        </div>
    )
}