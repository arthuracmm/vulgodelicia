export default function BestSelling() {
    return (
            <div className="flex flex-col gap-2 overflow-x-auto whitespace-nowrap w-full py-2 px-1 scrollbar-hide pl-2">
                <div className="flex w-full justify-between">
                    <h1 className="text-lg font-bold">Item mais Vendido</h1>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2">
                        <img src="https://rseat.pics/" alt="Item" />
                    </div>
                </div>
        </div>
    )
}