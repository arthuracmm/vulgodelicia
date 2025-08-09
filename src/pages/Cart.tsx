import { useCart } from "../contexts/CartContext";
import FooterItems from "../components/FooterItems";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Trash } from "lucide-react";
import DeliveryMode from "../components/DeliveryMode";
import PaymentMode from "../components/PaymentMode";
import NumberAndName from "../components/NumberAndName";
import { useState } from "react";

export default function Cart() {
    const { cart, clearCart, removeFromCart } = useCart();
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Estados levantados para Cart
    const [deliveryMode, setDeliveryMode] = useState("");
    const [paymentMode, setPaymentMode] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const hasBoloTradicional = cart.some(
        item => item.options?.massa === "Massa Branca"
    );

    // Checagem de campos obrigatórios
    const allFilled = deliveryMode && paymentMode && name && number;

    // Função para montar mensagem do pedido
    function montarMensagemPedido() {
        let mensagem = `*RECIBO DE PEDIDO*\n`;
        mensagem += `------------------------------\n`;
        mensagem += `*Itens*\n`;

        cart.forEach(item => {
            mensagem += `\n• ${item.name}`;
            if (item.options) {
                Object.entries(item.options).forEach(([_, v]) => {
                    mensagem += `\n   (${v})`;
                });
            }
            if (item.observation) {
                mensagem += `\n   Obs: ${item.observation}`;
            }
            mensagem += `\n   Preço: R$ ${item.price.toFixed(2)}\n`;
        });

        mensagem += `------------------------------\n`;
        mensagem += `*Total:* R$ ${totalPrice.toFixed(2)}\n`;
        mensagem += `*Entrega:* ${deliveryMode}\n`;
        mensagem += `*Pagamento:* ${paymentMode}\n`;
        mensagem += `------------------------------\n`;
        mensagem += `*Cliente:* ${name}\n`;
        mensagem += `*Contato:* ${number}\n`;
        mensagem += `------------------------------\n`;
        mensagem += `Pedido realizado em: ${new Date().toLocaleString('pt-BR')}`;

        return encodeURIComponent(mensagem);
    }


    function finalizarPedido() {
        const mensagem = montarMensagemPedido();
        const numeroLoja = "5516981585876";
        window.open(`https://wa.me/${numeroLoja}?text=${mensagem}`, "_blank");
    }

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
                            <div key={idx} className="flex w-full justify-between items-center p-2 border-b border-gray-200 relative">
                                <div className="flex flex-col">
                                    <h2 className="font-semibold">{item.name}</h2>
                                    {item.options && (
                                        <div>
                                            {Object.entries(item.options)
                                                .filter(([key]) => !key.endsWith('Price')) // Exibe só as opções, não os preços
                                                .map(([key, value]) => {
                                                    const priceKey = `${key}Price`;
                                                    const extraPrice = Number(item.options?.[priceKey] ?? 0);
                                                    return (
                                                        <p className="text-sm" key={key}>
                                                            - {value}
                                                            {extraPrice > 0 && (
                                                                <>
                                                                    <span className="text-xs text-green-500 ml-1 font-semibold">+R${extraPrice.toFixed(2)}</span>
                                                                </>
                                                            )}
                                                        </p>
                                                    );
                                                })}
                                        </div>
                                    )}
                                    {item.observation && (
                                        <p className="text-sm">- {item.observation}</p>
                                    )}
                                    <p className="font-semibold">R$ {item.price.toFixed(2)}</p>
                                </div>

                                <img src={`/${item.image}`} alt={item.name} className="w-32 h-32 object-cover rounded" />

                                <Trash onClick={() => removeFromCart(String(item.id))} size={15} className="absolute top-4 right-4 bg-red-500 text-white p-2 box-content rounded-full cursor-pointer" />
                            </div>

                        ))
                    )}
                </div>
            </div>
            {cart.length > 0 && (
                <div className="flex flex-col w-full items-center p-4 gap-4">
                    <div className="flex flex-col w-full">
                        <a href="/" className="border border-red-500 p-3 text-center text-red-500 w-full rounded-md hover:bg-red-100/50 transition-colors">
                            Adicionar mais itens
                        </a>
                        <div className="flex w-full justify-between py-4 border-b border-gray-200">
                            <p className="text-lg font-semibold">Total</p>
                            <p className="text-lg">R$ {totalPrice.toFixed(2)}</p>
                        </div>
                    </div>

                    <DeliveryMode
                        onlyPickup={hasBoloTradicional}
                        deliveryModeSelected={deliveryMode}
                        setDeliveryMode={setDeliveryMode}
                    />
                    <PaymentMode
                        paymentModeSelected={paymentMode}
                        setPaymentMode={setPaymentMode}
                    />
                    <NumberAndName
                        number={number}
                        name={name}
                        setNumber={setNumber}
                        setName={setName}
                    />

                    <button
                        className={`bg-red-500 p-3 text-center text-white w-full rounded-md hover:bg-red-600 cursor-pointer transition-colors mt-4 ${!allFilled ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!allFilled}
                        onClick={finalizarPedido}
                    >
                        Finalizar Pedido
                    </button>
                </div>
            )}
            <FooterItems />
        </div >
    );
}