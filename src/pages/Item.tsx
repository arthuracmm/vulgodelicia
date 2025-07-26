import { useNavigate, useParams } from "react-router-dom";
import databaseData from "../database.json";
import FooterItems from "../components/FooterItems";
import Header from "../components/Header";
import { ChevronLeft } from "lucide-react";

export default function Item() {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = databaseData.items;

    const item = data.find((item) => item.id === Number(id));
    const categoria = item?.category;


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

                <h1 className="text-lg font-semibold">{item.name}</h1>
                <p className="text-xs text-gray-800">{item.description}</p>
                <p className="text-md font-semibold mt-1">{item.price}</p>

                {categoria === 'Bolos' && (
                    <div className="flex mt-2">
                        <div className="flex w-full justify-between bg-red-100 p-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-sm font-semibold">Selecione o Sabor do seu Bolo</p>
                                <p className="text-xs text-gray-600">Escolha uma opção</p>
                            </div>
                            <div className="flex bg-red-500 h-fit py-1 px-2 text-white items-center rounded-full">
                                <p className="text-xs">Obrigatorio</p>
                            </div>
                        </div>
                    </div>
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
            </div>
            <FooterItems />
        </div>


    );
}
