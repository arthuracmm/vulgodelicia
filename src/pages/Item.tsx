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
                <img src={`/${item.image}`} alt={item.name} className="aspect-video object-cover rounded-lg shadow-md" />

                <h1 className="text-lg font-semibold">{item.name}</h1>
                <p className="text-xs text-gray-800">{item.description}</p>
                <p className="text-sm mt-2">{item.price}</p>
            </div>
            <FooterItems />
        </div >

    );
}
