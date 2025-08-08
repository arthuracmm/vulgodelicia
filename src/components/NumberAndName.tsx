import type { ChangeEvent } from "react";

export default function NumberAndName({ number, name, setNumber, setName }: { number: string; name: string; setNumber: (v: string) => void; setName: (v: string) => void }) {

    return (
        <div className="flex-col w-full">
            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-md font-bold">Qual o seu Nome?</p>
                </div>
                <div className="flex bg-gray-300 h-fit py-1 px-2 text-gray-700 items-center rounded-full">
                    <p className="text-xs font-bold">Obrigatório</p>
                </div>
            </div>

            <div className="border border-red-500 p-3 text-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors mt-4">
                <input
                    type="text"
                    className="w-full outline-none text-black"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                />
            </div>

            <div className="flex w-full justify-between items-center mt-4">
                <div className="flex flex-col">
                    <p className="text-md font-bold">Qual o seu Numero?</p>
                </div>
                <div className="flex bg-gray-300 h-fit py-1 px-2 text-gray-700 items-center rounded-full">
                    <p className="text-xs font-bold">Obrigatório</p>
                </div>
            </div>

            <div className="border border-red-500 p-3 text-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors mt-4">
                <input
                    type="number"
                    inputMode="numeric"
                    className="w-full outline-none text-black no-spinner"
                    value={number}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
                    placeholder="(16) 99999-9999"
                />
            </div>
        </div>
    )
}
