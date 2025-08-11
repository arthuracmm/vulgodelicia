import { Bike, Pencil, Store, X } from "lucide-react";
import { useState } from "react";

export default function DeliveryMode({ deliveryModeSelected, onlyPickup, setDeliveryMode }: { deliveryModeSelected: string; onlyPickup: boolean; setDeliveryMode: (v: string) => void }) {
    const [deliveryModeSelect, setDeliveryModeSelect] = useState<boolean>(false);

    return (
        <div className="flex-col w-full">
            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-md font-bold">Modo de entrega</p>
                </div>
                <div className="flex bg-gray-300 h-fit py-1 px-2 text-gray-700 items-center rounded-full">
                    <p className="text-xs font-bold">Obrigatório</p>
                </div>
            </div>

            <div onClick={() => setDeliveryModeSelect(true)} className="border border-red-500 p-3 text-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors cursor-pointer mt-4">

                {deliveryModeSelected === "Entrega" ? (
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-2">
                            <Bike />
                            Entrega
                        </div>
                        <Pencil size={20} />
                    </div>
                ) : deliveryModeSelected === "Retirada No Local" ? (
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-2">
                            <Store />
                            Retirada no Local
                        </div>
                        <Pencil size={20} />
                    </div>
                ) : (
                    <p>Selecione um modo de entrega</p>
                )}
            </div>
            <div className={`flex flex-col fixed top-0 right-0 w-full h-full bg-white z-10 py-12 ${deliveryModeSelect ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-100'} transition-transform duration-300`}>
                <button onClick={() => setDeliveryModeSelect(false)} className="text-white bg-red-500 w-fit p-2 rounded-full cursor-pointer absolute left-2 top-2">
                    <X />
                </button>

                <p className="absolute top-3 left-1/2 -translate-x-1/2 text-lg font-semibold">Modo de entrega</p>

                <div className="flex w-full flex-col p-2 ">
                    {!onlyPickup && (
                        <div onClick={() => { setDeliveryMode("Entrega"); setDeliveryModeSelect(false); }} className="flex border border-red-500 p-3 justify-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors cursor-pointer gap-2">
                            <Bike />
                            Entrega
                        </div>
                    )}
                </div>

                <div className="flex w-full flex-col p-2 ">
                    <div onClick={() => { setDeliveryMode("Retirada No Local"); setDeliveryModeSelect(false); }} className="flex border border-red-500 p-3 justify-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors cursor-pointer gap-2">
                        <Store />
                        Retirada no local
                    </div>
                </div>

            </div>

        </div>
    )
}