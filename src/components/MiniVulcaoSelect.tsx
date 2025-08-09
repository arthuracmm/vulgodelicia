import type { Dispatch, SetStateAction } from "react";

interface MinivVulcaoSelectProps {
    options: { massa?: string; sabor?: string; topo?: string };
    setOptions: Dispatch<SetStateAction<{ massa?: string; sabor?: string; topo?: string }>>;
}

export default function MinivVulcaoSelect({ options, setOptions }: MinivVulcaoSelectProps) {


    const Massas = [
        {
            name: "Massa Branca",
            description: "Massa de bolo tradicional, ideal para bolos simples.",
            price: 0.0
        },
        {
            name: "Massa de Chocolate",
            description: "Massa de bolo de chocolate, perfeita para bolos de chocolate.",
            price: 0.0
        }
    ];

    const Sabores = [
        
        {
            name: "Beijinho",
            description: "Bolo do seu sabor com cobertura de beijinho.",
            price: 0.0
        },
        {
            name: "Cenoura",
            description: "Bolo de cenoura fofinho com cobertura de chocolate.",
            price: 0.0
        },
        {
            name: "Chocolate 50%",
            description: "Bolo do seu sabor com 50% de cacau, ideal para amantes de chocolate.",
            price: 0.0
        },
        {
            name: "Churros",
            description: "Bolo do seu sabor com recheio de doce de leite.",
            price: 0.0
        },
        {
            name: "Ninho",
            description: "Bolo do seu sabor com cobertura de leite condensado.",
            price: 0.0
        },
        {
            name: "Ninho c/ Nutella",
            description: "Bolo do seu sabor com cobertura de Ninho e Nutella.",
            price: 5.0
        },
        {
            name: "Paçoca",
            description: "Bolo do seu sabor com cobertura de paçoca triturada.",
            price: 0.0
        },
        {
            name: "Surpresa de Morango",
            description: "Bolo do seu sabor com recheio de morango.",
            price: 5.0
        },
        {
            name: "Surpresa de Uva",
            description: "Bolo do seu sabor com recheio de uva.",
            price: 5.0
        },
    ]



    return (
        <div className="flex flex-col mt-2">
            <div className="flex w-full justify-between bg-red-100 p-2 items-center">
                <div className="flex flex-col">
                    <p className="text-sm font-semibold">Selecione a massa do seu Bolo</p>
                    <p className="text-xs text-gray-600">Escolha uma opção</p>
                </div>
                <div className="flex bg-red-500 h-fit py-1 px-2 text-white items-center rounded-full">
                    <p className="text-xs">Obrigatorio</p>
                </div>
            </div>
            {Massas.map((massa, index) => (
                <div
                    className="flex w-full justify-between p-2 border-b border-gray-200 cursor-pointer"
                    onClick={() => setOptions(prev => ({ ...prev, massa: massa.name, massaPrice: massa.price }))}
                    key={index}
                >
                    <div key={index} className="flex flex-col ">
                        <p className="font-semibold">{massa.name}</p>
                        <p className="text-xs text-gray-600">{massa.description}</p>
                        {massa.price > 0 && <p className="text-xs font-semibold text-gray-800">+ R$ {massa.price.toFixed(2)}</p>}
                    </div>
                    <input
                        type="radio"
                        className="rounded-full"
                        name="Massa"
                        value={massa.name}
                        checked={options.massa === massa.name}
                        onChange={() => setOptions(prev => ({ ...prev, sabor: massa.name }))}
                    />
                </div>

            ))}
            <div className="flex w-full justify-between bg-red-100 p-2 items-center">
                <div className="flex flex-col">
                    <p className="text-sm font-semibold">Selecione o Sabor do seu Bolo</p>
                    <p className="text-xs text-gray-600">Escolha uma opção</p>
                </div>
                <div className="flex bg-red-500 h-fit py-1 px-2 text-white items-center rounded-full">
                    <p className="text-xs">Obrigatorio</p>
                </div>
            </div>
            {Sabores.map((sabor, index) => (
                <div className="flex w-full justify-between p-2 border-b border-gray-200 cursor-pointer" onClick={() => setOptions(prev => ({ ...prev, sabor: sabor.name, saborPrice: sabor.price }))} key={index}>
                    <div key={index} className="flex flex-col ">
                        <p className="font-semibold">{sabor.name}</p>
                        <p className="text-xs text-gray-600">{sabor.description}</p>
                        {sabor.price > 0 && <p className="text-xs font-semibold text-green-500">+ R$ {sabor.price.toFixed(2)}</p>}
                    </div>
                    <input
                        type="radio"
                        className="rounded-full"
                        name="Sabor"
                        value={sabor.name}
                        checked={options.sabor === sabor.name}
                        onChange={() => setOptions(prev => ({ ...prev, sabor: sabor.name }))}
                    />
                </div>

            ))}
        </div>
    );
}
