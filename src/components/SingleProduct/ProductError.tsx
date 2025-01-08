import { Link } from "react-router-dom";
import { ProductHeader } from "./ProductHeader";

interface IProductError {
    title?: string;
}

export function ProductError({ title }: IProductError) {
    return (
        <div className="single-product flex flex-col items-center justify-center relative">
            <ProductHeader title={title} />
            <div className="flex items-center justify-center w-full mx-auto max-w-7xl px-2 lg:px-8 py-6 mt-4 w-full">
                <div className="flex flex-col items-center w-1/2">
                    <h1 className="text-7xl font-bold text-slate-900">Uh-oh!</h1>
                    <p className="text-sm text-slate-400 text-center font-semibold underline mt-4">Maybe an orisha did it?</p>
                    <p className="text-slate-600 text-center text-sm my-2">
                        That's on us. Something went wrong loading this page. 
                        Try refreshing the page, drawing upon the lost arts, or contacting the administrator if this problem continues.
                    </p>
                    <Link to="/" className="uppercase py-2 px-4 border-2 border-pink-600 text-center text-sm text-pink-600 font-semibold">
                        Go to homepage
                    </Link>
                </div>
                <img src="/img/kando.png" alt="kando" className="h-60 w-auto" />
            </div>
        </div>
    )
}