import { Banknote, CreditCard, Pencil, Store, X } from "lucide-react";
import { useState } from "react";
import Pix from "../../src/assets/pixicon.png";

export default function PaymentMode({ paymentModeSelected, setPaymentMode }: { paymentModeSelected: string; setPaymentMode: (v: string) => void }) {
    const [PaymentModeSelect, setPaymentModeSelect] = useState<boolean>(false);

    return (
        <div className="flex-col w-full">
            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-md font-bold">Método de pagamento</p>
                </div>
                <div className="flex bg-gray-300 h-fit py-1 px-2 text-gray-700 items-center rounded-full">
                    <p className="text-xs font-bold">Obrigatório</p>
                </div>
            </div>

            <div onClick={() => setPaymentModeSelect(true)} className="border border-red-500 p-3 text-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors cursor-pointer mt-4">

                {paymentModeSelected === "Pix" ? (
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-2">
                            <img src={Pix} alt="Pix" className="w-6 h-6" />
                            Pix
                        </div>
                        <Pencil size={20} />
                    </div>
                ) : paymentModeSelected === "Dinheiro" ? (
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-2">
                            <Banknote />
                            Dinheiro
                        </div>
                        <Pencil size={20} />
                    </div>
                ) : paymentModeSelected === "Débito" ? (
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-2">
                            <CreditCard />
                            Débito
                        </div>
                        <Pencil size={20} />
                    </div>
                ) : paymentModeSelected === "Crédito" ? (
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-2">
                            <CreditCard />
                            Crédito
                        </div>
                        <Pencil size={20} />
                    </div>
                ) : (
                    <p>Selecione um método de pagamento</p>
                )}
            </div><div className={`flex flex-col fixed top-3 right-0 w-full h-full bg-white z-10 py-12 ${PaymentModeSelect ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-100'} transition-transform duration-300`}>
                <button onClick={() => setPaymentModeSelect(false)} className="text-white bg-red-500 w-fit p-2 rounded-full cursor-pointer absolute left-2 top-2">
                    <X />
                </button>

                <p className="absolute top-3 left-1/2 -translate-x-1/2 text-lg font-semibold">Método de pagamento</p>

                <div className="flex w-full flex-col p-2 ">
                    <div onClick={() => { setPaymentMode("Pix"); setPaymentModeSelect(false); }} className="flex border border-red-500 p-3 justify-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors cursor-pointer gap-2">
                        <img src={Pix} alt="Pix" className="w-6 h-6" />
                        Pix
                    </div>
                </div>

                <div className="flex w-full flex-col p-2 ">
                    <div onClick={() => { setPaymentMode("Dinheiro"); setPaymentModeSelect(false); }} className="flex border border-red-500 p-3 justify-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors cursor-pointer gap-2">
                        <Banknote />
                        Dinheiro
                    </div>
                </div>

                <div className="flex w-full flex-col p-2 ">
                    <div onClick={() => { setPaymentMode("Débito"); setPaymentModeSelect(false); }} className="flex border border-red-500 p-3 justify-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors cursor-pointer gap-2">
                        <CreditCard />
                        Débito
                    </div>
                </div>

                <div className="flex w-full flex-col p-2 ">
                    <div onClick={() => { setPaymentMode("Crédito"); setPaymentModeSelect(false); }} className="flex border border-red-500 p-3 justify-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors cursor-pointer gap-2">
                        <CreditCard />
                        Crédito
                    </div>
                </div>

            </div>

        </div>
    )
}