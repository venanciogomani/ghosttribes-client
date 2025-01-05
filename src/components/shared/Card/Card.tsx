interface ICard {
    title: string;
    img: string;
    price: number;
    oldPrice?: number;
    isNew?: boolean;
}

export default function Card({ title, img, price, oldPrice = 0, isNew }: ICard) {
    return (
        <div className="product w-1/4 flex flex-col p-2 border-2 cursor-pointer border-slate-900/0 hover:border-slate-900 transition ease-in-out duration-300 relative">
            <div className="w-full h-80">
                <img src={img} alt={title} className="object-cover w-full h-full flex-shrink-0" />
            </div>
            <div className="py-2">
                <div className="flex justify-between w-full">
                    <div className="flex items-center justify-between w-1/2 border-2 border-pink-600 py-1 px-2">
                        {oldPrice > 0 && <p className="text-sm text-slate-600 line-through">${oldPrice}</p>}
                        <p className="text-sm font-semibold text-slate-700">${price}</p>
                    </div>
                    <button className="btn w-1/2 bg-slate-800 text-sm text-white font-semibold">Add to Cart</button>
                </div>
                <h2 className="pt-2 font-semibold">{title}</h2>
            </div>
            {isNew && <div className="new-product absolute top-2 left-2 bg-pink-600 text-white text-xs font-semibold p-1">New</div>}
        </div>
    )
}