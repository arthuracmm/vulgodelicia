import { ArrowRight, CakeSlice } from "lucide-react"

export default function Categories() {

    const categories = [
        {
            name: "Vulcões",
            background: "bg-red-200"
        },
        {
            name: "Bolos",
            background: "bg-blue-200"
        },
        {
            name: "Salgados",
            background: "bg-green-200"
        },
        {
            name: "Sobremesa",
            background: "bg-yellow-200"
        },
        {
            name: "Bebida",
            background: "bg-purple-200"
        },
    ]
    return (
        <div className="w-full flex flex-col gap-2 ">
            <div className="flex flex-col gap-2 overflow-x-auto whitespace-nowrap w-full py-2 px-1 scrollbar-hide pl-2">
                <div className="flex w-full justify-between">
                    <h1 className="text-lg font-bold">Descobrir por categoria</h1>
                </div>
                <div className="flex flex-row gap-2">
                    {categories.map((category, idx) => (
                        <a key={idx} href="#" className={`flex-shrink-0 cursor-pointer text-center w-25 h-30 flex flex-col items-center overflow-hidden justify-center rounded-xl relative ${category.background}`}>
                            <p>{category.name}</p>
                            <CakeSlice size={100} className="absolute bottom-[-45px]" />
                        </a>
                    ))}

                </div>
            </div>
        </div>
    )
}