import type { Dispatch, SetStateAction } from "react";

interface BolosSelectProps {
    options: { massa?: string; sabor?: string; topo?: string };
    setOptions: Dispatch<SetStateAction<{ massa?: string; sabor?: string; topo?: string }>>;
}

export default function BolosSelect({ options, setOptions }: BolosSelectProps) {


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
            name: "Brigadeiro",
            description: "Delicioso bolo de chocolate com cobertura cremosa.",
            price: 0.0
        },
        {
            name: "Cenoura",
            description: "Bolo de cenoura fofinho com cobertura de chocolate.",
            price: 0.0
        },
        {
            name: "Maracujá C/ Ninho",
            description: "Bolo de maracujá com cobertura de leite ninho.",
            price: 0.0
        },
        {
            name: "Matilda",
            description: "Bolo de chocolate com recheio de brigadeiro e cobertura de chocolate.",
            price: 0.0
        },
        {
            name: "Nata c/ Chocolate Branco e Maracujá",
            description: "Bolo de nata com cobertura de chocolate branco e maracujá.",
            price: 0.0
        },
        {
            name: "Nata c/ Morango",
            description: "Bolo de nata com cobertura de morango.",
            price: 0.0
        },
        {
            name: "Ninho c/ Abacaxi",
            description: "Bolo de leite ninho com cobertura de abacaxi.",
            price: 0.0
        },
        {
            name: "Ninho c/ Morango",
            description: "Bolo de leite ninho com cobertura de morango.",
            price: 0.0
        },
        {
            name: "Ninho c/ Nutella",
            description: "Bolo de leite ninho com cobertura de nutella.",
            price: 0.0
        },
        {
            name: "Red Velvet",
            description: "Bolo de red velvet com cobertura de chocolate.",
            price: 0.0
        }
    ]

    const Topos = [
        {
            name: "Topo de Bolo Padrão",
            description: "Topo de bolo simples e elegante.",
            price: 0.0
        },
        {
            name: "Topo de Bolo Personalizado",
            description: "Topo de bolo personalizado com o tema da festa.",
            price: 10.0
        }
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
                        {sabor.price > 0 && <p className="text-xs font-semibold text-gray-800">+ R$ {sabor.price.toFixed(2)}</p>}
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
            <div className="flex w-full justify-between bg-red-100 p-2 items-center">
                <div className="flex flex-col">
                    <p className="text-sm font-semibold">Selecione o Topo do seu Bolo</p>
                    <p className="text-xs text-gray-600">Escolha uma opção</p>
                </div>
                <div className="flex bg-red-500 h-fit py-1 px-2 text-white items-center rounded-full">
                    <p className="text-xs">Obrigatorio</p>
                </div>
            </div>
            {Topos.map((topo, index) => (
                <div className="flex w-full justify-between p-2 border-b border-gray-200 cursor-pointer" onClick={() => setOptions(prev => ({ ...prev, topo: topo.name, topoPrice : topo.price }))} key={index}>
                    <div key={index} className="flex flex-col ">
                        <p className="font-semibold">{topo.name}</p>
                        <p className="text-xs text-gray-600">{topo.description}</p>
                        {topo.price > 0 && <p className="text-xs font-semibold text-gray-800">+ R$ {topo.price.toFixed(2)}</p>}
                    </div>
                    <input
                        type="radio"
                        className="rounded-full"
                        name="Topo"
                        value={topo.name}
                        checked={options.topo === topo.name}
                        onChange={() => setOptions(prev => ({ ...prev, sabor: topo.name }))}
                    />
                </div>

            ))}
        </div>
    );
}
