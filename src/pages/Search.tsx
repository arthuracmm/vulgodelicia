import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import FooterItems from "../components/FooterItems";
import databaseData from "../database.json";
import InputSearch from "../components/InputSearch";
import { ChevronUp, CircleDollarSign } from "lucide-react";
import { useState } from "react";

export default function Search() {
    const { nome } = useParams();
    const pesquisa = nome?.toLowerCase().replace(/-/g, ' ');

    const [orderBy, setOrderBy] = useState<'nome' | 'valor'>('nome');
    const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc');

    const normalizeText = (text: string) =>
        text
            .toLowerCase()
            .replace(/-/g, ' ')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');

    const pesquisaNormalizada = normalizeText(pesquisa ?? '');

    const filteredData = databaseData.items.filter(
        (item) =>
            normalizeText(item.name).includes(pesquisaNormalizada)
    );

    const sortedData = filteredData.sort((a, b) => {
        if (orderBy === 'valor') {
            return orderDirection === 'asc'
                ? a.price - b.price
                : b.price - a.price;
        } else {
            return orderDirection === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }
    });

    const data = sortedData;

    return (
        <div className="flex font-montserrat flex-col items-center justify-center w-full mb-20">
            <Header />
            <InputSearch inputSearchValue={pesquisa ?? ''} />
            <div className="flex flex-col w-full lg:w-1/2">
                <div className="flex flex-col w-full p-2">
                    {data.length > 0 ? (
                        <div className="flex-col w-full">
                            <div className="flex w-full justify-between items-center mb-2">
                                <button
                                    className="flex text-sm cursor-pointer items-center gap-1 text-gray-600 hover:text-red-500 transition-colors"
                                    onClick={() => {
                                        setOrderBy('nome');
                                        setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc');
                                    }}
                                >
                                    Ordenar
                                    <ChevronUp className={orderDirection === 'asc' && orderBy === 'nome' ? "rotate-180" : ""} />
                                </button>

                                <button
                                    className="flex text-sm cursor-pointer items-center gap-1 text-gray-600 hover:text-red-500 transition-colors"
                                    onClick={() => {
                                        setOrderBy('valor');
                                        setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc');
                                    }}
                                >
                                    Preço
                                    <CircleDollarSign className={orderBy === 'valor' && orderDirection === 'asc'? "text-green-500" : ""} />
                                </button>

                            </div>
                            <div className="grid grid-cols-3 gap-1">
                                {data.map((item: any) => (
                                    <Link to={`/item/${item.id}`} key={item.id} className="flex flex-col items-center justify-center bg-white rounded-lg p-1 gap-1">
                                        <img src={`/${item.image}`} alt={item.name} className="w-full object-cover rounded-lg aspect-square" />
                                        <div className="flex flex-col justify-center w-full font-semibold">
                                            <p className="text-gray-600 text-xs">R$ {(item.price).toFixed(2)}</p>
                                            <p className="text-xs capitalize text-gray-800 mb-2 truncate">{item.name}</p>
                                        </div>
                                    </Link>
                                ))}


                            </div>
                        </div>
                    ) : (
                        <p className="text-center col-span-3 text-gray-500 mt-2">Nenhum item encontrado para "{pesquisa}".</p>
                    )}
                </div>
            </div>
            <FooterItems />
        </div>
    );
}
