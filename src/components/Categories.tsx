import { useLocation } from "react-router-dom";

export default function Categories() {

    const categories = [
        {
            name: "Bolos",
            pathname: 'bolos'
        },
        {
            name: "Mini Vulcão",
            pathname: 'mini-vulcao'
        },
        {
            name: "Doces",
            pathname: 'doces'
        }
    ]

    const pathname = useLocation().pathname;

    return (
        <div className="w-full flex flex-col gap-2 ">
            <div className="flex flex-col gap-2 w-full py-2 px-1">
                <h1 className="text-lg font-bold text-red-500">Categorias</h1>
                <div className="flex flex-row gap-2 w-full">
                    {categories.map((category, idx) => (
                        <a key={idx} href={`/categoria/${category.pathname}`} className={`cursor-pointer text-center px-4 py-2 flex flex-shrink-0 flex-col items-center overflow-hidden justify-center rounded-xl ${pathname === `/${category.pathname}` ? 'bg-red-500 text-white' : 'border-1 border-zinc-400'}`} >
                            <p>{category.name}</p>
                        </a>
                    ))}

                </div>
            </div>
        </div>
    )
}