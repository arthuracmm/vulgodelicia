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

    const [CategorySelected, setCategorySelected] = useState('Bolos1')

    return (
        <div className="w-full flex flex-col gap-2 ">
            <div className="flex flex-col gap-2 overflow-x-auto whitespace-nowrap w-full py-2 px-1 scrollbar-hide pl-2">
                <div className="flex w-full justify-between">
                </div>
                <div className="flex flex-row gap-2">
                    {categories.map((category, idx) => (
                        <a key={idx} href="#" className={`cursor-pointer text-center px-2 py-2 flex flex-shrink-0 flex-col items-center overflow-hidden justify-center rounded-xl ${CategorySelected === category.name ? 'bg-red-500 text-white' : 'border-1 border-zinc-400'}`} onClick={() => setCategorySelected(category.name)}>
                            <p>{category.name}</p>
                        </a>
                    ))}

                </div>
            </div>
        </div>
    )
}