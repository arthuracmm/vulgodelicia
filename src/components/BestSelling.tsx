import { Bike, Clock, Plus, Star } from "lucide-react";

export default function BestSelling() {
    return (
        <div className="flex flex-col overflow-x-auto whitespace-nowrap w-full py-2 px-1 scrollbar-hide pl-2">
            <h1 className="text-lg font-bold text-red-500">Item mais Vendido</h1>
            <div className="flex flex-col mt-1 shadow-sm rounded-xl cursor-pointer relative">
                <div className="flex gap-1 p-2 bg-white rounded-full absolute top-2 left-2">
                    <Star fill="#ffea00" size={15}strokeWidth={0} />
                    <p className="text-xs">4.9</p>
                    <p className="text-xs">(100 avaliações)</p>
                </div>
                <img src="./src/assets/items/mv-sdm1.jpg" alt="Item" className="w-full aspect-video object-cover rounded-t-xl overflow-hidden " />
                <div className="flex justify-between items-center gap-1 bg-white rounded-xl p-2 translate-y-[-10px] pt-[10px]">
                    <div className="flex flex-col">
                        <p className="text-sm font-bold">Mini Vulcão - Surpresa De Morango</p>
                        <div className="flex flex-col  text-zinc-500">
                            <div className="flex gap-1">
                                <Clock size={15} />
                                <p className="text-xs">20 min</p>
                            </div>
                            <div className="flex gap-1">
                                <Bike size={15} />
                                <p className="text-xs">R$ 15,00</p>
                            </div>
                        </div>
                    </div>
                    <button className="flex gap-1 bg-red-500 text-white rounded-lg p-2 w-10 h-10 items-center justify-center">
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}