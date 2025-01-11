import { DeleteOutline } from "@mui/icons-material";
import { useGetCartItems } from "../../../hooks/use-get-cart-items";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

export function CartDropdown() {
    const { isLoadingCart, cartItems, removeFromCart, totalPrice } = useGetCartItems(2);

    return (
        <div className="hidden flex-col absolute w-80 right-0 top-full z-10 mt-3 overflow-hidden rounded bg-white shadow-lg dropdown-menu dropdown-cart">
            {isLoadingCart ? (
                <LoadingAnimation />
            ) : (
                <>
                    {cartItems.length === 0 ? (
                        <div className="p-2 text-sm text-slate-600">
                            Nothing to show
                        </div>
                    ) : cartItems.map((item, index) => (
                        <div className="flex items-center justify-between p-2" key={index}>
                            <img 
                                src={item.product.img[0]} 
                                alt="products"
                                className="w-12 h-auto"
                            />
                            <div className="flex flex-col px-1">
                                <p className="text-slate-800 text-sm">
                                    {item.product.title}
                                </p>
                                <p className="text-pink-400 text-xs font-semibold">
                                    Qty: {item.quantity}
                                </p>
                            </div>
                            <DeleteOutline 
                                fontSize="small" 
                                onClick={() => removeFromCart(item.id)} 
                                className="text-rose-600 hover:text-rose-800 cursor-pointer transition duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                    <div className="flex items-center justify-between p-2 border-t-2">
                        <span className="text-sm text-slate-600 font-semibold">
                            SUBTOTAL
                        </span>
                        <p className="text-pink-400 text-sm font-semibold">${totalPrice}</p>
                    </div>
                    <div className="w-full flex items-center">
                        <div 
                            className="w-1/2 py-3 text-center text-white text-sm font-semibold 
                            bg-slate-800 hover:bg-slate-600 transition duration-300 ease-in-out cursor-pointer transition duration-300 ease-in-out"
                        >
                            View Cart
                        </div>
                        <div 
                            className={`w-1/2 py-3 text-center text-white text-sm font-semibold 
                                ${cartItems.length === 0? 'cursor-not-allowed bg-pink-400' 
                                    : 'cursor-pointer bg-pink-600 hover:bg-pink-800 transition duration-300 ease-in-out'}`
                            }
                        >
                            Checkout
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}