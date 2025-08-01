import { useCart } from "../contexts/CartContext";
import FooterItems from "../components/FooterItems";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Cart() {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="flex flex-col items-center justify-center w-full mb-20">
            <Header />
            <div className="flex flex-col w-full relative">
                <div className="flex w-full items-center justify-between p-2">
                    <button onClick={() => navigate(-1)} className="text-white bg-red-500 w-fit p-2 rounded-full cursor-pointer">
                        <ChevronLeft />
                    </button>
                    <h1 className="text-lg   uppercase">Carrinho</h1>
                    <button className="text-red-500 cursor-pointer" onClick={clearCart}>Limpar</button>
                </div>

                <div className="flex flex-col p-2 w-full items-center">
                    {cart.length === 0 ? (
                        <p className="text-gray-500">Seu carrinho está vazio.</p>
                    ) : (
                        cart.map((item, idx) => (
                            <div key={idx} className="flex w-full justify-between items-center p-2 border-b border-gray-200">
                                <div className="flex flex-col">
                                    <h2 className="font-semibold">{item.name}</h2>
                                    {item.options && (
                                        <div>
                                            {Object.entries(item.options).map(([_, value]) => (
                                                <p className="text-sm">- {value}</p>
                                            ))}
                                        </div>
                                    )}
                                    {item.observation && (
                                        <p className="text-sm">- {item.observation}</p>
                                    )}
                                    <p className="font-semibold">R$ {item.price.toFixed(2)}</p>
                                </div>

                                <img src={`/${item.image}`} alt={item.name} className="w-32 h-32 object-cover rounded" />
                            </div>

                        ))
                    )}
                </div>
            </div>
            {cart.length > 0 && (
                <div className="flex flex-col w-full items-center p-4">
                    <a href="/" className="border border-red-500 p-3 text-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors">
                        Adicionar mais itens
                    </a>
                    <div className="flex w-full justify-between py-4 border-b border-gray-200">
                        <p className="text-lg font-semibold">Total</p>
                        <p className="text-lg">R$ {totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            )}
            <FooterItems />
        </div >
    );
}