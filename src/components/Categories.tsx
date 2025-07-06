import { useState } from "react"

export default function Categories() {

    const categories = [
        {
            name: "Bolos1"
        },
        {
            name: "Bolos2"
        },
        {
            name: "Bolos3"
        },
        {
            name: "Bolos4"
        },
        {
            name: "Bolos5"
        },
    ]

    const [CategorySelected, setCategorySelected] = useState('')

    return (
        <div className="w-full flex flex-col gap-2 ">
            <div className="flex flex-col gap-2 overflow-x-auto whitespace-nowrap w-full py-2 px-1 scrollbar-hide pl-2">
                <div className="flex w-full justify-between">
                    <h1 className="text-lg font-bold">Descobrir por categoria</h1>
                </div>
                <div className="flex flex-row gap-2">
                    {categories.map((category, idx) => (
                        <a key={idx} href="#" className={`cursor-pointer text-center w-20 py-2 flex flex-shrink-0 flex-col items-center overflow-hidden justify-center rounded-xl ${CategorySelected === category.name ? 'bg-red-300 text-white' : 'border-1 border-red-300 text-red-400'}`} onClick={() => setCategorySelected(category.name)}>
                            <p>{category.name}</p>
                        </a>
                    ))}

                </div>
            </div>
        </div>
    )
}