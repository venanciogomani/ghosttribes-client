import Card from "../Card/Card";

interface IProducts {
    title: string;
    description?: string;
    limit?: number;
}

export default function Products(
    { title = "Featured Products", limit }: IProducts
) {
    const data = [
        {
            id: 1,
            img: [
                "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
                "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
            ],
            title: "Ghost Tribes: The Ghost of Africa",
            isNew: true,
            oldPrice: 29.99,
            price: 19.99
        },
        {
            id: 2,
            img: [
                "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
            ],
            title: "Ghost Tribes: A Tale of Three Kings",
            isNew: false,
            oldPrice: 0,
            price: 19.99
        },
        {
            id: 3,
            img: [
                "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
            ],
            title: "Ghost Tribes: The Council of Paramounts",
            isNew: true,
            oldPrice: 29.99,
            price: 19.99
        },
        {
            id: 4,
            img: [
                "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
            ],
            title: "Ghost Tribes: Night of the Living Moon",
            isNew: true,
            oldPrice: 29.99,
            price: 19.99
        },
    ];
    const pageLimit = limit || data.length;
    
    return (
        <div className="products flex flex-col items-center justify-center mx-auto max-w-7xl px-0 lg:px-8 py-6">
            <div className="flex justify-between w-full p-2 relative inline-block">
                <h1 className="text-xl font-bold">{title}</h1>
                <span className="absolute left-2 bottom-0 w-[100px] h-[2px] bg-pink-500 flex items-center"></span>
                <button className="btn py-1 px-2 bg-slate-700 text-white text-sm font-semibold">View All</button>
            </div>
            <div className="flex justify-between w-full flex-wrap mt-2">
                {data.map((product) => (
                    <Card 
                        key={product.id}
                        title={product.title}
                        oldPrice={product.oldPrice}
                        price={product.price}
                        img={product.img[0]}
                        isNew={product.isNew}
                    />
                )).slice(0, pageLimit)}
            </div>
        </div>
    );
}