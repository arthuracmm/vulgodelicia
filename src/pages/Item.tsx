import { useNavigate, useParams } from "react-router-dom";
import databaseData from "../database.json";
import FooterItems from "../components/FooterItems";
import Header from "../components/Header";
import { ChevronLeft, MessageSquareMore } from "lucide-react";
import BolosSelect from "../components/BolosSelect";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

export default function Item() {
    const { id } = useParams();

    const data = databaseData.items;
    const item = data.find((item) => item.id === Number(id));
    const categoria = item?.category;

    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Adicione estados para opções e observação
    const [observacao, setObservacao] = useState("");
    const [boloOptions, setBoloOptions] = useState<{
        massa?: string;
        massaPrice?: number;
        sabor?: string;
        saborPrice?: number;
        topo?: string;
        topoPrice?: number;
    }>({});

    const massaExtra = boloOptions.massaPrice ?? 0;
    const saborExtra = boloOptions.saborPrice ?? 0;
    const topoExtra = boloOptions.topoPrice ?? 0;
    const totalPrice = item ? Number(item.price) + massaExtra + saborExtra + topoExtra : 0;

    if (!item) {
        return (
            <div className="p-4">
                <button onClick={() => navigate(-1)} className="text-blue-500 underline mb-4">← Voltar</button>
                <h1 className="text-xl font-bold">Item não encontrado</h1>
            </div>
        );
    }

    return (
        <div className="flex font-montserrat flex-col items-center justify-center w-full mb-20">
            <Header />
            <div className="flex flex-col w-full relative">
                <button onClick={() => navigate(-1)} className="text-white bg-red-500 w-fit p-2 rounded-full absolute top-2 left-2 cursor-pointer">
                    <ChevronLeft />
                </button>

                <img src={`/${item.image}`} alt={item.name} className="w-full h-96 object-cover rounded-lg shadow-md" />

                <h1 className="text-lg font-semibold ml-2 mt-2">{item.name}</h1>
                <p className="text-xs text-gray-800 ml-2">{item.description}</p>
                <p className="text-md font-semibold mt-1 ml-2">
                    {categoria === 'Bolos' ? `R$ ${totalPrice.toFixed(2)}` : item.price}
                </p>

                {categoria === 'Bolos' && (
                    <BolosSelect options={boloOptions} setOptions={setBoloOptions} />
                )}

                {categoria === 'Doces' && (
                    <div className="flex">
                        <p>b</p>
                    </div>
                )}

                {categoria === 'Salgados' && (
                    <div className="flex">
                        <p>c</p>
                    </div>
                )}

                <div className="flex flex-col w-full">
                    <div className="flex w-full justify-between bg-red-100 p-2 items-center">
                        <div className="flex w-full justify-between bg-red-100 p-2 items-center">
                            <div className="flex gap-2">
                                <MessageSquareMore size={20} />
                                <p className="text-sm font-semibold">Alguma Observação?</p>
                            </div>
                            <div className="flex bg-red-500 h-fit py-1 px-2 text-white items-center rounded-full">
                                <p className="text-xs">Opcional</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex p-2">
                        <textarea
                            name="observacao"
                            id="observacao"
                            className="w-full h-20 p-2 rounded-md resize-none outline-none border border-gray-300 text-sm"
                            placeholder="Ex: Sem cobertura, sem recheio, etc..."
                            rows={3}
                            value={observacao}
                            onChange={e => setObservacao(e.target.value)}
                        />
                    </div>

                </div>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 cursor-pointer"
                    onClick={() => {
                        if (!boloOptions.massa || !boloOptions.sabor || !boloOptions.topo) {
                            alert("Por favor, selecione todas as opções obrigatórias do bolo.");
                            return;
                        }
                        addToCart({
                            id: item.id,
                            name: item.name,
                            price: categoria === 'Bolos' ? totalPrice : Number(item.price),
                            image: item.image,
                            options: categoria === 'Bolos'
                                ? {
                                    ...(boloOptions.massa && { massa: String(boloOptions.massa) }),
                                    ...(boloOptions.sabor && { sabor: String(boloOptions.sabor) }),
                                    ...(boloOptions.topo && { topo: String(boloOptions.topo) })
                                }
                                : undefined,
                            observation: observacao
                        });
                        navigate("/carrinho");
                    }}
                >
                    Adicionar ao Carrinho
                </button>
            </div>
            <FooterItems />
        </div>


    );
}
