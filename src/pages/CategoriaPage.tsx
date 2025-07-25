import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import FooterItems from "../components/FooterItems";
import databaseData from "../database.json";

export default function CategoriaPage() {
    const { nome } = useParams();
    const categoria = nome?.toLowerCase().replace(/-/g, ' ');
    const data = databaseData.items.filter(
        (item) => item.category.toLowerCase() === categoria
    );

    const removeHyphen = nome ? nome.replace(/-/g, ' ') : '';

    return (
        <div className="flex font-montserrat flex-col items-center justify-center w-full mb-20">
            <Header />
            <Search />
            <div className="flex flex-col w-full">
                <h1 className="text-2xl capitalize font-bold text-white w-full text-center bg-red-500 py-2">
                    {removeHyphen}
                </h1>
                <div className="grid grid-cols-3 gap-1">
                    {data.length > 0 ? (
                        data.map((item: any) => (
                            <Link to={`/item/${item.id}`} key={item.id} className="flex flex-col items-center justify-center bg-white rounded-lg p-1 gap-1">
                                <img src={`/${item.image}`} alt={item.name} className="w-full object-cover rounded-lg aspect-square" />
                                <div className="flex flex-col justify-center w-full font-semibold">
                                    <p className="text-gray-600 text-xs">{item.price}</p>
                                    <p className="text-xs capitalize text-gray-800 mb-2 truncate">{item.name}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-center col-span-3 text-gray-500">Nenhum item encontrado para esta categoria.</p>
                    )}
                </div>
            </div>
            <FooterItems />
        </div>
    );
}
